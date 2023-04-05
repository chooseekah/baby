

console.log("test")
const { createApp } = Vue

var productsObject = {
    "products": [
  
        
        {
            "image": {
                "src": "images/marcela3.jpg.png",
                "alt": "Baby Monitor"
            },
            "desc": "3.5 inch Large Display Video Baby Monitor with Camera and Audio,Remote Pan/Tilt/Zoom, 1200 mAh Battery, Night Vision, Two Way Talk, Smart Temperature,Lullabies,960ft Long Range",
            "date": "2023-03-25T00:00:00.000Z",
            "title": "Baby Monitor",
            "box": {
                "price": "$49,99",
                "link": {
                    "href": "3TKFBPW"
                }
            }
        },
        {
            "image": {
                "src": "images/marcela5.jpg.png",
                "alt": "funny supply Wooden "
            },
            "desc": "No chemicals: this natural baby gym frame is made of unfinished wood, sanded to be smooth and varnished. UPGRADE: Comes with 3 wooden toys and 3 soft toys. By kicking the hangings, your baby can do stretching exercise which enhance flexibility and motor skills.",
            "title": "funny supply Wooden",
            "date": "2023-03-25T00:00:00.000Z",
            "box": {
                "price": "$39,96",
                "link": {
                    "href": "40UVlm3"
                }
            }
        },
        {
            "image": {
                "src": "images/marcela6.jpg.png",
                "alt": "Baby Handprint and Footprint "
            },
            "desc": "Moms #1 Favorite Baby Keepsake 7+ Years Running: Before mom knows it, those little hands will be waving goodbye for college. Don’t let the fog of new baby exhaustion wipe those precious memories away. Cherish those first special moments with the new baby keepsake that captures their perfect little handprint, footprint, fingers and toes for life.",
            "title": "Baby Handprint and Footprint",
            "date": "2023-03-25T00:00:00.000Z",
            "box": {
                "price": "$18,36",
                "link": {
                    "href": "3ZnsDZE"
                }
            }
        },
        {
            "image": {
                "src": "images/marcela7.jpg.png",
                "alt": "Burt's Bees Easter Basket Stuffers Gifts"
            },
            "desc": "BURTS BEES GIFT: Give the gift of healthy, glowing skin with our Travel Size Gift Set! Not only do our natural products make the perfect stocking stuffer, but they nourish skin throughout the winter to keep your loved ones glowing on the inside & out.",
            "title": "recent Burt's Bees Easter Basket Stuffers Gifts",
            "date": "2023-03-28T00:00:00.000Z",
            "box": {
                "price": "$9.88",
                "link": {
                    "href": "3nmvYLk"
                }
            }
        },
        
        {
            "image": {
                "src": "images/baby1.jpg.png",
                "alt": "Portable Diaper Changing Pad"
            },
            "desc": "PERFECTLY PORTABLE CHANGING STATION - with Kopi Baby’s diaper changing pad, you can have a clean, waterproof and safe changing mat everywhere you go!",
            "title": "Portable Diaper Changing Pad, Portable Changing pad for Newborn Girl & Boy ",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$27.99",
                "link": {
                    "href": "3zrfFj6"
                }
            }
        },
      
      
    
        {
            "image": {
                "src": "images/marcela15.jpg.png",
                "alt": "Baby Food Maker"
            },
            "desc": "【Safety & Long lasting】Home made baby food can help babies to expose more flavors, help them become more adventurous eaters. It’s made of High borosilicate glass bowl and stainless steel blades. Other parts are all BPA FREE. High quality means longer service life. It can be used as food chopper even after your baby grow up. Give you peace of mind at every stage of life.",
            "title": "Baby Food Maker, HEYVALUE 13-in-1 Baby Food Processor",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$54.99",
                "link": {
                    "href": "3GcPKzg"
                }
            }
        },
        {
            "image": {
                "src": "images/marcela16.jpg.png",
                "alt": "hiccapop MiniPod Baby Dome for On the Go"
            },
            "desc": "IDEAL FOR PARKS, BEACH, CAMPING, TRAVELING, GRANDMA’S, TUMMY TIME & NAPTIME | Multipurpose use - baby dome for the beach, portable baby bed for travel, or safely lounging & sleeping at home when you just need a hands-free moment to yourself. Super light and ultra compact. Perfect for travel anywhere! Truly a must-have baby travel gear necessity.",
            "title": "hiccapop MiniPod Baby Dome for On the Go",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$89.92",
                "link": {
                    "href": "3lYNGnG"
                }
            }
        },
        {
            "image": {
                "src": "images/marcela17.jpg.png",
                "alt": "Univivi Door Hanging Organizer Nursery Closet Cabinet Baby Storage "
            },
            "desc": "【Safe and High Quality Fabrics】Breathable non-woven fabrics, none smell, non-toxic, all for your safety. Space saver and roomy for storage and organizing. Elegant, simple decorative design. Useful simple cabinet storage for almost any room in the house.",
            "title": "Univivi Door Hanging Organizer Nursery Closet Cabinet Baby Storage ",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$22.39",
                "link": {
                    "href": "3K435Lx"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela29.jpg.png",
                "alt": "Cat Lamp"
            },
            "desc": "[Gifts for 3 4 5 Year Old Girls]This version will AUTO TURN OFF AFTER 2 HOURS IF NO ACTION to save power. Press the power button to turn on warm white light mode. Tap the silicone surface to switch among 7-color breathing mode, standby mode and warm white light mode in order.",
            "title": "Baby Nursery Lamp with Remote Control.",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$18.39",
                "link": {
                    "href": "3KrPUFH"
                }
            }
        },
        {
            "image": {
                "src": "images/marcela28jpg.png",
                "alt": "Pivot Modular Travel System"
            },
            "desc": "FLEXIBLE INFANT TRAVEL SYSTEM: The Evenflo Pivot Modular Travel System is a car seat and stroller combo featuring the SafeMax Rear-Facing Infant Car Seat and SafeZone Base with anti-rebound bar, infused with parent-and child-friendly accessories.",
            "title": "Pivot Modular Travel System with LiteMax Infant Car Seat with Anti-Rebound Bar (Desert Tan)",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$319.99",
                "link": {
                    "href": "3K2IyqQ"
                }
            }
        },
        {
            "image": {
                "src": "images/marcela26.jpg.png",
                "alt": "Lily Miles Baby Diaper Caddy"
            },
            "desc": "Stylish & Functional Diaper Caddy Organizer for Boy or Girl Nursery Room - Our diaper tote is designed with adorable style and colors, and is built with quality fabric.",
            "title": "Lily Miles Baby Diaper Caddy - Large Organizer Tote Bag for Infant Boy or Girl - Baby Shower Basket - Nursery Must Haves - Registry Favorites",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$24.95",
                "link": {
                    "href": "3KC8ISR"
                }
            }
        },
        {
            "image": {
                "src": "images/marcela25.jpg.png",
                "alt": "SALIFA Diaper Bag Backpack"
            },
            "desc": "【Large Capacity Baby Bag】 Pink diaper bag backpack 13×8×16 inch helps to accommodate not only baby boy's or baby girl's essentials, such as diapers, bibs, other baby toiletries, etc.",
            "title": "SALIFA Diaper Bag Backpack with Changing Station, Foldable Baby Diaper Bags Large Capacity Waterproof USB Charging Port, Mummy Bag for Baby Boy Girl, Blue",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$38.99",
                "link": {
                    "href": "3ZCNt7A"
                }
            }
        },
        {
            "image": {
                "src": "images/marcela24.jpg.png",
                "alt": "BAIYI Baby Playpen"
            },
            "desc": "SPACIOUS ENOUGH PLAY AREA - The external size of the playpen is 50x50x27inch / 127x127x68cm, with enough space for toys, friends or pets, and plenty of room to play. The area is large enough, both you and your little one will enjoy immense comfort whenever you use your indoor/outdoor play area.",
            "title": "BAIYI Baby Playpen, Baby Playpen for Toddle, Playpen for Babies with Gate Indoor & Outdoor Kids Activity",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$69.99",
                "link": {
                    "href": "3ZBqeuB"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela21.jpg.png",
                "alt": "ANMEATE Video Baby Monitor with Digital Camera"
            },
            "desc": "High quality color screen: This unique baby monitor features a High Resolution Display with 2x zoom magnification for comprehensive coverage. The 2.4” screen can deliver streaming live view whenever you check in.",
            "title": "ANMEATE Video Baby Monitor with Digital Camera, Digital 2.4Ghz Wireless Video Monitor with Temperature Monitor, 960ft Transmission Range, 2-Way Talk, Night Vision, High Capacity Battery",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$48.99",
                "link": {
                    "href": "3ZDW35X"
                }
            }
        },
        {
            "image": {
                "src": "images/marcela19.jpg.png",
                "alt": "Pro Goleem Elephant Security Blanket"
            },
            "desc": "Soft Elephant Lovey】: The elephant security blanket can help baby fall back to sleep quickly or feel safe regardless of where they are",
            "title": "Pro Goleem Elephant Security Blanket Soft Baby Lovey Unisex Lovie Baby Gifts for Newborn Boys and Girls Baby Snuggle Toy Baby Elephant Stuffed Animal Grey 16 Inch",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$13.99",
                "link": {
                    "href": "3zplhdx"
                }
            }
        },
          {
            "image": {
                "src": "images/marcela18.jpg.png",
                "alt": "Boba Wrap Baby Carrier"
            },
            "desc": "Simple, no-guess tying instructions and just one size make this wrap your GO-TO BABY CARRIER for the first three months of parenthood. It was the first of its kind and the simplicity of the idea has kept moms and babies together for 10 years.STRETCHY and SOFT, machine washable fabric that will keep your baby close.",
            "title": "Boba Wrap Baby Carrier - Original Stretchy Infant Sling, Perfect for Newborn Babies and Children up to 35 lbs (Grey)",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$37.95",
                "link": {
                    "href": "40Pqx5O"
                }
            }
        },
        {


            "image": {
                "src": "images/marcela30.jpg.png",
                "alt": "Convertible High Chair"
            },
            "desc": "GROW FROM FOOD TO FUN: Easily converts as your child grows — from Infant High Chair to Toddler Dining Chair and Tray to Toddler Standalone Chair, and finally to Big Kid Table and Chair",
            "title": "Eat and Grow 4-in-1 Convertible High Chair (Poppy Floral)",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$69.29",
                "link": {
                    "href": "3K8M7eW"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela31.jpg.png",
                "alt": "Baby Milk Warmer"
            },
            "desc": "Steam Cleaning: Baby milk warmer provides steam up to 100℃ (212℉) to keep bottles and baby food jars clean, giving babies the best care possible.",
            "title": "Momcozy Smart Baby Bottle Warmer, Fast Baby Milk Warmer with Accurate Temperature Control and Automatic Shut-Off, Multifunctional Bottle Warmers for Breastmilk or Formula",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$49.99",
                "link": {
                    "href": "3GdS7St"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela32.jpg.png",
                "alt": "Electric Nasal Aspirator for Baby, 3 Different Nose Suction Nozzles, 3 Modes Nose Sucker for Baby"
            },
            "desc": "3 modes: three modes of different suction, you can choose the appropriate intensity for different nasal obstructions such as nasal water, snot, and booger. (For thick snot, we highly recommend using a saline nasal spray to soften stubborn slugs. After snot spraying, wait 30 seconds to 1 minute, then use a powered nasal aspirator to remove.)",
            "title": "Electric Nasal Aspirator for Baby, 3 Different Nose Suction Nozzles, 3 Modes Nose Sucker for Baby",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$25.99",
                "link": {
                    "href": "3GfFDd5"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela33.jpg.png",
                "alt": "BabyMust Hip Seat"
            },
            "desc": "【Break Boundary】 Effortless Ups and Downs. Ditch the complicated old style wraps/carriers which limit both you and your kid’s freedom. Get a BABYMUST and lead the new trend. Pick baby up when they want to be up in your arms and let baby down when they want to crawl, toddle, or walk around.",
            "title": "BABYMUST Hip Seat Baby Carrier, Advanced Adjustable Waistband &Various Pockets, Ergonomic Carrier for Newborns to Toddlers up to 66lbs, Black",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$41.69",
                "link": {
                    "href": "3U367Ek"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela34jpg.png",
                "alt": "ADOVEL Baby Bassinet Bedside Crib"
            },
            "desc": "Peaceful co sleeping Time - A full size ADOVEL Pack 'n Play can turn into the bedside sleeper with the side zipper down for C-sectionas mothers take care of your babe even in the midnight instead of moving drastically. 3 adjustable height designed which meets safety standards",
            "title": "ADOVEL Baby Bassinet Bedside Crib, Pack and Play with Mattress, Diaper Changer and Playards from Newborn to Toddles",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$198.99",
                "link": {
                    "href": "40RKEjY"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela35.jpg.png",
                "alt": "BlueMello Baby Swaddle Blanket "
            },
            "desc": "LUXURIOUS SOFTNESS - Comfort your little one with the amazing softness of our swaddle blanket! This baby swaddling wrap is made from premium quality fabrics, a soft cashmere material that will become softer with daily use!",
            "title": "BlueMello Baby Swaddle Blanket | Ultra-Soft Plush Essential for Infants 0-6 Months | Receiving Swaddling Wrap White | Ideal Newborn Registry and Toddler Boy Accessories | Perfect Baby Girl Shower Gift",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$18.99",
                "link": {
                    "href": "3M7LKDZ"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela36.jpg.png",
                "alt": "Baby Swing for Infants"
            },
            "desc": "5 Amplitudes for Baby Swings for Infants: Jaoul electric baby swing is finished with 5 different swing amplitudes. To better protect your newborn baby's safety, the swing level between each amplitude is designed to be a very gradual difference.",
            "title": "Baby Swing for Infants, Electric Portable Baby Swing for Newborn, Bluetooth Touch Screen/Remote Control Timing Function",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$119.99",
                "link": {
                    "href": "3nDPS4w"
                }
            }
        },
        
    
        {
            "image": {
                "src": "images/marcela39.jpg.png",
                "alt": "Tommee Tippee Advanced Anti-Colic Newborn Baby Bottle Feeding Gift Set"
            },
            "desc": "Baby bottle designed to reduce colic symptoms for less gas, spit up and discomfort, Award-winning breast-like nipple for natural latch and guaranteed acceptance, Unique anti-colic venting system draws air away from milk, Heat sensing technology turns straw pink when baby's feed is too hot, etc.",
            "title": "Tommee Tippee Advanced Anti-Colic Newborn Baby Bottle Feeding Gift Set, Heat Sensing Technology, Breast-like Nipple, BPA-Free",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$39.00",
                "link": {
                    "href": "3U3uQbG"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela40.jpg.png",
                "alt": "Skip Hop Bandana Buddies"
            },
            "desc": "A soft toy and teether toy filled with textures, patterns and sounds! Little hands stay active as baby explores rattles, crinkles and more. This colorful character’s soft bandana teether toy detaches for mom to wear around her wrist for quick access. Perfect for multi-sensory play, this cute companion is ideal for fun at home or-on-the-go",
            "title": "Skip Hop Bandana Buddies Baby Activity and Teething Toy with Multi-Sensory Rattle and Textures, Elephant",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$15.99",
                "link": {
                    "href": "3K2gxQ9"
                }
            }
        },
    
        
        {
            "image": {
                "src": "images/marcela42.jpg.png",
                "alt": "Jyusmile Baby Toys 6-12 Months"
            },
            "desc": "3 IN 1 Soft Baby Toy Set - Our baby toy bundle for 6 months and up come in a convenient set of 24 individual pieces, with 12 different colored blocks, 6 soft stacking rings, 5 squeeze and sensory toy balls, and a storage bag.",
            "title": "yusmile Baby Toys 6-12 Months, Montessori Toys for Babies 6-12 Months, Incl Stacking Building Blocks & Soft Infant Teething Toys & Sensory Balls for Toddlers 0-3-6-9-12 Months",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$31.99",
                "link": {
                    "href": "3ZACviH"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela43.jpg.png",
                "alt": "MYWELOVE Newborn Essentials "
            },
            "desc": "100% Cotton,Imported,SOFT AND BREATHABLE | This layette set is the perfect solution for new parents and makes a great baby shower gift. This set is ultra-soft, breathable, and gentle on baby's delicate skin, making it ideal for all seasons.",
            "title": "MYWELOVE Newborn Essentials Unisex Layette Gift Set for Baby Girls or Baby Boys | Gender Neutral Baby Clothes for 0-3 Month | Includes Baby Hooded Towel & Must Haves | Cute Baby Shower Outfit Gift Set",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$64.99",
                "link": {
                    "href": "3McQCYO"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela44.jpg.png",
                "alt": "Stroller 3-in-1"
            },
            "desc": "We've integrated LED lights in the frame of the shopping basket and these are easy to switch. Helping it improve the visibility for night owls with its a 10-year transferable warranty",
            "title": "Joolz Day+ - Stroller 3-in-1 - Stroller for Baby to Toddler - Clever Design - Easy One-Hand Use - Most Comfortable Ride - Integrated Lights - Sage Green",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$1,049.00",
                "link": {
                    "href": "3JYb0K8"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela45.jpg.png",
                "alt": "Baby Led Weaning Supplies"
            },
            "desc": "ALL-IN-ONE BABY FEEDING SET: Comes with everything you need to start your baby on solid foods - adjustable bibs, suction plate and bowl, training sippy cup, and utensils. Makes a perfect baby registry gift!",
            "title": "Baby Led Weaning Supplies - Kirpi Baby Feeding Set - Silicone Suction Bowls, Divided Plates, Sippy and Snack Cup - Toddler Self Feeding Eating Utensils Set with Bibs, Spoons, Fork - 6 Months (Beige)",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$34.95",
                "link": {
                    "href": "3nLQnta"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela46.jpg.png",
                "alt": "Jonesy Locker Baby Ear Protection for Infants "
            },
            "desc": "PROTECT YOUR CHILD FROM HEARING DAMAGE - Damage to the hearing organ is irreversible! Our kids noise cancelling headphones limit your infant’s exposure to disturbing sound during the early years.",
            "title": "Jonesy Locker Baby Ear Protection for Infants (Age 0-3) Noise Cancelling Headphones for Kids - Baby Ear Muffs - Prevent Hearing Damage & Improve Sleep",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$16.99",
                "link": {
                    "href": "434n5qb"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela47.jpg.png",
                "alt": "Baby Home Use Monitor Case Accessory for New Mom TX-2"
            },
            "desc": "Fast shipping from USA, Durable and hygienic ABS material, no radiation, safe to use, Portable Size& Light Weight - The lightweight design makes it convenient to carry wherever you go For Home Use - It can be used with one hand, you could use it at home,Best Gifts for New Mom and Dad,",
            "title": "Baby Home Use Monitor Case Accessory for New Mom TX-2",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$49.99",
                "link": {
                    "href": "3Gbtciq"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela48.jpg.png",
                "alt": "Baby Muslin 100%Cotton Burp Washcloth"
            },
            "desc": "The package contains 5 sustainable pieces muslin burp cloths, enough quantity and different colors to meet most of your needs; Each cloth is approx. 8x8.5inches.",
            "title": "Baby Muslin 100%Cotton Burp Washcloth 4 Layer Small Saliva Towel Wash Face Towel Hypoallergenic 5 Pieces 8x8.5in Cloths Multi-Colors Washcloths Baby Burping Cloth Newborn Gift Sets,Small 8x8 inches",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$11.68",
                "link": {
                    "href": "3UkaNGh"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela49.jpg.png",
                "alt": "Wooden Baby Gym with 6 Toys"
            },
            "desc": "Width Baby gym frame is made of unfinished pine wood, sanded to be smooth. Free of any chemicals.between gym's legs is 19.7'' (50 cm) , Depth is 19.7'' (50 cm), Height from the floor to a play gym bar is 17.7'' (45 cm)",
            "title": "little dove Baby Play Gym Wooden Baby Gym with 6 Toys Foldable Play Gym Frame Activity Gym Hanging Bar Baby Toy White",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$52.99",
                "link": {
                    "href": "3U8vXae"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela50.jpg.png",
                "alt": "Momcozy Warming Lactation Massager"
            },
            "desc": "Extra-soft & Better-fit: Momcozy lactation massager is made of liquid silicone that not only feels soft on your hands and breasts but is also food-grade and safe. The curved shape allows the breast massager to mold easily to your breast, giving you all-around comfort.",
            "title": "Momcozy Warming Lactation Massager 2-in-1, Soft Breast Massager for Breastfeeding, Heat + Vibration Adjustable for Clogged Ducts, Improve Milk Flow, Blue-Green",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$29.99",
                "link": {
                    "href": "3m5K7MD"
                }
            }
        },
        
        {
            "image": {
                "src": "images/marcela51.jpg.png",
                "alt": "Smileader 4-in-1 Baby Bottle Dryer"
            },
            "desc": "【4-in-1 Design】 4 different functions equipped, with drying and 72h clean storage to meet multiple needs. PTC drying technology provides safer, faster and more uniform drying performance. 6 Level Timer Equipped (30 mins/40 mins/50 mins/60 mins/2 hours/4 hours).",
            "title": "Smileader 4-in-1 Baby Bottle Dryer, 10L with Touch Control and Night Light, Auto-Off Safety, Suitable for Baby and Family Items, Breast Pump, Pacifier, Toys, Clothes, Jewelry, Tableware, Milky White",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$19.00",
                "link": {
                    "href": "3m2WFEy"
                }
            }
        },
        {
            "image": {
                "src": "images/marcela52.jpg.png",
                "alt": "Baby Bottle Electric Steam Sterilizer"
            },
            "desc": "Fast and Efficient 8-Minute Steam : Our bottle Steam heats up in just 2 mins and steaming your baby's bottles and accessories in 6 mins using powerful steam. The steamer automatically shuts off once the steamer cycle is complete, ensuring your baby's safety.",
            "title": "Little Bo Baby Bottle Electric Steam Sterilizer - 8 Minute Sterilization for Safe and Easy Baby Bottle Cleaning, BPA-Free with Portable Bag",
            "date": "2023-04-02T00:00:00.000Z",
            "box": {
                "price": "$45.89",
                "link": {
                    "href": "40OPIG0"
                }
            }
        },
        
    
       
    
    
    ]
    
    

        
        

}



function compare( a, b ) {
    if ( a.date < b.date ){
      return 1;
    }
    if ( a.date > b.date ){
      return -1;
    }
    return 0;
  }

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            products: productsObject.products,
            searchText: ""
        }
    },

    computed: {
        // TODO: order by date
        filteredProducts() {
            if (this.searchText) {
                const searchV = this.searchText.toLowerCase();
                if(searchV.indexOf(" ")){
                    const searchTerms = searchV.split(" ")
                    var result =  this.products.filter(product => searchTerms.findIndex(x=> product.desc.toLowerCase().indexOf(x) != -1 || product.title.toLowerCase().indexOf(x) != -1) != -1)
                    return result.sort(compare)
                    // return []
                } else
                var result = this.products.filter(product => product.desc.toLowerCase().indexOf(searchV) != -1 ||
                    product.title.toLowerCase().indexOf(searchV) != -1 )
                return result.sort(compare)
            } else {
                return this.products.sort(compare)
            }
        }
    },
    mounted() {
        // console.log(this.products)
        // fetch("./products.json")
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => console.log(data));
    }
}).mount('#app')