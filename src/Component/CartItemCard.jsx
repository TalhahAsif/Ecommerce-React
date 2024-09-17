import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";

export default function CartItemCard({ image, title, price, brand, quntity }) {
  return (
    <Card
      isBlurred
      className="border-none bg-background/10 dark:bg-default-100/50 max-w-[610px] text-white"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-contain"
              height={200}
              shadow="md"
              src={image}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-small">{brand}</p>
                <h1 className="text-large font-medium mt-2">
                  {price} x <span> {quntity}</span>
                </h1>
              </div>
            </div>

            <div className="flex flex-col mt-3 gap-1"></div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
