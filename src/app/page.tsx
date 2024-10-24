'use client';

import React from 'react';
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Color Showcase</h1>

      {/* Custom color swatches */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-primary text-primary-foreground p-4 rounded">
          Primary Color
        </div>
        <div className="bg-secondary text-secondary-foreground p-4 rounded">
          Secondary Color
        </div>
      </div>

      {/* Text color examples */}
      <div className="space-y-2 mb-8">
        <p className="text-primary">This text is in the primary color</p>
        <p className="text-secondary">This text is in the secondary color</p>
      </div>

      {/* shadcn Button component examples */}
      <div className="space-x-4">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>

      {/* Custom styled elements */}
      <div className="mt-8 space-y-4">
        <div className="border-2 border-primary p-4 rounded">
          Element with primary border
        </div>
        <div className="border-2 border-secondary p-4 rounded">
          Element with secondary border
        </div>
      </div>
    </div>
  );
};

export default Home;
