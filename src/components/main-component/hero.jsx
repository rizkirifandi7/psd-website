import React from 'react';
import Android from "../ui/android";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="py-4 px-6">
      <div className="flex items-center">
        <div className="basis-1/2 space-y-5">
          <h1 className="text-4xl font-bold">Penggunaan Smartphone dan Perilaku</h1>
          <p className="text-base text-muted-foreground">Memberikan informasi tentang Keterlibatan Pengguna dan Pola Penggunaan Aplikasi di Berbagai Kelompok Usia.</p>
          <Button className="">
            <a href="">
              Download Dataset
            </a>
          </Button>
        </div>
        <div className="basis-1/2 flex items-center justify-center">
          <div className="relative">
            <Android className="w-full h-[400px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);