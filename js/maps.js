// maps.js - Contains the map data for Squad maps
const squadMaps = [
  // Anvil maps
  { name: "Anvil", type: "AAS", version: "v1", id: "Anvil_AAS_v1", image: "img/maps/Anvil.jpg" },
  { name: "Anvil", type: "Invasion", version: "v1", id: "Anvil_Invasion_v1", image: "img/maps/Anvil.jpg" },
  { name: "Anvil", type: "RAAS", version: "v1", id: "Anvil_RAAS_v1", image: "img/maps/Anvil.jpg" },
  { name: "Anvil", type: "RAAS", version: "v2", id: "Anvil_RAAS_v2", image: "img/maps/Anvil.jpg" },
  { name: "Anvil", type: "Skirmish", version: "v1", id: "Anvil_Skirmish_v1", image: "img/maps/Anvil.jpg" },
  { name: "Anvil", type: "TC", version: "v1", id: "Anvil_TC_v1", image: "img/maps/Anvil.jpg" },
  
  // Al Basrah maps
  { name: "Al Basrah", type: "AAS", version: "v1", id: "AlBasrah_AAS_v1", image: "img/maps/AlBasrah.jpg" },
  { name: "Al Basrah", type: "Insurgency", version: "v1", id: "AlBasrah_Insurgency_v1", image: "img/maps/AlBasrah.jpg" },
  { name: "Al Basrah", type: "Invasion", version: "v1", id: "AlBasrah_Invasion_v1", image: "img/maps/AlBasrah.jpg" },
  { name: "Al Basrah", type: "Invasion", version: "v2", id: "AlBasrah_Invasion_v2", image: "img/maps/AlBasrah.jpg" },
  { name: "Al Basrah", type: "RAAS", version: "v1", id: "AlBasrah_RAAS_v1", image: "img/maps/AlBasrah.jpg" },
  { name: "Al Basrah", type: "Seed", version: "v1", id: "AlBasrah_Seed_v1", image: "img/maps/AlBasrah.jpg" },
  { name: "Al Basrah", type: "Skirmish", version: "v1", id: "AlBasrah_Skirmish_v1", image: "img/maps/AlBasrah.jpg" },
  { name: "Al Basrah", type: "Skirmish", version: "v2", id: "AlBasrah_Skirmish_v2", image: "img/maps/AlBasrah.jpg" },
  { name: "Al Basrah", type: "TC", version: "v1", id: "AlBasrah_TC_v1", image: "img/maps/AlBasrah.jpg" },
  
  // Belaya maps
  { name: "Belaya", type: "AAS", version: "v1", id: "Belaya_AAS_v1", image: "img/maps/Belaya.jpg" },
  { name: "Belaya", type: "AAS", version: "v2", id: "Belaya_AAS_v2", image: "img/maps/Belaya.jpg" },
  { name: "Belaya", type: "AAS", version: "v3", id: "Belaya_AAS_v3", image: "img/maps/Belaya.jpg" },
  { name: "Belaya", type: "Invasion", version: "v1", id: "Belaya_Invasion_v1", image: "img/maps/Belaya.jpg" },
  { name: "Belaya", type: "Invasion", version: "v2", id: "Belaya_Invasion_v2", image: "img/maps/Belaya.jpg" },
  { name: "Belaya", type: "RAAS", version: "v1", id: "Belaya_RAAS_v1", image: "img/maps/Belaya.jpg" },
  { name: "Belaya", type: "Skirmish", version: "v1", id: "Belaya_Skirmish_v1", image: "img/maps/Belaya.jpg" },
  { name: "Belaya", type: "TC", version: "v1", id: "Belaya_TC_v1", image: "img/maps/Belaya.jpg" },
  
  // Chora maps
  { name: "Chora", type: "AAS", version: "v1", id: "Chora_AAS_v1", image: "img/maps/Chora.jpg" },
  { name: "Chora", type: "AAS", version: "v2", id: "Chora_AAS_v2", image: "img/maps/Chora.jpg" },
  { name: "Chora", type: "AAS", version: "v3", id: "Chora_AAS_v3", image: "img/maps/Chora.jpg" },
  { name: "Chora", type: "Insurgency", version: "v1", id: "Chora_Insurgency_v1", image: "img/maps/Chora.jpg" },
  { name: "Chora", type: "Invasion", version: "v1", id: "Chora_Invasion_v1", image: "img/maps/Chora.jpg" },
  { name: "Chora", type: "Invasion", version: "v2", id: "Chora_Invasion_v2", image: "img/maps/Chora.jpg" },
  { name: "Chora", type: "RAAS", version: "v1", id: "Chora_RAAS_v1", image: "img/maps/Chora.jpg" },
  { name: "Chora", type: "Skirmish", version: "v1", id: "Chora_Skirmish_v1", image: "img/maps/Chora.jpg" },
  { name: "Chora", type: "TC", version: "v1", id: "Chora_TC_v1", image: "img/maps/Chora.jpg" },
  
  // Fallujah maps
  { name: "Fallujah", type: "AAS", version: "v1", id: "Fallujah_AAS_v1", image: "img/maps/Fallujah.jpg" },
  { name: "Fallujah", type: "Insurgency", version: "v1", id: "Fallujah_Insurgency_v1", image: "img/maps/Fallujah.jpg" },
  { name: "Fallujah", type: "Invasion", version: "v1", id: "Fallujah_Invasion_v1", image: "img/maps/Fallujah.jpg" },
  { name: "Fallujah", type: "Invasion", version: "v2", id: "Fallujah_Invasion_v2", image: "img/maps/Fallujah.jpg" },
  { name: "Fallujah", type: "RAAS", version: "v1", id: "Fallujah_RAAS_v1", image: "img/maps/Fallujah.jpg" },
  { name: "Fallujah", type: "RAAS", version: "v2", id: "Fallujah_RAAS_v2", image: "img/maps/Fallujah.jpg" },
  { name: "Fallujah", type: "Seed", version: "v1", id: "Fallujah_Seed_v1", image: "img/maps/Fallujah.jpg" },
  { name: "Fallujah", type: "Skirmish", version: "v1", id: "Fallujah_Skirmish_v1", image: "img/maps/Fallujah.jpg" },
  { name: "Fallujah", type: "Skirmish", version: "v2", id: "Fallujah_Skirmish_v2", image: "img/maps/Fallujah.jpg" },
  { name: "Fallujah", type: "TC", version: "v1", id: "Fallujah_TC_v1", image: "img/maps/Fallujah.jpg" },
  
  // Fool's Road maps
  { name: "Fool's Road", type: "AAS", version: "v1", id: "FoolsRoad_AAS_v1", image: "img/maps/FoolsRoad.jpg" },
  { name: "Fool's Road", type: "AAS", version: "v2", id: "FoolsRoad_AAS_v2", image: "img/maps/FoolsRoad.jpg" },
  { name: "Fool's Road", type: "Destruction", version: "v1", id: "FoolsRoad_Destruction_v1", image: "img/maps/FoolsRoad.jpg" },
  { name: "Fool's Road", type: "Invasion", version: "v1", id: "FoolsRoad_Invasion_v1", image: "img/maps/FoolsRoad.jpg" },
  { name: "Fool's Road", type: "RAAS", version: "v1", id: "FoolsRoad_RAAS_v1", image: "img/maps/FoolsRoad.jpg" },
  { name: "Fool's Road", type: "Skirmish", version: "v1", id: "FoolsRoad_Skirmish_v1", image: "img/maps/FoolsRoad.jpg" },
  { name: "Fool's Road", type: "Skirmish", version: "v2", id: "FoolsRoad_Skirmish_v2", image: "img/maps/FoolsRoad.jpg" },
  { name: "Fool's Road", type: "TC", version: "v1", id: "FoolsRoad_TC_v1", image: "img/maps/FoolsRoad.jpg" },
  
  // Goose Bay maps
  { name: "Goose Bay", type: "AAS", version: "v1", id: "GooseBay_AAS_v1", image: "img/maps/GooseBay.jpg" },
  { name: "Goose Bay", type: "Invasion", version: "v1", id: "GooseBay_Invasion_v1", image: "img/maps/GooseBay.jpg" },
  { name: "Goose Bay", type: "RAAS", version: "v1", id: "GooseBay_RAAS_v1", image: "img/maps/GooseBay.jpg" },
  { name: "Goose Bay", type: "RAAS", version: "v2", id: "GooseBay_RAAS_v2", image: "img/maps/GooseBay.jpg" },
  { name: "Goose Bay", type: "Seed", version: "v1", id: "GooseBay_Seed_v1", image: "img/maps/GooseBay.jpg" },
  { name: "Goose Bay", type: "Skirmish", version: "v1", id: "GooseBay_Skirmish_v1", image: "img/maps/GooseBay.jpg" },
  
  // Gorodok maps
  { name: "Gorodok", type: "AAS", version: "v1", id: "Gorodok_AAS_v1", image: "img/maps/Gorodok.jpg" },
  { name: "Gorodok", type: "Destruction", version: "v1", id: "Gorodok_Destruction_v1", image: "img/maps/Gorodok.jpg" },
  { name: "Gorodok", type: "Insurgency", version: "v1", id: "Gorodok_Insurgency_v1", image: "img/maps/Gorodok.jpg" },
  { name: "Gorodok", type: "Invasion", version: "v1", id: "Gorodok_Invasion_v1", image: "img/maps/Gorodok.jpg" },
  { name: "Gorodok", type: "Invasion", version: "v2", id: "Gorodok_Invasion_v2", image: "img/maps/Gorodok.jpg" },
  { name: "Gorodok", type: "RAAS", version: "v1", id: "Gorodok_RAAS_v1", image: "img/maps/Gorodok.jpg" },
  { name: "Gorodok", type: "RAAS", version: "v2", id: "Gorodok_RAAS_v2", image: "img/maps/Gorodok.jpg" },
  { name: "Gorodok", type: "Skirmish", version: "v1", id: "Gorodok_Skirmish_v1", image: "img/maps/Gorodok.jpg" },
  { name: "Gorodok", type: "TC", version: "v1", id: "Gorodok_TC_v1", image: "img/maps/Gorodok.jpg" },
  
  // Kamdesh maps
  { name: "Kamdesh", type: "AAS", version: "v1", id: "Kamdesh_AAS_v1", image: "img/maps/Kamdesh.jpg" },
  { name: "Kamdesh", type: "Insurgency", version: "v1", id: "Kamdesh_Insurgency_v1", image: "img/maps/Kamdesh.jpg" },
  { name: "Kamdesh", type: "Invasion", version: "v1", id: "Kamdesh_Invasion_v1", image: "img/maps/Kamdesh.jpg" },
  { name: "Kamdesh", type: "RAAS", version: "v1", id: "Kamdesh_RAAS_v1", image: "img/maps/Kamdesh.jpg" },
  { name: "Kamdesh", type: "Skirmish", version: "v1", id: "Kamdesh_Skirmish_v1", image: "img/maps/Kamdesh.jpg" },
  { name: "Kamdesh", type: "TC", version: "v1", id: "Kamdesh_TC_v1", image: "img/maps/Kamdesh.jpg" },
  
  // Kohat maps
  { name: "Kohat", type: "AAS", version: "v1", id: "Kohat_AAS_v1", image: "img/maps/Kohat.jpg" },
  { name: "Kohat", type: "Insurgency", version: "v1", id: "Kohat_Insurgency_v1", image: "img/maps/Kohat.jpg" },
  { name: "Kohat", type: "Invasion", version: "v1", id: "Kohat_Invasion_v1", image: "img/maps/Kohat.jpg" },
  { name: "Kohat", type: "Invasion", version: "v2", id: "Kohat_Invasion_v2", image: "img/maps/Kohat.jpg" },
  { name: "Kohat", type: "RAAS", version: "v1", id: "Kohat_RAAS_v1", image: "img/maps/Kohat.jpg" },
  { name: "Kohat", type: "RAAS", version: "v2", id: "Kohat_RAAS_v2", image: "img/maps/Kohat.jpg" },
  { name: "Kohat", type: "Skirmish", version: "v1", id: "Kohat_Skirmish_v1", image: "img/maps/Kohat.jpg" },
  { name: "Kohat", type: "TC", version: "v1", id: "Kohat_TC_v1", image: "img/maps/Kohat.jpg" },
  
  // Kokan maps
  { name: "Kokan", type: "AAS", version: "v1", id: "Kokan_AAS_v1", image: "img/maps/Kokan.jpg" },
  
  // Lashkar maps
  { name: "Lashkar", type: "Insurgency", version: "v1", id: "Lashkar_Insurgency_v1", image: "img/maps/Lashkar.jpg" },
  
  // Logar maps
  { name: "Logar", type: "RAAS", version: "v1", id: "Logar_RAAS_v1", image: "img/maps/Logar.jpg" },
  
  // Manicouagan maps
  { name: "Manicouagan", type: "Invasion", version: "v1", id: "Manicouagan_Invasion_v1", image: "img/maps/Manicouagan.jpg" },
  
  // Mestia maps
  { name: "Mestia", type: "TC", version: "v1", id: "Mestia_TC_v1", image: "img/maps/Mestia.jpg" },
  
  // Mutaha maps
  { name: "Mutaha", type: "AAS", version: "v1", id: "Mutaha_AAS_v1", image: "img/maps/Mutaha.jpg" },
  
  // Narva maps
  { name: "Narva", type: "RAAS", version: "v1", id: "Narva_RAAS_v1", image: "img/maps/Narva.jpg" },
  
  // Skorpo maps
  { name: "Skorpo", type: "Invasion", version: "v1", id: "Skorpo_Invasion_v1", image: "img/maps/Skorpo.jpg" },
  
  // Sumari maps
  { name: "Sumari", type: "Skirmish", version: "v1", id: "Sumari_Skirmish_v1", image: "img/maps/Sumari.jpg" },
  
  // Tallil maps
  { name: "Tallil", type: "AAS", version: "v1", id: "Tallil_AAS_v1", image: "img/maps/Tallil.jpg" },
  
  // Yehorivka maps
  { name: "Yehorivka", type: "RAAS", version: "v1", id: "Yehorivka_RAAS_v1", image: "img/maps/Yehorivka.jpg" },
  
  // Black Coast maps
  { name: "BlackCoast", type: "Invasion", version: "v1", id: "BlackCoast_Invasion_v1", image: "img/maps/BlackCoast.jpg" },
  
  // Harju maps
  { name: "Harju", type: "AAS", version: "v1", id: "Harju_AAS_v1", image: "img/maps/Harju.jpg" },
  
  // Sanxian maps
  { name: "Sanxian", type: "RAAS", version: "v1", id: "Sanxian_RAAS_v1", image: "img/maps/Sanxian.jpg" },
];
