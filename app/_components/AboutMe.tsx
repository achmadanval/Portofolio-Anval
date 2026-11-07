'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    Saya percaya pada pendekatan desain yang berpusat pada pengguna,
                    memastikan setiap proyek yang saya kerjakan disesuaikan untuk
                    memenuhi kebutuhan spesifik penggunanya.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    Tentang saya.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <Image
                            src="/profile.jpg"
                            alt="Achmad Anval Adhiem Allain"
                            width={200}
                            height={250}
                            className="rounded-xl border"
                        />
                        <p className="text-5xl slide-up-and-fade mt-6">
                            Halo, saya Anval.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                Saya mahasiswa aktif D4 Teknik Informatika di
                                Politeknik Negeri Malang, dengan spesialisasi
                                dalam Desain UI/UX, Front-End, dan Pengembangan
                                Web. Saya mengubah riset pengguna dan wireframe
                                menjadi prototipe resolusi tinggi, lalu
                                mengimplementasikannya ke dalam antarmuka web
                                yang responsif dan modular.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Selain antarmuka, saya memiliki keahlian
                                komprehensif dalam arsitektur basis data
                                relasional (SQLite/MySQL), kontainerisasi
                                Docker, serta integrasi model machine learning
                                ke dalam aplikasi mobile — menghadirkan
                                pengalaman pengguna yang berkinerja tinggi dan
                                aksesibel di berbagai perangkat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
