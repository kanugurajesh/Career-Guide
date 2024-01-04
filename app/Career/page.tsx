"use client";

import Image from "next/image"
import styles from '@/styles/career.module.css'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Career() {

    const [selectedCareer, setSelectedCareer] = useState('Please select a career')

    const handleClick = (e: any) => {

        const customValue = e.target.getAttribute('alt')

        toast.success(`You selected ${customValue}`)

        setSelectedCareer(customValue)

        // remove all selected classes
        const images = document.querySelectorAll('img');

        images.forEach((image) => {
            image.classList.remove(`${styles.imageSelected}`);
        });

        console.log(customValue)
        // add selected class to clicked image
        e.target.classList.add(`${styles.imageSelected}`);
    }

    return (
        <main className="p-10 flex mt-10">
            <Toaster />
            <div className={`${styles.imageContainer}`}>
                <Image src="/icons/ux.png" alt="Ux" width={80} height={80} onClick={handleClick} defaultValue="ux" />
                <Image src="/icons/ui-design.png" alt="Frontend" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/backend.png" alt="Backend" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/database.png" alt="Database" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/git.png" alt="Git" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/fullstack.png" alt="Fullstack" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/server.png" alt="Server" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/devops.png" alt="Devops" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/cyber-security.png" alt="Cybersecurity" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/analysis.png" alt="Analysis" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/data-science.png" alt="Datascience" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/ai.png" alt="Ai" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/testing.png" alt="Testing" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/hacker.png" alt="Hacking" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/open-source.png" alt="Opensource" width={80} height={80} onClick={handleClick} />
                <Image src="/icons/blockchain.png" alt="Blockchain" width={80} height={80} onClick={handleClick} />
            </div>
            <div className="flex items-center justify-center">
                <h1>{selectedCareer}</h1>
                <Button variant="outline" className={cn("w-[40px] p-1")}>
                    hello
                </Button>
                <Button variant="outline" className={cn("w-[40px] p-1")}>
                    hello
                </Button>
            </div>
        </main>
    )
}