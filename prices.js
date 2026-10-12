// Price list. Edit rate and disc (50% price) here, save, and re-upload this file.
// Use null for rate and disc when the price is on request.
const DATA = [
 {"cat": "ONE SOUND CRACKERS", "items": [
  {"id": "1", "n": 1, "name": "3½\" Lakshmi", "rate": 110.0, "disc": 55.0, "unit": "Pkt"},
  {"id": "2", "n": 2, "name": "4\" Lakshmi - Micky", "rate": 170.0, "disc": 85.0, "unit": "Pkt"},
  {"id": "3", "n": 3, "name": "4\" Gold Lakshmi", "rate": 200.0, "disc": 100.0, "unit": "Pkt"},
  {"id": "4", "n": 4, "name": "4\" Deluxe Lakshmi", "rate": 290.0, "disc": 145.0, "unit": "Pkt"},
  {"id": "5", "n": 5, "name": "2¾\" Kuruvi", "rate": 60.0, "disc": 30.0, "unit": "Pkt"},
  {"id": "6", "n": 6, "name": "6\" Jallikattu", "rate": 450.0, "disc": 225.0, "unit": "Pkt"}
 ]},
 {"cat": "BIJILI CRACKERS", "items": [
  {"id": "7", "n": 7, "name": "Red Bijili", "rate": 200.0, "disc": 100.0, "unit": "Pkt"},
  {"id": "8", "n": 8, "name": "Stripped Bijili", "rate": 220.0, "disc": 110.0, "unit": "Pkt"},
  {"id": "9", "n": 9, "name": "Gold Bijili", "rate": 250.0, "disc": 125.0, "unit": "Pkt"}
 ]},
 {"cat": "ELECTRIC CRACKERS", "items": [
  {"id": "10", "n": 10, "name": "28 Chorsa", "rate": 120.0, "disc": 60.0, "unit": "Pkt"},
  {"id": "11", "n": 11, "name": "28 Giant", "rate": 190.0, "disc": 95.0, "unit": "Pkt"},
  {"id": "12", "n": 12, "name": "24 Deluxe", "rate": 500.0, "disc": 250.0, "unit": "Pkt"},
  {"id": "13", "n": 13, "name": "50 Deluxe", "rate": 760.0, "disc": 380.0, "unit": "Pkt"},
  {"id": "14", "n": 14, "name": "100 Deluxe", "rate": 1800.0, "disc": 900.0, "unit": "Pkt"}
 ]},
 {"cat": "GARLANDS", "items": [
  {"id": "15", "n": 15, "name": "100 Wats", "rate": 350.0, "disc": 175.0, "unit": "Pcs"},
  {"id": "16", "n": 16, "name": "1K", "rate": 2500.0, "disc": 1250.0, "unit": "Pcs"},
  {"id": "17", "n": 17, "name": "2K", "rate": 4499.0, "disc": 2249.5, "unit": "Pcs"},
  {"id": "18", "n": 18, "name": "5K", "rate": 13000.0, "disc": 6500.0, "unit": "Pcs"},
  {"id": "19", "n": 19, "name": "10K", "rate": 26000.0, "disc": 13000.0, "unit": "Pcs"}
 ]},
 {"cat": "GROUND CHAKKARAM", "items": [
  {"id": "20", "n": 20, "name": "Chakkar Big", "rate": 390.0, "disc": 195.0, "unit": "Box"},
  {"id": "21", "n": 21, "name": "Chakkar Special", "rate": 640.0, "disc": 320.0, "unit": "Box"},
  {"id": "22", "n": 22, "name": "Chakkar Deluxe", "rate": 1260.0, "disc": 630.0, "unit": "Box"},
  {"id": "23", "n": 23, "name": "Whistling Wheel", "rate": 1380.0, "disc": 690.0, "unit": "Box"},
  {"id": "24", "n": 24, "name": "Wire Chakkar", "rate": 1800.0, "disc": 900.0, "unit": "Box"}
 ]},
 {"cat": "FLOWER POTS", "items": [
  {"id": "25", "n": 25, "name": "Flower Pots Small", "rate": 480.0, "disc": 240.0, "unit": "Box"},
  {"id": "26", "n": 26, "name": "Flower Pots Big", "rate": 600.0, "disc": 300.0, "unit": "Box"},
  {"id": "27", "n": 27, "name": "Flower Pots Special", "rate": 742.0, "disc": 371.0, "unit": "Box"},
  {"id": "28", "n": 28, "name": "Flower Pots Ashoka", "rate": 998.0, "disc": 499.0, "unit": "Box"},
  {"id": "29", "n": 29, "name": "Colour Koti", "rate": 1710.0, "disc": 855.0, "unit": "Box"},
  {"id": "30", "n": 30, "name": "Tricolour", "rate": 2500.0, "disc": 1250.0, "unit": "Box"},
  {"id": "31", "n": 31, "name": "Flower Pots Super Deluxe", "rate": 2000.0, "disc": 1000.0, "unit": "Box"}
 ]},
 {"cat": "BOMBS", "items": [
  {"id": "32", "n": 32, "name": "Bullet Bomb", "rate": 210.0, "disc": 105.0, "unit": "Box"},
  {"id": "33", "n": 33, "name": "Atom Bomb", "rate": 400.0, "disc": 200.0, "unit": "Box"},
  {"id": "34", "n": 34, "name": "Hydro Bomb", "rate": 550.0, "disc": 275.0, "unit": "Box"},
  {"id": "35", "n": 35, "name": "King Bomb", "rate": 702.0, "disc": 351.0, "unit": "Box"},
  {"id": "36", "n": 36, "name": "Classic Bomb", "rate": 950.0, "disc": 475.0, "unit": "Box"},
  {"id": "37", "n": 37, "name": "Digital Bomb", "rate": 2350.0, "disc": 1175.0, "unit": "Box"},
  {"id": "38", "n": 38, "name": "1/4 Kg Paper", "rate": 452.0, "disc": 226.0, "unit": "Box"},
  {"id": "39", "n": 39, "name": "1/2 kg Paper", "rate": 950.0, "disc": 475.0, "unit": "Box"},
  {"id": "40", "n": 40, "name": "1 Kg paper", "rate": 1990.0, "disc": 995.0, "unit": "Box"},
  {"id": "41", "n": 41, "name": "Lion Gun (5pcs)", "rate": null, "disc": null, "unit": "Box"}
 ]},
 {"cat": "ROCKETS", "items": [
  {"id": "42", "n": 42, "name": "Baby Rocket", "rate": 300.0, "disc": 150.0, "unit": "Box"},
  {"id": "43", "n": 43, "name": "Rocket Bomb", "rate": 510.0, "disc": 255.0, "unit": "Box"},
  {"id": "44", "n": 44, "name": "Whistle Rocket", "rate": 1595.0, "disc": 797.5, "unit": "Box"}
 ]},
 {"cat": "FANCY PIPES", "items": [
  {"id": "45", "n": 45, "name": "7 Shot", "rate": 990.0, "disc": 495.0, "unit": "Box"},
  {"id": "46", "n": 46, "name": "Chotta Pipes", "rate": 390.0, "disc": 195.0, "unit": "Box"},
  {"id": "47", "n": 47, "name": "1¼\" (3pcs) Pipes", "rate": 2220.0, "disc": 1110.0, "unit": "Box"},
  {"id": "48", "n": 48, "name": "2\" Pipes (1pcs)", "rate": 990.0, "disc": 495.0, "unit": "Box"},
  {"id": "49", "n": 49, "name": "3½\" Pipes (1pcs)", "rate": 2450.0, "disc": 1225.0, "unit": "Box"},
  {"id": "50", "n": 50, "name": "4\" King Fisher Pipes", "rate": 4210.0, "disc": 2105.0, "unit": "Box"},
  {"id": "51", "n": 51, "name": "4\" Pipes", "rate": 3100.0, "disc": 1550.0, "unit": "Box"},
  {"id": "52", "n": 52, "name": "4\" Pipes Double Ball", "rate": null, "disc": null, "unit": "Box"},
  {"id": "53", "n": 53, "name": "1¼ Elite-Hulkwar (3pcs)", "rate": 2900.0, "disc": 1450.0, "unit": "Box"},
  {"id": "54", "n": 54, "name": "Penta", "rate": 1410.0, "disc": 705.0, "unit": "Box"}
 ]},
 {"cat": "SPECIAL PENCIL", "items": [
  {"id": "55", "n": 55, "name": "Ultra Pencil (3 pcs)", "rate": 650.0, "disc": 325.0, "unit": "Box"},
  {"id": "56", "n": 56, "name": "Top Gun (5 pcs)", "rate": 2090.0, "disc": 1045.0, "unit": "Box"},
  {"id": "57", "n": 57, "name": "Rainbow Smoke (3 pcs)", "rate": 1499.0, "disc": 749.5, "unit": "Box"},
  {"id": "58", "n": 58, "name": "Double Blast Gun", "rate": 1810.0, "disc": 905.0, "unit": "Box"},
  {"id": "59", "n": 59, "name": "Selfie Stick", "rate": 910.0, "disc": 455.0, "unit": "Box"}
 ]},
 {"cat": "NEW COLOUR COLLECTION", "items": [
  {"id": "60", "n": 60, "name": "Siren (3 pcs)", "rate": 1650.0, "disc": 825.0, "unit": "Box"},
  {"id": "61", "n": 61, "name": "Helicopter (5 pcs)", "rate": 990.0, "disc": 495.0, "unit": "Box"},
  {"id": "62", "n": 62, "name": "Colour Pots (5 pcs)", "rate": 1090.0, "disc": 545.0, "unit": "Box"},
  {"id": "63", "n": 63, "name": "Android (4 pcs)", "rate": 2192.0, "disc": 1096.0, "unit": "Box"},
  {"id": "64", "n": 64, "name": "Motto - 4x4 Wheel (5 pcs)", "rate": 1616.0, "disc": 808.0, "unit": "Box"},
  {"id": "65", "n": 65, "name": "Peacock Feather (5 pcs)", "rate": 1004.0, "disc": 502.0, "unit": "Box"},
  {"id": "66", "n": 66, "name": "Lolli pop (5 pcs)", "rate": 1990.0, "disc": 995.0, "unit": "Box"},
  {"id": "67", "n": 67, "name": "Golden Rain (5 pcs)", "rate": 1010.0, "disc": 505.0, "unit": "Box"},
  {"id": "68", "n": 68, "name": "Twix (5 pcs)", "rate": 1710.0, "disc": 855.0, "unit": "Box"},
  {"id": "69", "n": 69, "name": "peafoul Tail (2 pcs)", "rate": 1900.0, "disc": 950.0, "unit": "Box"}
 ]},
 {"cat": "FANCY NOVELTIES", "items": [
  {"id": "70", "n": 70, "name": "Bada Peacock (1 pcs)", "rate": 3410.0, "disc": 1705.0, "unit": "Box"},
  {"id": "71", "n": 71, "name": "Magic Peacock (1 pcs)", "rate": 1540.0, "disc": 770.0, "unit": "Box"},
  {"id": "72", "n": 72, "name": "Butterfly", "rate": 890.0, "disc": 445.0, "unit": "Box"},
  {"id": "73", "n": 73, "name": "Kit Kat", "rate": 1100.0, "disc": 550.0, "unit": "Box"},
  {"id": "74", "n": 74, "name": "Smile Day (1 pcs)", "rate": 264.0, "disc": 132.0, "unit": "Box"},
  {"id": "75", "n": 75, "name": "Retro (1 pcs)", "rate": 310.0, "disc": 155.0, "unit": "Box"},
  {"id": "76", "n": 76, "name": "Fox Star (1 pcs)", "rate": 1100.0, "disc": 550.0, "unit": "Box"},
  {"id": "77", "n": 77, "name": "Sing Pop (1 pcs)", "rate": 1210.0, "disc": 605.0, "unit": "Box"},
  {"id": "78", "n": 78, "name": "Photo Flash (5 pcs)", "rate": 540.0, "disc": 270.0, "unit": "Box"},
  {"id": "79", "n": 79, "name": "Tin Beer (1 pcs)", "rate": 1320.0, "disc": 660.0, "unit": "Box"},
  {"id": "80", "n": 80, "name": "Magic Show (2 pcs)", "rate": 1980.0, "disc": 990.0, "unit": "Box"}
 ]},
 {"cat": "MULTICOLOUR SHOTS", "items": [
  {"id": "81", "n": 81, "name": "12 Shot crackling R&G", "rate": 1320.0, "disc": 660.0, "unit": "Box"},
  {"id": "82", "n": 82, "name": "15 Shot Multicolour", "rate": 2130.0, "disc": 1065.0, "unit": "Box"},
  {"id": "83", "n": 83, "name": "25 Epic Shot - Raider", "rate": 2320.0, "disc": 1160.0, "unit": "Box"},
  {"id": "84", "n": 84, "name": "30 Shot Colour", "rate": 3850.0, "disc": 1925.0, "unit": "Box"},
  {"id": "85", "n": 85, "name": "Power 60 Shot", "rate": 7150.0, "disc": 3575.0, "unit": "Box"},
  {"id": "86", "n": 86, "name": "Command 120 Shot", "rate": 14300.0, "disc": 7150.0, "unit": "Box"},
  {"id": "87", "n": 87, "name": "Holi 240 Shot", "rate": 28600.0, "disc": 14300.0, "unit": "Box"},
  {"id": "88", "n": 88, "name": "XLR - 50 Shot (5x10)", "rate": 15900.0, "disc": 7950.0, "unit": "Box"}
 ]},
 {"cat": "8\" FOUNTAIN - FULL CRACKLING", "items": [
  {"id": "89", "n": 89, "name": "Festival Crackling", "rate": 2750.0, "disc": 1375.0, "unit": "Box"},
  {"id": "90", "n": 90, "name": "Mr.Bean - 3\" Colour", "rate": 2090.0, "disc": 1045.0, "unit": "Box"},
  {"id": "91", "n": 91, "name": "Sizzling - Lego 3 Colour", "rate": 2090.0, "disc": 1045.0, "unit": "Box"},
  {"id": "92", "n": 92, "name": "Red Apple (6 Variets)", "rate": 1860.0, "disc": 930.0, "unit": "Box"},
  {"id": "93", "n": 93, "name": "Cookies (1 Variets)", "rate": 1150.0, "disc": 575.0, "unit": "Box"},
  {"id": "94", "n": 94, "name": "Cock Fight Tin (6 Variets)", "rate": 1860.0, "disc": 930.0, "unit": "Box"},
  {"id": "95", "n": 95, "name": "Bingo (4 Variets)", "rate": 1815.0, "disc": 907.5, "unit": "Box"},
  {"id": "96", "n": 96, "name": "Lemon Tree", "rate": 1340.0, "disc": 670.0, "unit": "Box"},
  {"id": "97", "n": 97, "name": "Drone", "rate": 1210.0, "disc": 605.0, "unit": "Box"}
 ]},
 {"cat": "SPARKLERS", "items": [
  {"id": "98", "n": 98, "name": "10cm Electric Sparklers", "rate": 200.0, "disc": 100.0, "unit": "Box"},
  {"id": "99", "n": 99, "name": "10cm Colour Sparklers", "rate": 230.0, "disc": 115.0, "unit": "Box"},
  {"id": "100", "n": 100, "name": "10cm Green Sparklers", "rate": 270.0, "disc": 135.0, "unit": "Box"},
  {"id": "101", "n": 101, "name": "10cm Red Sparklers", "rate": 290.0, "disc": 145.0, "unit": "Box"},
  {"id": "102", "n": 102, "name": "12cm Electric Sparklers", "rate": 340.0, "disc": 170.0, "unit": "Box"},
  {"id": "103", "n": 103, "name": "12cm Colour Sparklers", "rate": 360.0, "disc": 180.0, "unit": "Box"},
  {"id": "104", "n": 104, "name": "12cm Green Sparklers", "rate": 380.0, "disc": 190.0, "unit": "Box"},
  {"id": "105", "n": 105, "name": "12cm Red Sparklers", "rate": 1040.0, "disc": 520.0, "unit": "Box"},
  {"id": "106", "n": 106, "name": "15cm Electric Sparklers", "rate": 15510.0, "disc": 7755.0, "unit": "Box"},
  {"id": "107", "n": 107, "name": "15cm Colour Sparklers", "rate": 15488.0, "disc": 7744.0, "unit": "Box"},
  {"id": "108", "n": 108, "name": "15cm Green Sparklers", "rate": 15510.0, "disc": 7755.0, "unit": "Box"},
  {"id": "109", "n": 109, "name": "15cm Red Sparklers", "rate": 15560.0, "disc": 7780.0, "unit": "Box"},
  {"id": "110", "n": 110, "name": "30cm Electric Sparklers", "rate": 30450.0, "disc": 15225.0, "unit": "Box"},
  {"id": "111", "n": 111, "name": "30cm Colour Sparklers", "rate": 30488.0, "disc": 15244.0, "unit": "Box"},
  {"id": "112", "n": 112, "name": "30cm Green Sparklers", "rate": 30510.0, "disc": 15255.0, "unit": "Box"},
  {"id": "113", "n": 113, "name": "30cm Red Sparklers", "rate": 30560.0, "disc": 15280.0, "unit": "Box"},
  {"id": "114", "n": 114, "name": "50cm Electric Sparklers", "rate": 50172.0, "disc": 25086.0, "unit": "Box"},
  {"id": "115", "n": 115, "name": "50cm Colour Sparklers", "rate": 50187.0, "disc": 25093.5, "unit": "Box"},
  {"id": "116", "n": 116, "name": "Firefly Spinners", "rate": 1780.0, "disc": 890.0, "unit": "Box"}
 ]},
 {"cat": "TWINKING STAR", "items": [
  {"id": "117", "n": 117, "name": "Twinkling Star Small", "rate": 199.0, "disc": 99.5, "unit": "Box"},
  {"id": "118", "n": 118, "name": "Twinkling Deluxe", "rate": 598.0, "disc": 299.0, "unit": "Box"}
 ]},
 {"cat": "VADIEL SPECIAL", "items": [
  {"id": "119", "n": 119, "name": "Seeti Maar 36 Shot", "rate": 1500.0, "disc": 750.0, "unit": "Box"},
  {"id": "120", "n": 120, "name": "Fancy Flash (5 Pcs)", "rate": 1430.0, "disc": 715.0, "unit": "Box"},
  {"id": "121", "n": 121, "name": "Fire Egg (2 Pcs)", "rate": 1600.0, "disc": 800.0, "unit": "Box"},
  {"id": "122", "n": 122, "name": "Power Puff Girls (5 Pcs)", "rate": 1480.0, "disc": 740.0, "unit": "Box"},
  {"id": "123", "n": 123, "name": "Look Up (5 Pcs)", "rate": 1620.0, "disc": 810.0, "unit": "Box"},
  {"id": "124", "n": 124, "name": "Ring Ring (5 Pcs)", "rate": 1750.0, "disc": 875.0, "unit": "Box"},
  {"id": "125", "n": 125, "name": "Recycle (5 Pcs)", "rate": 1100.0, "disc": 550.0, "unit": "Box"},
  {"id": "126", "n": 126, "name": "Deluxe Spinner (10 Pcs)", "rate": 1720.0, "disc": 860.0, "unit": "Box"}
 ]},
 {"cat": "SPECIAL FOUNTAIN", "items": [
  {"id": "127", "n": 127, "name": "Colour Galaxy (4 Variets)", "rate": 1910.0, "disc": 955.0, "unit": "2 Pcs"},
  {"id": "128", "n": 128, "name": "Golden Tree (5 Variets)", "rate": 1800.0, "disc": 900.0, "unit": "5 Pcs"},
  {"id": "129", "n": 129, "name": "Classic 5in1 (5 Pcs)", "rate": 1890.0, "disc": 945.0, "unit": "Box"},
  {"id": "130", "n": 130, "name": "Cheery Red (5 Pcs)", "rate": 1450.0, "disc": 725.0, "unit": "Box"},
  {"id": "131", "n": 131, "name": "Panchavarna (5 Pcs)", "rate": 1500.0, "disc": 750.0, "unit": "Box"},
  {"id": "132", "n": 132, "name": "Amazing Five - 5in1 (1 Pcs)", "rate": 2100.0, "disc": 1050.0, "unit": "Box"},
  {"id": "133", "n": 133, "name": "Classic 3in1 (1 Pcs)", "rate": 2000.0, "disc": 1000.0, "unit": "Box"}
 ]},
 {"cat": "COLOUR MATHS", "items": [
  {"id": "134", "n": 134, "name": "Super Deluxe", "rate": 870.0, "disc": 435.0, "unit": "Box"},
  {"id": "135", "n": 135, "name": "Poke Man", "rate": 1390.0, "disc": 695.0, "unit": "Box"},
  {"id": "136", "n": 136, "name": "Mega", "rate": 1980.0, "disc": 990.0, "unit": "Box"},
  {"id": "137", "n": 137, "name": "Roll Cap", "rate": 620.0, "disc": 310.0, "unit": "Box"}
 ]},
 {"cat": "GIFT BOX", "items": [
  {"id": "138", "n": 138, "name": "21 Items", "rate": 2500.0, "disc": 1250.0, "unit": "Box"},
  {"id": "139", "n": 139, "name": "31 Items", "rate": 3800.0, "disc": 1900.0, "unit": "Box"},
  {"id": "140", "n": 140, "name": "40 Items", "rate": 6500.0, "disc": 3250.0, "unit": "Box"},
  {"id": "141", "n": 141, "name": "50 Items", "rate": 9000.0, "disc": 4500.0, "unit": "Box"}
 ]}
];
