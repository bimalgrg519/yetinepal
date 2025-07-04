'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function NProgressProvider() {
    const pathname = usePathname()

    useEffect(() => {
        NProgress.start()
        NProgress.done()
    }, [pathname])

    return null
}
