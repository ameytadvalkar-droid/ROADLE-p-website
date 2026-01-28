// Product data for ROADLE
const products = [
    {
        id: 1,
        name: "CRASH Guards",
        price: 5200,
        description: "Black motorcycle crash guard frame featuring curved protective tubing and mounting brackets, designed to safeguard the bike's engine and frame during accidents. The heavy-duty metal structure is prominently displayed against a clean white background, emphasizing its robust design and functionality.",
        category: "accessories",
        images: ["IMAGE CRASH GUARD.png"],
        colors: ["Black"],
        sizes: []
    },
    {
        id: 2,
        name: "Motorfans L7 LED Auxiliary Lights ",
        price: 37800,
        description: "High-performance motorcycle lights designed for superior visibility and safety in various riding conditions. These lights deliver 14,000+ lumens combined output (65W per light, 13,000 lumens per pair) with a 6500K color temperature for bright, daylight-like illumination. Features a durable black housing with mounting points, displayed against a white background.",
        category: "accessories",
        images: ["motorfan L7 LIGHTS.png"],
        colors: ["Black"],
        sizes: []
    },
    {
        id: 3,
        name: "Chigee AIO-5 Play BMW Motorcycle Smart Display With Navigation",
        price: 65000,
        description: "Digital bike speedometer and odometer display unit with black casing and LCD screen showing real-time metrics including speed in km/h, distance traveled, temperature, and gear information. The compact rectangular device features a red accent panel on the side and is designed for motorcycle or high-performance bike installation. Displayed against a white background.",
        category: "accessories",
        images: ["IMAGE DISPLAY.png"],
        colors: ["Black"],
        sizes: []
    },
    {
        id: 4,
        name: "MT Thunder3 Pro Nova Helmet",
        price:  7199 ,
        description: "The MT Thunder3 Pro Nova Helmet has an aerodynamic shell, multiple vents for optimal airflow, an impressive Drag Reduction System, and a 4-star SHARP rating.",
        category: "protective",
        images: ["image 1.png"],
        colors: ["Black", "White", "Red"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 5,
        name: "DSG Apex V2 Riding Jacket",
        price: 12500,
        description: "DSG APEX V2 RIDING JACKET Following the legacy of the Apex Airflow Riding Jacket, the DSG Apex V2 Riding Jacket is a next-generation race-fit motorcycle jacket designed for riders who crave speed, style, and maximum performance. Engineered from premium 900D and 600D polyester, this jacket delivers superior durability, abrasion resistance, and long-lasting comfort. With upgraded TPU shoulder sliders, a streamlined aerodynamic design, and state-of-the-art ventilation, the Apex V2 keeps you cool, protected, and riding in style.",
        category: "protective",
        images: ["IMAGE JACKET.png"],
        colors: ["Black", "Brown", "Blue"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 6,
        name: " RYNOX TORNADO 4 PANTS",
        price: 55000,
        description: "The Rynox Tornado 4 Pants are designed for the adventurous motorcyclist seeking both protection and comfort. Crafted from durable materials, these pants feature reinforced knee and hip armor, adjustable waist straps for a secure fit, and multiple ventilation zippers to keep you cool during long rides. Whether you're navigating city streets or exploring off-road trails, the Tornado 4 Pants provide the perfect blend of safety and style.",
        category: "protective",
        images: ["image pants.png"],
        colors: ["Black", "Gray"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 7,
        name: " RAIDA TOURER MOTORCYCLE GLOVES",
        price: 3800,
        description: "RAIDA TOURER MOTORCYCLE GLOVES are designed for comfort and protection during long rides. These gloves feature a durable leather construction, reinforced knuckles, and a secure fit with adjustable wrist closures.",
        category: "protective",
        images: ["image gloves.png"],
        colors: ["Black", "Brown"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 8,
        name: "explorer carbon Motorcycle Helmet",
        price: 38000 ,
        description: "Perfect trail helmet for long distance routes and any surface. Maximum safety and lightness thanks to its carbon fibre. Excellent ventilation. Adjustable and removable peak. Wide anti-scratch visor prepared for the anti-fog system, Pinlock Max Vision, and interior sun visor..",
        category: "protective",
        images: ["explorer carbon.png"],
        colors: ["Black", "White"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 9,
        name: "LS2 MX437 Fast II Wash White Off Road Helmet",
        price: 7900,
        description: "The LS2 MX437 Fast II Offroad Helmet is built for riders who want to step into the offroad and motocross world with confidence. Developed using LS2's decades of helmet engineering expertise, this helmet delivers a perfect balance of lightweight comfort, durability, and high-level safety. Constructed from LS2's advanced KPA (Kinetic Polymer Alloy), the MX437 Fast II offers exceptional strength without unnecessary bulk. The adjustable and removable peak ensures versatility across different riding conditions, making it ideal for trail riding, motocross, and offroad adventures.",
        category: "protective",
        images: ["LS2 MX437 FAST WHITE.png"],
        colors: ["Red", "Blue"],
        sizes: ["M", "L"]
    },
    {
        id: 10,
        name: "LS2 FF805 Thunder Carbon Supra Red Blue Full Face Helmet",
        price: 59000,
        description: "The LS2 FF805 Thunder Carbon is a high-performance racing helmet developed using LS2's extensive motorsport racing experience. Designed for riders who demand maximum lightness, aerodynamics, and protection, this helmet features a 100% carbon fibre shell for exceptional strength and minimal weight. With excellent peripheral vision and race-ready safety features, the Thunder Carbon is ideal for track use as well as aggressive highway riding in Indian conditions.",
        category: "protective",
        images: ["THUNDER CARBON SUPRA REDBLUE.png"],
        colors: ["Black"],
        sizes: ["L", "XL"]
    },
    {
       id: 11,
       name: "LS2 APOLLO RIDING JACKET BLACK DARK GREY H-V YELLOW",
       price: 33000,
       description: "LS2 Apollo Man Jacket. Our high-end jacket with AAA certification is made from 3-layer laminated CORDURA fabric, Nylon, and Oxford for maximum comfort, safety, breathability, and water resistance. The perfect companion for all your adventures.",
       category: "protective",
       images: ["APOLLO LS2.png"],
       colors: ["Black", "Brown"],
       sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 12,
        name: "LS2 NARVIK RIDING BLUE BLACK GREY RED JACKET",
        price: 12000,
        description: "The Narvik is a touring-adventure water resistant jacket that blends all-season performance with uncompromising comfort. Featuring large ventilation panels and a removable thermal liner, it adapts to changing weather conditions effortlessly.",
        category: "protective",
        images: ["NARVIK LS2.png"],
        colors: ["Red", "Black"],
        sizes: ["M", "L", "XL"]
    },
    {
        id: 13,
        name: "LS2 JACKET X-MASTER MAN BLACK GREY RED",
        price: 25000,
        description: "LS2 X-Master Jacket. A sporty and aggressive riding jacket made from durable 600D polyester with mesh panels for optimal airflow. Equipped with CE-approved armor at shoulders and elbows, it offers excellent protection without compromising on comfort.",
        category: "protective",
        images: ["X-MASTER MAN.png"],
        colors: ["Blue", "Gray", "Black"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 14,
        name: "LS2 APOLLO MAN RIDING PANT BLACK DARK GREY",
        price: 32000,
        description: "The ideal companion for all your adventures, our premium pants are crafted from 3-layer CORDURA® laminated fabric for maximum comfort, safety, breathability, and waterproofing. Pair them with our Apollo jacket.",
        category: "protective",
        images: ["APOLLO PANTS LS2.png"],
        colors: ["Black"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 15,
        name: "STEALTH EVO 4 PANTS",
        price: 12500,
        description: "Versatile cargo pants designed for riders, featuring reinforced stitching, ample storage pockets, and adjustable fit for comfort on long journeys.",
        category: "protective",
        images: ["stealth evo 4.png"],
        colors: ["Gray", "Black"],
        sizes: ["M", "L", "XL"]
    },
    {
        id: 16,
        name: "LS2 AIR RAPTOR RIDING GLOVES",
        price: 4000,
        description: "Stylish leather gloves with excellent ventilation. Very comfortable and safe with its rigid protection on the knuckles and palm. Velcro adjustment for perfect fit and easy closure. Suitable for touch screens.",
        category: "protective",
        images: ["LS2 AIR RAPTOR RIDING GLOVES.png"],
        colors: ["Black", "Brown"],
        sizes: ["S", "M", "L"]
    },
    {
        id: 17,
        name: "LS2 CHAKI RIDING GLOVES",
        price: 2100,
        description: "Lightweight gloves with great ventilation thanks to perforated palms. Hard knuckle protection. Silicone print on palm and fingers for maximum grip. Touch screen compatible.",
        category: "protective",
        images: ["LS2 RIDING GLOVES.png"],
        colors: ["Black"],
        sizes: ["M", "L", "XL"]
    },
    {
        id: 18,
        name: "DEFENDER PRO HANDGUARDS",
        price: 6400,
        description: "Designed to shield your hands and the handlebar controls from debris, wind or unpredictable obstacles you may encounter on-road and off-road. A result of extensive in-house research, rigorous testing, and meticulous attention to detail; the Defender Pro Handguards offer full-wrap coverage, a rugged aerodynamic design, and are universally compatible with a wide range of motorcycles.",
        category: "accessories",
        images: ["handguard rynox.png"],
        colors: ["Silver"],
        sizes: []
    },
    {
        id: 19,
        name: "Cardo Packtalk Pro",
        price: 46099,
        description: "A new dawn of Safety, Sound & Style. The Cardo PACKTALK PRO is the most advanced motorcycle communication system ever created by Cardo. Designed for riders who demand the absolute best, PACKTALK PRO introduces built-in Crash Detection, industry-leading 45mm JBL audio, Auto On/Off intelligence, and 2nd Gen Dynamic Mesh Communication — redefining what a premium intercom can do.",
        category: "accessories",
        images: ["cardo.png"],
        colors: ["Black"],
        sizes: []
    },
    {
        id: 20,
        name: "Raida SeasonPro Waterproof Bike Cover - 300D Oxford Fabric, Dustproof, UV Resistant with Lock Holes",
        price: 1500,
        description: "Waterproof bike cover with elastic hem and ventilation panels, protecting motorcycles from dust, rain, and UV damage.",
        category: "accessories",
        images: ["rain cover raida.png"],
        colors: ["Blue", "Black"],
        sizes: []
    }
];
