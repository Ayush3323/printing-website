export const fetchMenuData = () => {
  return Promise.resolve([
    {
      id: "visiting",
      label: "Visiting Cards",

      sections: [
        {
          title: "Visiting Cards",
          links: [
            { name: "Standard Visiting Cards", path: "/visiting/standard" },
            { name: "Classic Visiting Cards", path: "/visiting/classic" },
            {
              name: "Rounded Corner Visiting Cards",
              path: "/visiting/rounded",
            },
            { name: "Square Visiting Cards", path: "/visiting/square" },
            {
              name: "Leaf Visiting Cards",
              path: "/visiting/leaf",
              isNew: true,
            },
            {
              name: "Oval Visiting Cards",
              path: "/visiting/oval",
              isNew: true,
            },
            {
              name: "Circle Visiting Cards",
              path: "/visiting/circle",
              isNew: true,
            },
          ],
        },

        {
          title: "Digital Visiting Cards",
          links: [
            { name: "QR Code Visiting Cards", path: "/visiting/qr" },
            { name: "NFC Visiting Cards", path: "/visiting/nfc" },
          ],
        },

        {
          title: "Brilliant Finishes",
          links: [
            { name: "Spot UV Visiting Cards", path: "/visiting/spot-uv" },
            {
              name: "Raised Foil Visiting Cards",
              path: "/visiting/raised-foil",
            },
          ],
        },

        {
          title: "Standard Papers",
          links: [
            { name: "Glossy Visiting Cards", path: "/visiting/glossy" },
            { name: "Matte Visiting Cards", path: "/visiting/matte" },
            {
              name: "Bulk Visiting Cards",
              path: "/visiting/bulk",
              isNew: true,
            },
          ],
        },

        {
          title: "Specialty Cards",
          links: [
            { name: "Magnetic Visiting Cards", path: "/visiting/magnetic" },
            {
              name: "Transparent Visiting Cards",
              path: "/visiting/transparent",
            },
          ],
        },

        {
          title: "Premium Papers",
          links: [
            {
              name: "Premium Plus Visiting Cards",
              path: "/visiting/premium-plus",
            },
            {
              name: "Non-Tearable Visiting Cards",
              path: "/visiting/non-tearable",
            },
            { name: "Velvet Touch Visiting Cards", path: "/visiting/velvet" },
            {
              name: "Pearl Visiting Cards",
              path: "/visiting/pearl",
              isNew: true,
            },
            {
              name: "Kraft Visiting Cards",
              path: "/visiting/kraft",
              isNew: true,
            },
            {
              name: "Diamond Visiting Cards",
              path: "/visiting/diamond",
              isNew: true,
            },
          ],
        },

        {
          title: "Design and Logo",
          links: [
            { name: "Design Services", path: "/design/services", isNew: true },
            { name: "Logo Maker", path: "/design/logo-maker" },
          ],
        },

        {
          title: "Visiting Cards Holder",
          links: [
            {
              name: "Engraved Metal Visiting Card Holders",
              path: "/holders/engraved-metal",
            },
            {
              name: "Metal Visiting Card Holder",
              path: "/holders/metal",
            },
            {
              name: "Leatherite Visiting Cards Holder",
              path: "/holders/leatherite",
            },
            {
              name: "Premium Metal Card Holders",
              path: "/holders/premium-metal",
              isNew: true,
            },
          ],
        },
      ],

      footerLink: {
        label: "see all visiting cards",
        path: "/visiting",
      },
    },
    {
      id: "stationery",
      label: "Stationery, Letterheads & Notebooks",

      sections: [
        {
          title: "Custom Stationery",
          links: [
            { name: "Letterheads", path: "/stationery/letterheads" },
            {
              name: "Custom Letterhead Pads",
              path: "/stationery/letterhead-pads",
            },
            { name: "Bill Books", path: "/stationery/bill-books" },
            { name: "Envelopes", path: "/stationery/envelopes" },
            { name: "Custom Mouse Pads", path: "/stationery/mouse-pads" },
            { name: "Envelope Seals", path: "/stationery/envelope-seals" },
            { name: "Custom Pen Drive", path: "/stationery/pen-drive" },
            { name: "Laptop Skins", path: "/stationery/laptop-skins" },
            { name: "Bulk Letterheads", path: "/stationery/bulk-letterheads" },
            { name: "Custom Pens", path: "/stationery/custom-pens" },
          ],
        },

        {
          title: "Office Supplies",
          links: [
            { name: "Lanyards", path: "/office/lanyards" },
            { name: "ID Cards", path: "/office/id-cards" },
            { name: "Invoice Books", path: "/office/invoice-books" },
            { name: "Note Cards", path: "/office/note-cards" },
            { name: "Custom Certificates", path: "/office/certificates" },
            { name: "Awards", path: "/office/awards" },
            { name: "Coasters", path: "/office/coasters" },
            { name: "Employee Welcome Kit", path: "/office/welcome-kit" },
            { name: "Cash Vouchers", path: "/office/cash-vouchers" },
            { name: "Paper Identity Cards", path: "/office/identity-cards" },
          ],
        },

        {
          title: "Custom Notebooks & Diaries",
          links: [
            { name: "Personalised Notebooks", path: "/notebooks/personalised" },
            { name: "Diary with Pen Holder", path: "/notebooks/pen-holder" },
            { name: "Personalised A5 Diary", path: "/notebooks/a5-diary" },
            {
              name: "Personalised Diary with Magnetic Lock",
              path: "/notebooks/magnetic-lock",
            },
            { name: "Notebook A4 Size", path: "/notebooks/a4" },
          ],
        },

        {
          title: "Custom Pens",
          links: [
            { name: "Customized Pens", path: "/pens/customized" },
            { name: "Personalised Pens", path: "/pens/personalised" },
            {
              name: "Premium Magnetic Metal Roller Pens",
              path: "/pens/metal-roller",
            },
            {
              name: "Wooden Finish Metal Ball Pens",
              path: "/pens/wooden-finish",
            },
            { name: "Premium Matte Pens", path: "/pens/matte" },
          ],
        },

        {
          title: "Wedding Stationery",
          links: [
            { name: "Wedding Invitations", path: "/wedding/invitations" },
            { name: "Save the Date Cards", path: "/wedding/save-the-date" },
            { name: "Wedding Menu", path: "/wedding/menu" },
            { name: "Wedding Programmes", path: "/wedding/programmes" },
            {
              name: "Shop all Wedding Stationery",
              path: "/wedding",
              isBold: true,
            },
          ],
        },

        {
          title: "Invitations & Announcements",
          links: [
            { name: "Thank You Cards", path: "/invites/thank-you" },
            { name: "Birthday Invitations", path: "/invites/birthday" },
            { name: "Party Invitations", path: "/invites/party" },
            { name: "Moving Announcements", path: "/invites/moving" },
            {
              name: "Shop all Invitations and Announcements",
              path: "/invites",
              isBold: true,
            },
          ],
        },

        {
          title: "Files and Folders",
          links: [
            { name: "Presentation Folders", path: "/files/presentation" },
            { name: "Ring Binder File", path: "/files/ring-binder" },
            {
              name: "Presentation File with Pocket",
              path: "/files/pocket",
            },
            {
              name: "Shop all Files and Folders",
              path: "/files",
              isBold: true,
            },
          ],
        },

        {
          title: "Custom Keychains",
          links: [
            { name: "Keychain with Light", path: "/keychains/light" },
            { name: "Acrylic Keychains", path: "/keychains/acrylic" },
            { name: "Oval Metal Keychains", path: "/keychains/oval-metal" },
            {
              name: "Shop all Custom Keychains",
              path: "/keychains",
              isBold: true,
            },
          ],
        },

        {
          title: "New Arrivals",
          links: [
            {
              name: "Classic Executive Diary",
              path: "/new/classic-executive-diary",
              isNew: true,
            },
            { name: "Office Stationery Kit", path: "/new/stationery-kit" },
            { name: "Custom Logo Notebooks", path: "/new/logo-notebooks" },
            { name: "Business Envelopes", path: "/new/business-envelopes" },
            {
              name: "Worldwide 2026 Leather Diary",
              path: "/new/2026-diary",
              isNew: true,
            },
            { name: "Gold Foil Wedding Invitations", path: "/new/gold-foil" },
            { name: "Photo Keychains", path: "/new/photo-keychains" },
            { name: "Mousepad with Wrist Support", path: "/new/mousepad" },
            { name: "Bulk Diaries", path: "/new/bulk-diaries" },
          ],
        },
      ],

      footerLink: {
        label: "see all stationery, letterheads & notebooks",
        path: "/stationery",
      },
    },
    {
      id: "signs-marketing",
      label: "Signs, Posters & Marketing Materials",

      sections: [
        {
          title: "Signs and Posters",
          links: [
            { name: "Standees", path: "/signs/standees" },
            { name: "Posters", path: "/signs/posters" },
            { name: "Bulk Posters", path: "/signs/bulk-posters" },
            { name: "Banners", path: "/signs/banners" },
            { name: "Tabletop Standees", path: "/signs/tabletop-standees" },
            { name: "Foam Boards", path: "/signs/foam-boards" },
            { name: "Tabletop Signs", path: "/signs/tabletop-signs" },
            { name: "Tent Cards", path: "/signs/tent-cards" },
            {
              name: "Shop all Signs & Posters",
              path: "/signs",
              isBold: true,
            },
          ],
        },

        {
          title: "Marketing Materials",
          links: [
            { name: "Flyers", path: "/marketing/flyers" },
            {
              name: "Presentation Folders",
              path: "/marketing/presentation-folders",
            },
            { name: "Brochures", path: "/marketing/brochures" },
            { name: "Booklets", path: "/marketing/booklets" },
            { name: "Bulk Flyers", path: "/marketing/bulk-flyers" },
            { name: "Postcards", path: "/marketing/postcards" },
            { name: "Canvas Rolls", path: "/marketing/canvas-rolls" },
            { name: "Custom Mouse Pads", path: "/marketing/mouse-pads" },
            { name: "Custom Bookmarks", path: "/marketing/bookmarks" },
          ],
        },

        {
          title: "More in Signs",
          links: [
            { name: "Acrylic Signs", path: "/signs/acrylic" },
            { name: "Outdoor Signs", path: "/signs/outdoor" },
            { name: "Plastic Signboards", path: "/signs/plastic" },
            { name: "Board Signs", path: "/signs/board" },
            { name: "Canvas Signs", path: "/signs/canvas" },
            { name: "Magnetic Signs", path: "/signs/magnetic" },
            { name: "Exit Signs", path: "/signs/exit" },
            { name: "Women's Restroom Signs", path: "/signs/women-restroom" },
            { name: "Men's Restroom Signs", path: "/signs/men-restroom" },
          ],
        },

        {
          title: "More in Marketing",
          links: [
            {
              name: "Custom Car Door Decals",
              path: "/marketing/car-door-decals",
            },
            { name: "Door Hangers", path: "/marketing/door-hangers" },
            { name: "Danglers", path: "/marketing/danglers" },
            { name: "Menu Cards", path: "/marketing/menu-cards" },
            { name: "Rate Cards", path: "/marketing/rate-cards" },
            { name: "Loyalty Cards", path: "/marketing/loyalty-cards" },
            {
              name: "Custom Gift Certificates",
              path: "/marketing/gift-certificates",
            },
            { name: "Button Badges", path: "/marketing/button-badges" },
            { name: "Paper Bags", path: "/marketing/paper-bags" },
            { name: "Custom Keychains", path: "/marketing/keychains" },
          ],
        },

        {
          title: "Table Coverings",
          links: [
            { name: "Custom Tablecloths", path: "/table/tablecloths" },
            { name: "Table Runners", path: "/table/runners" },
            { name: "Table Mats", path: "/table/mats" },
            { name: "Place Mats", path: "/table/place-mats" },
          ],
        },

        {
          title: "New Arrivals",
          links: [
            {
              name: "Bulk Brochures",
              path: "/new/bulk-brochures",
              isNew: true,
            },
            { name: "Bulk Booklets", path: "/new/bulk-booklets" },
            {
              name: "Raised Foil Postcards",
              path: "/new/raised-foil-postcards",
            },
            { name: "LED Display Stands", path: "/new/led-display-stands" },
          ],
        },
      ],

      footerLink: {
        label: "see all signs, posters & marketing materials",
        path: "/signs-marketing",
      },
    },
    {
  id: "labels-stickers-packaging",
  label: "Labels, Stickers & Packaging",

  sections: [
    {
      title: "Custom Packaging",
      links: [
        { name: "Self Adhesive Tapes", path: "/packaging/self-adhesive-tapes" },
        { name: "Courier Bags", path: "/packaging/courier-bags" },
        { name: "Flat Mailer Boxes", path: "/packaging/flat-mailer-boxes" },
        { name: "Corrugated Boxes", path: "/packaging/corrugated-boxes" },
        {
          name: "Disposable Eco Friendly Cutlery",
          path: "/packaging/eco-cutlery",
          isNew: true,
        },
        { name: "Packaging Sleeves", path: "/packaging/sleeves" },
        { name: "Wrapping Papers", path: "/packaging/wrapping-papers" },
        {
          name: "Customised Ribbons",
          path: "/packaging/customised-ribbons",
          isNew: true,
        },
        { name: "Colored Shopping Bags", path: "/packaging/colored-bags" },
        {
          name: "Shop all Custom Packaging",
          path: "/packaging",
          isBold: true,
        },
      ],
    },

    {
      title: "Custom Stickers",
      links: [
        { name: "Sheet Stickers", path: "/stickers/sheet" },
        { name: "Visiting Card Stickers", path: "/stickers/visiting-card" },
        { name: "Custom Car Stickers", path: "/stickers/car" },
        { name: "Custom Floor Stickers", path: "/stickers/floor" },
        { name: "Sticker Singles", path: "/stickers/singles" },
        { name: "Seal Stickers", path: "/stickers/seal" },
        {
          name: "Kraft Stickers",
          path: "/stickers/kraft",
          isNew: true,
        },
        { name: "Window Stickers", path: "/stickers/window" },
        {
          name: "Dome Stickers",
          path: "/stickers/dome",
          isNew: true,
        },
        {
          name: "Shop all Custom Stickers",
          path: "/stickers",
          isBold: true,
        },
      ],
    },

    {
      title: "Custom Labels",
      links: [
        {
          name: "Shipping and Mailing Labels",
          path: "/labels/shipping-mailing",
        },
        {
          name: "Product and Packaging Labels",
          path: "/labels/product-packaging",
        },
        { name: "Return Address Labels", path: "/labels/return-address" },
        { name: "Transparent Labels", path: "/labels/transparent" },
        { name: "Custom Iron-on Labels", path: "/labels/iron-on" },
        { name: "Industrial Labels", path: "/labels/industrial" },
        {
          name: "Shop all Custom Labels",
          path: "/labels",
          isBold: true,
        },
      ],
    },

    {
      title: "Tags",
      links: [
        { name: "Hang Tags", path: "/tags/hang" },
        { name: "Name Tags", path: "/tags/name" },
        { name: "Baggage Tags", path: "/tags/baggage" },
        { name: "Folded Hang Tags", path: "/tags/folded" },
        {
          name: "Shop all Tags",
          path: "/tags",
          isBold: true,
        },
      ],
    },

    {
      title: "Packaging Boxes",
      links: [
        {
          name: "Promotional Product Boxes",
          path: "/boxes/promotional",
          isNew: true,
        },
        { name: "Tuck Top Boxes", path: "/boxes/tuck-top", isNew: true },
        { name: "Lock Bottom Boxes", path: "/boxes/lock-bottom" },
        { name: "Auto Lock Bottom Boxes", path: "/boxes/auto-lock" },
        {
          name: "Chocolate Bar Boxes",
          path: "/boxes/chocolate-bar",
          isNew: true,
        },
        { name: "Soap Boxes", path: "/boxes/soap", isNew: true },
        { name: "Pull Out Boxes", path: "/boxes/pull-out", isNew: true },
        { name: "Popcorn Boxes", path: "/boxes/popcorn", isNew: true },
      ],
    },

    {
      title: "Newly Launched",
      links: [
        { name: "QR Code Stickers", path: "/new/qr-stickers", isNew: true },
        { name: "Custom Shape Stickers", path: "/new/custom-shape-stickers" },
        { name: "Frosted Slider Bags", path: "/new/frosted-slider-bags" },
        { name: "Holographic Stickers", path: "/new/holographic-stickers" },
        { name: "Metal Stickers", path: "/new/metal-stickers" },
        { name: "Transparent Seal Bags", path: "/new/transparent-seal-bags" },
        { name: "Designer Shopping Bags", path: "/new/designer-bags" },
        { name: "Premium Gift Bags", path: "/new/premium-gift-bags" },
        {
          name: "Customized Potti Bags",
          path: "/new/customized-potti-bags",
          isNew: true,
        },
      ],
    },
  ],

  footerLink: {
    label: "see all labels, stickers & packaging",
    path: "/labels-stickers-packaging",
  },
},
{
  id: "clothing-caps-bags",
  label: "Clothing, Caps & Bags",

  sections: [
    {
      title: "Custom T-Shirts",
      links: [
        { name: "Men’s T-Shirts", path: "/tshirts/mens" },
        { name: "Polyester T-Shirts", path: "/tshirts/polyester" },
        { name: "Premium Men’s Cotton T-Shirts", path: "/tshirts/premium-cotton" },
        { name: "Women’s T-Shirts", path: "/tshirts/women" },
        { name: "Full Sleeves T-Shirts", path: "/tshirts/full-sleeves" },
        { name: "Limited Edition Cotton T-Shirts", path: "/tshirts/limited-edition" },
        { name: "Jack and Jones Printed T-Shirts", path: "/tshirts/jack-jones" },
        { name: "Kid’s T-Shirts", path: "/tshirts/kids" },
        { name: "Basic Polyester T-Shirts – Colours", path: "/tshirts/basic-polyester" },
        {
          name: "Mark & Spencer® Round Neck T-Shirts",
          path: "/tshirts/marks-spencer-round-neck",
          isNew: true,
        },
      ],
    },

    {
      title: "Custom Polo T-Shirts",
      links: [
        { name: "Men’s Polo T-Shirts", path: "/polos/mens" },
        { name: "Premium Polo T-Shirts", path: "/polos/premium" },
        { name: "Men’s Scott Polo T-Shirts", path: "/polos/scott-mens" },
        { name: "Puma® Polo T-Shirts", path: "/polos/puma" },
        { name: "Women’s Polo T-Shirts", path: "/polos/women" },
        { name: "Women’s Scott Polo T-Shirts", path: "/polos/scott-women" },
        { name: "Parx® Premium Polo T-Shirts", path: "/polos/parx-premium" },
        {
          name: "Printed Polos – Multi Location",
          path: "/polos/printed-multi-location",
          isNew: true,
        },
        {
          name: "Mark & Spencer® Polo T-Shirts",
          path: "/polos/marks-spencer",
          isNew: true,
        },
        {
          name: "Shop all Custom Polo T-Shirts",
          path: "/polos",
          isBold: true,
        },
      ],
    },

    {
      title: "Custom Dress Shirts",
      links: [
        { name: "Men’s Embroidered Dress Shirts", path: "/shirts/mens-embroidered" },
        { name: "Women’s Embroidered Dress Shirts", path: "/shirts/womens-embroidered" },
        { name: "Cambridge® Dress Shirts", path: "/shirts/cambridge" },
        { name: "Men’s Dress Shirts – Half Sleeves", path: "/shirts/half-sleeves" },
        {
          name: "Fil-A-Fil Shirts",
          path: "/shirts/fil-a-fil",
          isNew: true,
        },
        {
          name: "Mark & Spencer® Office Shirts",
          path: "/shirts/marks-spencer-office",
          isNew: true,
        },
        { name: "Men’s Arrow® Dress Shirts", path: "/shirts/arrow" },
        { name: "Park Avenue® Shirts", path: "/shirts/park-avenue" },
        { name: "Cambridge® Oxford Dress Shirt", path: "/shirts/oxford" },
        {
          name: "Shop all Custom Dress Shirts",
          path: "/shirts",
          isBold: true,
        },
      ],
    },

    {
      title: "Custom Bags",
      links: [
        { name: "Embroidered Laptop Bags", path: "/bags/embroidered-laptop" },
        { name: "Harissons® Embroidered Laptop Bags", path: "/bags/harissons-embroidered" },
        { name: "American Tourister® Laptop Bags", path: "/bags/american-tourister-laptop" },
        {
          name: "Harissons® Nemesis Office Laptop Bags",
          path: "/bags/harissons-nemesis",
          isNew: true,
        },
        { name: "American Tourister® Backpacks", path: "/bags/american-tourister-backpack" },
        {
          name: "Custom Targus® Intellect Advanced Laptop Bags",
          path: "/bags/targus-intellect",
        },
        { name: "Adidas Duffel Bags", path: "/bags/adidas-duffel" },
        {
          name: "Shop all Custom Bags",
          path: "/bags",
          isBold: true,
        },
      ],
    },

    {
      title: "Tote Bags",
      links: [
        { name: "Tote Bags", path: "/tote/basic" },
        { name: "Custom Jute Bags", path: "/tote/jute" },
        { name: "Colored Canvas Tote Bags", path: "/tote/canvas" },
        {
          name: "Pocket Tote Bags",
          path: "/tote/pocket",
          isNew: true,
        },
      ],
    },

    {
      title: "Custom Activewear",
      links: [
        { name: "Sports Jersey", path: "/activewear/jersey" },
        { name: "Custom Polo Jerseys", path: "/activewear/polo-jersey" },
        {
          name: "Custom Sports Shorts",
          path: "/activewear/shorts",
          isNew: true,
        },
        {
          name: "Personalised Adidas Track Suit",
          path: "/activewear/adidas-tracksuit",
          isNew: true,
        },
        {
          name: "Personalised U.S. Polo Track Suit",
          path: "/activewear/us-polo-tracksuit",
          isNew: true,
        },
      ],
    },

    {
      title: "Custom Caps",
      links: [
        { name: "Embroidered Caps", path: "/caps/embroidered" },
        { name: "Printed Caps", path: "/caps/printed" },
        { name: "Cotton Caps", path: "/caps/cotton" },
        { name: "Puma Caps", path: "/caps/puma" },
        { name: "Embroidered Denim Caps", path: "/caps/denim" },
        { name: "Promotional Plain Caps", path: "/caps/plain" },
        { name: "Woodland® Caps", path: "/caps/woodland" },
      ],
    },
  ],

  footerLink: {
    label: "see all clothing, caps & bags",
    path: "/clothing-caps-bags",
  },
},
{
  id: "bulk-orders",
  label: "Bulk Orders",

  sections: [
    {
      title: "Top Selling",
      links: [
        { name: "Men’s Polo T-Shirts", path: "/bulk/polo-tshirts" },
        { name: "Puma® Polo T-Shirts", path: "/bulk/puma-polo" },
        { name: "Premium Polo T-Shirts", path: "/bulk/premium-polo" },
        { name: "Men’s Scott Polo T-Shirts", path: "/bulk/scott-polo" },
        { name: "Men’s T-Shirts", path: "/bulk/mens-tshirts" },
        { name: "Men’s Embroidered Dress Shirts", path: "/bulk/embroidered-shirts" },
        {
          name: "Bulk Polo T-Shirts",
          path: "/bulk/polo-tshirts-bulk",
          isNew: true,
        },
      ],
    },

    {
      title: "Trending",
      links: [
        { name: "Hoodies", path: "/bulk/hoodies" },
        { name: "Personalised Mugs", path: "/bulk/mugs" },
        { name: "American Tourister® Laptop Bags", path: "/bulk/american-tourister-bags" },
        { name: "Tote Bags", path: "/bulk/tote-bags" },
        { name: "Fleece Jackets", path: "/bulk/fleece-jackets" },
        { name: "Embroidered Caps", path: "/bulk/embroidered-caps" },
        {
          name: "Bulk Ball Pens",
          path: "/bulk/ball-pens",
          isNew: true,
        },
      ],
    },

    {
      title: "Most Popular",
      links: [
        { name: "Winter Jacket – Sleeveless", path: "/bulk/winter-jacket-sleeveless" },
        { name: "Men’s Puffer Jacket", path: "/bulk/puffer-jacket" },
        { name: "Premium Laptop Bags", path: "/bulk/premium-laptop-bags" },
        { name: "Temperature Display Bottles", path: "/bulk/temp-display-bottles" },
        { name: "Harissons® Embroidered Laptop Bag", path: "/bulk/harissons-laptop-bag" },
        { name: "Desk Calendars", path: "/bulk/desk-calendars" },
      ],
    },

    {
      title: "Multi Location Customisation",
      links: [
        { name: "Embroidered Polos – Multi Location", path: "/bulk/embroidered-polos-multi" },
        { name: "Printed Polos – Multi Location", path: "/bulk/printed-polos-multi" },
        { name: "Full Custom Polo T-Shirts", path: "/bulk/full-custom-polos" },
        { name: "Polyester Polos – Multi Location", path: "/bulk/polyester-polos-multi" },
        { name: "Embroidered Hoodies – Multi Location", path: "/bulk/embroidered-hoodies-multi" },
      ],
    },

    {
      title: "More Bulk Supplies",
      links: [
        { name: "Bulk Visiting Cards", path: "/bulk/visiting-cards" },
        { name: "Bulk Engraved Metal Keychains", path: "/bulk/engraved-keychains" },
        { name: "Bulk Brochures", path: "/bulk/brochures" },
        { name: "Bulk Hoodies", path: "/bulk/hoodies-supply" },
        { name: "Bulk Posters", path: "/bulk/posters" },
        { name: "Bulk Diaries", path: "/bulk/diaries" },
        { name: "Bulk Jute Bags", path: "/bulk/jute-bags" },
        { name: "Colored Jute Bags", path: "/bulk/colored-jute-bags" },
        { name: "Bulk Tote Bags", path: "/bulk/tote-bags-supply" },
        {
          name: "Bulk Lanyards",
          path: "/bulk/lanyards",
          isNew: true,
        },
      ],
    },

    {
      title: "Promotional Products",
      links: [
        { name: "Promotional Plain Caps", path: "/bulk/promotional-plain-caps", isNew: true },
        { name: "Promotional Dual Color Caps", path: "/bulk/promotional-dual-caps", isNew: true },
        { name: "Promotional Multi Color Caps", path: "/bulk/promotional-multi-caps", isNew: true },
        { name: "Die Cut Handle Bags", path: "/bulk/die-cut-bags", isNew: true },
        { name: "Printed Carry Bags", path: "/bulk/printed-carry-bags", isNew: true },
        { name: "Promotional Paper Bags", path: "/bulk/promotional-paper-bags" },
        { name: "Bulk Single Fold Umbrellas", path: "/bulk/single-fold-umbrellas", isNew: true },
        { name: "Bulk Golf Umbrellas", path: "/bulk/golf-umbrellas", isNew: true },
      ],
    },
  ],

  footerLink: {
    label: "see all bulk orders",
    path: "/bulk-orders",
  },
},
{
  id: "drinkware",
  label: "Drinkware",

  sections: [
    {
      title: "BestSellers",
      links: [
        { name: "Custom Water Bottles", path: "/drinkware/custom-water-bottles" },
        { name: "Customised Tumblers", path: "/drinkware/customised-tumblers" },
        { name: "Cello Duro Kent Water Bottles", path: "/drinkware/cello-duro-kent" },
        { name: "Temperature Display Bottles", path: "/drinkware/temperature-display" },
        { name: "Stainless Steel Sipper Bottles", path: "/drinkware/stainless-steel-sipper" },
      ],
    },

    {
      title: "Water Bottles",
      links: [
        { name: "Cello Duro Flip Water Bottles", path: "/drinkware/cello-duro-flip" },
        { name: "Custom Sipper Bottles", path: "/drinkware/custom-sipper" },
        { name: "Vacuum Bottles", path: "/drinkware/vacuum-bottles" },
        { name: "Cello Swift Bottles", path: "/drinkware/cello-swift" },
        { name: "Inox Bottles", path: "/drinkware/inox-bottles" },
        { name: "Gym Bottles", path: "/drinkware/gym-bottles" },
        { name: "Thermal Suction Bottles", path: "/drinkware/thermal-suction" },
      ],
    },

    {
      title: "Sippers & Tumblers",
      links: [
        { name: "Personalised Skinny Tumbler 600ml", path: "/drinkware/skinny-tumbler-600" },
        { name: "Aluminium Water Bottles", path: "/drinkware/aluminium-bottles" },
        { name: "Wine Tumbler", path: "/drinkware/wine-tumbler" },
        { name: "Personalized Travel Tumbler", path: "/drinkware/travel-tumbler" },
      ],
    },

    {
      title: "Looking for more?",
      links: [
        { name: "Vacuum Insulation Cup", path: "/drinkware/vacuum-insulation-cup" },
        { name: "Water Bottle with Wireless Speaker", path: "/drinkware/wireless-speaker-bottle" },
        { name: "Cello Flip Style Water Flasks", path: "/drinkware/cello-flip-style" },
        { name: "Insulated Vacuum Coffee Flasks", path: "/drinkware/vacuum-coffee-flasks" },
        { name: "Frosted Beer Mugs", path: "/drinkware/frosted-beer-mugs" },
        { name: "Hip Flask – 7oz – Black", path: "/drinkware/hip-flask-black" },
        { name: "Printed Cola Bottles 600ml", path: "/drinkware/printed-cola-600" },
      ],
    },

    {
      title: "New in Drinkware",
      links: [
        { name: "Temperature Display Mugs", path: "/drinkware/temperature-display-mugs" },
        { name: "Personalised Beer Mugs", path: "/drinkware/personalised-beer-mugs" },
        { name: "Personalised Champagne Glasses", path: "/drinkware/champagne-glasses" },
        { name: "Personalised Wine Glasses", path: "/drinkware/wine-glasses" },
        {
          name: "Personalised Vacuum Insulated Tumbler",
          path: "/drinkware/vacuum-insulated-tumbler",
        },
      ],
    },
  ],

  footerLink: {
    label: "see all drinkware",
    path: "/drinkware",
  },
},
{
  id: "calendars-notebooks-diaries",
  label: "Calendars, Notebooks & Diaries",

  sections: [
    {
      title: "Calendars",
      links: [
        { name: "Desk Calendars", path: "/calendars/desk" },
        { name: "Wall Calendars", path: "/calendars/wall" },
        { name: "Flip Desk Calendars", path: "/calendars/flip-desk" },
        { name: "Custom Base Spiral Desk Calendar", path: "/calendars/spiral-desk" },
        { name: "Poster Calendars", path: "/calendars/poster" },
        { name: "Magnet Calendars", path: "/calendars/magnet" },
        { name: "Pocket Calendars", path: "/calendars/pocket" },
        { name: "Mousepad Calendar", path: "/calendars/mousepad" },
        { name: "Wall Calendar – New Size", path: "/calendars/wall-new-size" },
        { name: "Four Sheeter Wall Calendars", path: "/calendars/four-sheeter" },
      ],
    },

    {
      title: "Diaries",
      links: [
        { name: "Personalised A5 Diary", path: "/diaries/a5-personalised" },
        { name: "Diary with Pen Holder", path: "/diaries/pen-holder" },
        {
          name: "Personalised Diary with Magnetic Lock",
          path: "/diaries/magnetic-lock",
        },
        { name: "Premium Diary", path: "/diaries/premium" },
        { name: "Diary with Strap", path: "/diaries/strap" },
        { name: "A5 Soft Leather Cover Diary", path: "/diaries/soft-leather-a5" },
        { name: "Executive Diary", path: "/diaries/executive" },
        { name: "Wooden Diary with Pen", path: "/diaries/wooden-pen" },
        {
          name: "Notebook Diary with Magnetic Lock",
          path: "/diaries/notebook-magnetic-lock",
        },
        { name: "Pocket Size Diary", path: "/diaries/pocket" },
      ],
    },

    {
      title: "Notebooks",
      links: [
        { name: "Personalised Notebooks", path: "/notebooks/personalised" },
        { name: "Notebook A4 Size", path: "/notebooks/a4" },
        { name: "Personalised A5 Diary", path: "/notebooks/a5-diary" },
        { name: "Perfect Bound Notebooks", path: "/notebooks/perfect-bound" },
        { name: "Custom Long Notebooks", path: "/notebooks/long" },
        { name: "Writing Pads", path: "/notebooks/writing-pads" },
      ],
    },
  ],

  footerLink: {
    label: "see all calendars, notebooks & diaries",
    path: "/calendars-notebooks-diaries",
  },
},
{
  id: "custom-winter-wear",
  label: "Custom Winter Wear",

  sections: [
    {
      title: "Bestsellers",
      links: [
        { name: "Hoodies", path: "/winter-wear/hoodies" },
        { name: "Fleece Jackets", path: "/winter-wear/fleece-jackets" },
        { name: "Men’s Puffer Jacket", path: "/winter-wear/mens-puffer-jacket" },
        { name: "Winter Jacket – Sleeveless", path: "/winter-wear/sleeveless-jacket" },
        { name: "Fleece Pullover Jackets", path: "/winter-wear/fleece-pullover" },
        { name: "Scott I-Dry Jackets", path: "/winter-wear/scott-i-dry" },
        { name: "Crewneck Sweatshirts", path: "/winter-wear/crewneck-sweatshirts" },
        { name: "Hooded Crewneck Sweatshirts", path: "/winter-wear/hooded-crewneck" },
        { name: "High Neck Jacket", path: "/winter-wear/high-neck-jacket" },
        { name: "Embroidered Sweaters", path: "/winter-wear/embroidered-sweaters" },
      ],
    },

    {
      title: "Branded",
      links: [
        { name: "Custom Adidas® Hoodies", path: "/winter-wear/adidas-hoodies" },
        { name: "Levi’s® High Neck Zipper Jackets", path: "/winter-wear/levis-zipper" },
        { name: "Scott Sleeveless Jackets", path: "/winter-wear/scott-sleeveless" },
        { name: "Adidas® Jackets", path: "/winter-wear/adidas-jackets" },
        { name: "Scott Stripe Jackets", path: "/winter-wear/scott-stripe" },
        { name: "AWG Sport Varsity Winter Jackets", path: "/winter-wear/awg-varsity" },
        { name: "Zero Degree Hoodie Sweatshirt", path: "/winter-wear/zero-degree-hoodie" },
        { name: "Levi’s® Zipper Hoodies", path: "/winter-wear/levis-zipper-hoodie" },
        {
          name: "Zero Degree Turtle Neck Sweatshirt",
          path: "/winter-wear/zero-degree-turtle-neck",
        },
      ],
    },

    {
      title: "Explore More",
      links: [
        { name: "Bulk Hoodies", path: "/winter-wear/bulk-hoodies" },
        { name: "Men’s Sleeveless Puffer Jacket", path: "/winter-wear/mens-sleeveless-puffer" },
        {
          name: "Embroidered Hoodies – Multi Location",
          path: "/winter-wear/embroidered-hoodies-multi",
        },
        {
          name: "Women’s Puffer Jacket",
          path: "/winter-wear/womens-puffer-jacket",
        },
        {
          name: "Fleece Jackets – Multi Location",
          path: "/winter-wear/fleece-jackets-multi",
        },
        {
          name: "Embroidered Sleeveless Sweaters",
          path: "/winter-wear/embroidered-sleeveless-sweaters",
        },
        { name: "Beanies Caps", path: "/winter-wear/beanies-caps" },
        { name: "Multi Colored Hoodie", path: "/winter-wear/multi-colored-hoodie" },
        {
          name: "Sleeveless Winter Jackets – Multi Location",
          path: "/winter-wear/sleeveless-multi-location",
        },
      ],
    },

    {
      title: "New",
      links: [
        {
          name: "Customised Windcheaters",
          path: "/winter-wear/windcheaters",
          isNew: true,
        },
        {
          name: "Premium Sweatshirt with Hood",
          path: "/winter-wear/premium-hooded-sweatshirt",
          isNew: true,
        },
        {
          name: "Indian Terrain Bomber Jackets",
          path: "/winter-wear/indian-terrain-bomber",
          isNew: true,
        },
        {
          name: "Indian Terrain Zipper Lycra Jackets",
          path: "/winter-wear/indian-terrain-zipper",
          isNew: true,
        },
        {
          name: "Terry Zipper Jacket",
          path: "/winter-wear/terry-zipper",
          isNew: true,
        },
        {
          name: "Oversized Hoodies",
          path: "/winter-wear/oversized-hoodies",
          isNew: true,
        },
      ],
    },
  ],

  footerLink: {
    label: "see all custom winter wear",
    path: "/custom-winter-wear",
  },
},


  ]);
};
