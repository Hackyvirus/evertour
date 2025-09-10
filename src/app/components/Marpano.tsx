"use client";

import { useEffect, useRef } from "react";

export default function MarzipanoViewer() {
    const viewerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        import("marzipano").then((Marzipano) => {
            if (!viewerRef.current) return;

            const viewer = new Marzipano.Viewer(viewerRef.current);

            const source = Marzipano.ImageUrlSource.fromString("/images/main-building.jpg");
            const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
            const view = new Marzipano.RectilinearView();

            const scene = viewer.createScene({
                source,
                geometry,
                view,
                pinFirstLevel: true,
            });

            scene.switchTo();

            const controls = viewer.controls();

            controls.registerMethod("mouseViewDrag", new Marzipano.MouseViewDragHandler(), true);
            controls.registerMethod("touchViewDrag", new Marzipano.TouchViewDragHandler(), true);
            controls.registerMethod("mouseZoom", new Marzipano.MouseZoomHandler(), true);
            // ✅ Autorotate
            const autorotate = Marzipano.autorotate({
                yawSpeed: 0.03,
                targetPitch: 0,
                targetFov: Math.PI / 2,
            });

            viewer.startMovement(autorotate);
            viewer.setIdleMovement(3000, autorotate);
        });
    }, []);

    return <div ref={viewerRef} className="w-full h-[500px]" />;
}
