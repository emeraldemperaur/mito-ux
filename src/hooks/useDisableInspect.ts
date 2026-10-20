import { useEffect } from 'react';

export const useTargetedInspectDeterrent = () => {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            const hasTextSelection = window.getSelection()?.toString().trim().length !== 0;

            const isInteractiveElement = target.closest('a, input, textarea, button, [contenteditable="true"]');

            if (!hasTextSelection && !isInteractiveElement) {
                e.preventDefault();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'F12') {
                e.preventDefault();
            }
            
            if (
                (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
                (e.metaKey && e.altKey && ['I', 'J', 'C'].includes(e.key.toUpperCase()))
            ) {
                e.preventDefault();
            }

            if (
                (e.ctrlKey && e.key.toUpperCase() === 'U') ||
                (e.metaKey && e.altKey && e.key.toUpperCase() === 'U')
            ) {
                e.preventDefault();
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
};