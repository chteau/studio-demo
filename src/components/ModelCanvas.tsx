/* Dependencies */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import Config from "../Config";

/* Asset URL — Vite resolves this at build time */
import modelUrl from "../assets/Bambo_House.obj?url";

/* 3D wireframe model that reacts to cursor movement and auto-rotates */
export default function ModelCanvas() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const { model } = Config.hero;

        /* --- Renderer --- */
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        /* --- Scene & Camera --- */
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            50,
            mount.clientWidth / mount.clientHeight,
            0.1,
            100
        );
        camera.position.z = 9;

        /* --- Track loaded disposables for cleanup --- */
        const edgeGeos: THREE.EdgesGeometry[] = [];
        const edgeMats: THREE.LineBasicMaterial[] = [];
        let modelGroup: THREE.Group | null = null;

        /* --- Load OBJ --- */
        const loader = new OBJLoader();
        loader.load(modelUrl, (obj) => {
            const group = new THREE.Group();

            obj.traverse((child) => {
                if (!(child instanceof THREE.Mesh)) return;

                /* Bake parent transforms so the edges align correctly */
                child.updateWorldMatrix(true, false);
                const worldGeo = child.geometry.clone();
                worldGeo.applyMatrix4(child.matrixWorld);

                const edges = new THREE.EdgesGeometry(worldGeo, 15);
                const mat = new THREE.LineBasicMaterial({
                    color: new THREE.Color(model.color),
                    transparent: true,
                    opacity: model.opacity,
                });

                group.add(new THREE.LineSegments(edges, mat));
                edgeGeos.push(edges);
                edgeMats.push(mat);
                worldGeo.dispose();
            });

            /* Center the model around its own origin */
            const box = new THREE.Box3().setFromObject(group);
            const center = box.getCenter(new THREE.Vector3());
            group.children.forEach((c) => c.position.sub(center));

            /* Normalize scale so the longest axis equals model.scale */
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            if (maxDim > 0) group.scale.setScalar(model.scale / maxDim);

            /* Place on the right side of the hero */
            group.position.set(model.sceneX, model.sceneY, 0);

            scene.add(group);
            modelGroup = group;
        });

        /* --- Mouse tracking --- */
        const target = { x: 0, y: 0 };
        const current = { x: 0, y: 0 };
        let autoAngle = 0;

        const onMouseMove = (e: MouseEvent) => {
            const rect = mount.getBoundingClientRect();
            target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        };
        window.addEventListener("mousemove", onMouseMove);

        /* --- Resize --- */
        const onResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener("resize", onResize);

        /* --- Animation loop --- */
        let rafId: number;
        const animate = () => {
            rafId = requestAnimationFrame(animate);

            autoAngle += model.autoRotateSpeed;

            current.x += (target.y * model.mouseInfluence - current.x) * 0.04;
            current.y += (target.x * model.mouseInfluence - current.y) * 0.04;

            if (modelGroup) {
                modelGroup.rotation.x = current.x;
                modelGroup.rotation.y = current.y + autoAngle;
            }

            renderer.render(scene, camera);
        };
        animate();

        /* --- Cleanup --- */
        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);
            edgeGeos.forEach((g) => g.dispose());
            edgeMats.forEach((m) => m.dispose());
            renderer.dispose();
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 z-[1] pointer-events-none"
        />
    );
}
