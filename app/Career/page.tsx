"use client";

import Image from "next/image"
import styles from '@/styles/career.module.css'

export default function Career() {

    const handleClick = (e:any) => {
        // remove all selected classes
        const images = document.querySelectorAll('img');
        images.forEach((image) => {
            image.classList.remove(`${styles.imageSelected}`);
        });

        // add selected class to clicked image
        e.target.classList.add(`${styles.imageSelected}`);
    }

    return (
        <main className="p-10 flex mt-10">
            <div className={`${styles.imageContainer}`}>
                <Image src="/icons/ux.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/ui-design.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/backend.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/database.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/git.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/fullstack.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/server.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/devops.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/cyber-security.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/analysis.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/data-science.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/ai.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/testing.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/hacker.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/open-source.png" alt="UX" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/blockchain.png" alt="UX" width={80} height={80} onClick={handleClick} />
            </div>
        </main>
    )
}