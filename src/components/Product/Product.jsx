import React, { useState } from "react";

const productData = {
  offer: "Hurry! NOW 10% Off on ₹10,000+ | Code: SAVE10 | Ends 31 Dec.",

  title: "Product & Packaging Labels",

  rating: {
    value: 4.7,
    count: 48,
  },

  price: {
    amount: "₹160.00",
    unit: "₹6.67 / unit · 24 units",
  },

  features: [
    "Upload a logo, product name or ingredients",
    "Self-sticking, printed & delivered in sheets",
    "3 shapes & 2 finish options",
    "Quantities as low as 4",
    "Same Day Delivery in select cities",
  ],

  images: [
    "https://cms.cloudinary.vpsvc.com/image/upload/if_ar_gt_1.1/c_scale,t_pdpHeroGallery_Gallery/if_else/c_scale,w_816/if_end/f_auto,q_auto:best,dpr_2.0/India%20LOB/marketing%20Materials/Labels%20and%20Stickers/Product%20and%20Packaging%20Labels/IN_Product-and-Packaging-Labels_Hero-image_02",
    "https://cms.cloudinary.vpsvc.com/image/upload/if_ar_gt_1.1/c_scale,t_pdpHeroGallery_Gallery/if_else/c_scale,w_816/if_end/f_auto,q_auto:best,dpr_2.0/India%20LOB/marketing%20Materials/Labels%20and%20Stickers/Product%20and%20Packaging%20Labels/IN_Product-and-Packaging-Labels_Hero-image_01",
    "https://cms.cloudinary.vpsvc.com/image/upload/if_ar_gt_1.1/c_scale,t_pdpHeroGallery_Gallery/if_else/c_scale,w_816/if_end/f_auto,q_auto:best,dpr_2.0/India%20LOB/marketing%20Materials/Labels%20and%20Stickers/Product%20and%20Packaging%20Labels/IN_Product-and-Packaging-Labels_Hero-image_03",
    "https://cms.cloudinary.vpsvc.com/image/upload/if_ar_gt_1.1/c_scale,t_pdpHeroGallery_Gallery/if_else/c_scale,w_816/if_end/f_auto,q_auto:best,dpr_2.0/India%20LOB/marketing%20Materials/Labels%20and%20Stickers/Product%20and%20Packaging%20Labels/IN_Product-and-Packaging-Labels_Hero-image_03",
  ],

  options: [
    { label: "Shape", values: ["Round", "Rectangle", "Oval"] },
    { label: "Size", values: ["Small", "Medium", "Large"] },
    { label: "Material", values: ["Paper", "Plastic", "Vinyl"] },
    { label: "Quantity", values: ["24", "48", "96"] },
  ],

  description: {
    heading: "Print custom labels to give products a polished look.",
    text:
      "Custom product labels help customers decide whether your product is right for them. Add ingredients, directions, logos or keep it simple. Our full-color digital printing ensures attractive and functional labels for every business.",
    sizes: [
      "Round – Small: 3.8 cm diameter",
      "Round – Large: 7.6 cm diameter",
      "Rectangle – Small: 8.7 × 4.9 cm",
      "Rectangle – Large: 10.2 × 7.6 cm",
    ],
    sheetInfo: [
      "Circle Small – 24 labels",
      "Circle Large – 6 labels",
      "Oval Small – 10 labels",
      "Oval Large – 4 labels",
    ],
    origin: "India",
  },
};

export default function Product() {
  const [activeImage, setActiveImage] = useState(productData.images[0]);

  return (
    <div className="px-4 mx-auto max-w-7xl">

      {/* OFFER BAR */}
      <div className="py-2 text-sm text-center text-white bg-black">
        {productData.offer}
      </div>

      {/* PRODUCT SECTION */}
      <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2">

        {/* LEFT - IMAGES */}
        <div>
          <div className="relative overflow-hidden border rounded-lg">
            <img
              src={activeImage}
              alt="Product"
              className="w-full"
            />
            <button className="absolute text-xl top-3 right-3">
              ♡
            </button>
          </div>

          <div className="flex gap-3 mt-4">
            {productData.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-16 h-16 border rounded cursor-pointer ${activeImage === img
                  ? "border-black"
                  : "border-gray-300"
                  }`}
                alt="thumb"
              />
            ))}
          </div>
        </div>

        {/* RIGHT - DETAILS */}
        <div>
          <h1 className="text-2xl font-semibold">
            {productData.title}
          </h1>

          <div className="mt-2 text-yellow-500">
            ⭐⭐⭐⭐⭐
            <span className="ml-2 text-gray-600">
              {productData.rating.value} ({productData.rating.count})
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-gray-700">
            {productData.features.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>

          <div className="mt-4 text-2xl font-bold">
            {productData.price.amount}
            <span className="block text-sm font-normal text-gray-500">
              {productData.price.unit}
            </span>
          </div>

          {/* OPTIONS */}
          <div className="grid grid-cols-2 gap-4 mt-5">
            {productData.options.map((opt, index) => (
              <select
                key={index}
                className="px-3 py-2 border rounded"
              >
                <option>{opt.label}</option>
                {opt.values.map((val, i) => (
                  <option key={i}>{val}</option>
                ))}
              </select>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 border rounded">
              Browse designs
            </button>
            <button className="px-6 py-2 text-white bg-black rounded">
              Upload design
            </button>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="max-w-4xl mt-12">
        <h2 className="text-xl font-semibold">
          {productData.description.heading}
        </h2>

        <p className="mt-3 text-gray-700">
          {productData.description.text}
        </p>

        <h3 className="mt-6 font-semibold">
          Choose the right size for your need
        </h3>
        <ul className="mt-2 ml-6 text-gray-700 list-disc">
          {productData.description.sizes.map((size, i) => (
            <li key={i}>{size}</li>
          ))}
        </ul>

        <h3 className="mt-6 font-semibold">
          Number of labels per sheet
        </h3>
        <ul className="mt-2 ml-6 text-gray-700 list-disc">
          {productData.description.sheetInfo.map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-gray-600">
          Country of origin:{" "}
          <b>{productData.description.origin}</b>
        </p>


      </div>
      {/* RELATED PRODUCTS */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold">Related products</h2>

        <div className="flex gap-6 pb-4 overflow-x-auto">
          {[
            { title: "Sheet Stickers", price: "24 starting at ₹160.00", img: "https://cms.cloudinary.vpsvc.com/image/upload/if_ar_gt_1.1/c_scale,t_pdpHeroGallery_Gallery/if_else/c_scale,w_816/if_end/f_auto,q_auto:best,dpr_2.0/india%20lob/stickers/custom%20stickers/in_custom_stickers_001" },
            { title: "Custom Car Stickers", price: "5 starting at ₹240.00", img: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto:good,w_700/india%20lob/stickers/in_sticker-singles_overview" },
            { title: "Sticker Singles", price: "50 starting at ₹245.00", img: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_300/India%20LOB/marketing%20Materials/Labels%20and%20Stickers/Product%20and%20Packaging%20Labels/IN_Product-and-Packaging-Labels_Overview" },
            { title: "QR Code Stickers", price: "50 starting at ₹270.00", img: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto:good,w_700/india%20lob/stickers/in_sticker-singles_overview" },
          ].map((item, i) => (
            <div key={i} className="min-w-[220px]">
              <div className="relative overflow-hidden rounded-xl">
                <img src={item.img} className="object-cover w-full h-48" />
                <button className="absolute p-2 bg-white rounded-full top-2 right-2">♡</button>
              </div>
              <h3 className="mt-3 font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FREQUENTLY BOUGHT TOGETHER */}
      <div className="mt-20">
        <h2 className="mb-6 text-2xl font-semibold">
          Frequently bought together
        </h2>

        <div className="flex flex-wrap items-center gap-6">
          {/* PRODUCTS */}
          {[
            {
              title: "Product & Packaging Labels",
              price: "₹160.00",
              img: "https://cms.cloudinary.vpsvc.com/image/upload/if_ar_gt_1.1/c_scale,t_pdpHeroGallery_Gallery/if_else/c_scale,w_816/if_end/f_auto,q_auto:best,dpr_2.0/india%20lob/thank%20you%20card/in_thank-you-cards_001",
              checked: true,
            },
            {
              title: "Sheet Stickers",
              price: "₹240.00",
              img: "https://cms.cloudinary.vpsvc.com/image/upload/if_ar_gt_1.1/c_scale,t_pdpHeroGallery_Gallery/if_else/c_scale,w_816/if_end/f_auto,q_auto:best,dpr_2.0/India%20LOB/Postcards/IN_Postcards_002",
              checked: true,
            },
            {
              title: "QR Code Stickers",
              price: "₹270.00",
              img: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto:good,w_700/India%20LOB/Postcards/IN-postcards-overview",
              checked: false,
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <input
                type="checkbox"
                defaultChecked={item.checked}
                className="mt-2 accent-black"
              />

              <div className="w-40">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-32 rounded-lg"
                />
                <p className="mt-2 text-sm font-medium">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">
                  {item.price}
                </p>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          
        </div>
      </div>


      {/* RECENTLY VIEWED */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold">Your recently viewed items</h2>

        <div className="w-56">
          <div className="relative overflow-hidden rounded-xl">
            <img src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_300/India%20LOB/marketing%20Materials/Labels%20and%20Stickers/Product%20and%20Packaging%20Labels/IN_Product-and-Packaging-Labels_Overview" className="object-cover w-full h-56" />
            <button className="absolute p-2 bg-white rounded-full top-2 right-2">♡</button>
          </div>
          <h3 className="mt-3 font-medium">Polyester T-shirts</h3>
          <p className="text-sm text-gray-500">1 starting at ₹320.00</p>
        </div>
      </div>

      {/* REVIEWS SUMMARY */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold">Reviews</h2>

        <div className="flex items-center gap-3 mt-3">
          <span className="text-xl text-orange-500">★★★★★</span>
          <span className="text-gray-700">
            {productData.rating.value} ({productData.rating.count})
          </span>
        </div>

        <button className="px-6 py-3 mt-6 border rounded-lg">
          Write a Review
        </button>
      </div>

      {/* REVIEWS LIST */}
      <div className="mt-12">
        <h3 className="mb-6 text-xl font-semibold">
          Reviewed by {productData.rating.count} customers
        </h3>

        {[
          {
            name: "Teresa G.",
            date: "26 Oct 2025",
            title: "Yes, order was quick and genuine",
            text: "Yes I loved it",
          },
          {
            name: "Prem K.",
            date: "24 Oct 2025",
            title: "Quality",
            text: "Very good",
          },
          {
            name: "Saagar A.",
            date: "23 Oct 2025",
            title: "Best product",
            text: "Top quality",
          },
        ].map((review, i) => (
          <div key={i} className="py-6 border-t">
            <div className="text-orange-500">★★★★★</div>
            <h4 className="mt-2 font-medium">{review.title}</h4>
            <p className="mt-1 text-sm text-gray-500">
              {review.date} | {review.name} · Verified Buyer
            </p>
            <p className="mt-3 text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-end gap-3 mt-6">
        <button className="px-3 py-1 border rounded">&lt;</button>
        <button className="px-3 py-1 font-semibold border rounded">1</button>
        <button className="px-3 py-1 border rounded">2</button>
        <button className="px-3 py-1 border rounded">3</button>
        <span>…</span>
      </div>

      {/* FAQ SECTION */}
      <div className="px-6 py-16 mt-20 rounded-lg bg-[#f7f6ef]">
        <h2 className="mb-8 text-3xl font-semibold">
          Frequently Asked Questions
        </h2>

        {[
          "How do I customize my labels online?",
          "Do you offer sheet label colours other than white?",
          "What size are the label sheets?",
          "Can I write on these labels?",
          "How durable are paper custom labels?",
          "Can the label sheets be printed on?",
        ].map((q, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-5 border-t cursor-pointer"
          >
            <span className="font-medium">{q}</span>
            <span className="text-xl">›</span>
          </div>
        ))}
      </div>

    </div>
  );
}