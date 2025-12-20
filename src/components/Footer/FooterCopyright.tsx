'use client';

import React from 'react';

export default function FooterCopyright() {
    return (
        <div className="border-t border-white/5 pt-2.5 flex justify-center items-center mt-4">
            <p className="text-gray-500 text-xs font-medium text-center tracking-wide">
                © {new Date().getFullYear()} <span className="text-gray-400">Dev Jose Luis</span>. Todos los derechos reservados.
            </p>
        </div>
    );
}
