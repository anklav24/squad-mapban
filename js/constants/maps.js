// Constants that define the maps data for the app
const squadMaps = [
    // Anvil maps
    { name: "Anvil", type: "AAS", version: "v1", id: "Anvil_AAS_v1", image: "assets/images/maps/Anvil.jpg" },
    { name: "Anvil", type: "Invasion", version: "v1", id: "Anvil_Invasion_v1", image: "assets/images/maps/Anvil.jpg" },
    { name: "Anvil", type: "RAAS", version: "v1", id: "Anvil_RAAS_v1", image: "assets/images/maps/Anvil.jpg" },
    { name: "Anvil", type: "RAAS", version: "v2", id: "Anvil_RAAS_v2", image: "assets/images/maps/Anvil.jpg" },
    { name: "Anvil", type: "Skirmish", version: "v1", id: "Anvil_Skirmish_v1", image: "assets/images/maps/Anvil.jpg" },
    { name: "Anvil", type: "TC", version: "v1", id: "Anvil_TC_v1", image: "assets/images/maps/Anvil.jpg" },
    
    // Al Basrah maps
    { name: "Al Basrah", type: "AAS", version: "v1", id: "AlBasrah_AAS_v1", image: "assets/images/maps/AlBasrah.jpg" },
    { name: "Al Basrah", type: "Insurgency", version: "v1", id: "AlBasrah_Insurgency_v1", image: "assets/images/maps/AlBasrah.jpg" },
    { name: "Al Basrah", type: "Invasion", version: "v1", id: "AlBasrah_Invasion_v1", image: "assets/images/maps/AlBasrah.jpg" },
    { name: "Al Basrah", type: "Invasion", version: "v2", id: "AlBasrah_Invasion_v2", image: "assets/images/maps/AlBasrah.jpg" },
    { name: "Al Basrah", type: "RAAS", version: "v1", id: "AlBasrah_RAAS_v1", image: "assets/images/maps/AlBasrah.jpg" },
    { name: "Al Basrah", type: "Seed", version: "v1", id: "AlBasrah_Seed_v1", image: "assets/images/maps/AlBasrah.jpg" },
    { name: "Al Basrah", type: "Skirmish", version: "v1", id: "AlBasrah_Skirmish_v1", image: "assets/images/maps/AlBasrah.jpg" },
    { name: "Al Basrah", type: "Skirmish", version: "v2", id: "AlBasrah_Skirmish_v2", image: "assets/images/maps/AlBasrah.jpg" },
    { name: "Al Basrah", type: "TC", version: "v1", id: "AlBasrah_TC_v1", image: "assets/images/maps/AlBasrah.jpg" },
    
    // Belaya maps
    { name: "Belaya", type: "AAS", version: "v1", id: "Belaya_AAS_v1", image: "assets/images/maps/Belaya.jpg" },
    { name: "Belaya", type: "AAS", version: "v2", id: "Belaya_AAS_v2", image: "assets/images/maps/Belaya.jpg" },
    { name: "Belaya", type: "AAS", version: "v3", id: "Belaya_AAS_v3", image: "assets/images/maps/Belaya.jpg" },
    { name: "Belaya", type: "Invasion", version: "v1", id: "Belaya_Invasion_v1", image: "assets/images/maps/Belaya.jpg" },
    { name: "Belaya", type: "Invasion", version: "v2", id: "Belaya_Invasion_v2", image: "assets/images/maps/Belaya.jpg" },
    { name: "Belaya", type: "RAAS", version: "v1", id: "Belaya_RAAS_v1", image: "assets/images/maps/Belaya.jpg" },
    { name: "Belaya", type: "Skirmish", version: "v1", id: "Belaya_Skirmish_v1", image: "assets/images/maps/Belaya.jpg" },
    { name: "Belaya", type: "TC", version: "v1", id: "Belaya_TC_v1", image: "assets/images/maps/Belaya.jpg" },
    
    // Chora maps
    { name: "Chora", type: "AAS", version: "v1", id: "Chora_AAS_v1", image: "assets/images/maps/Chora.jpg" },
    { name: "Chora", type: "AAS", version: "v2", id: "Chora_AAS_v2", image: "assets/images/maps/Chora.jpg" },
    { name: "Chora", type: "AAS", version: "v3", id: "Chora_AAS_v3", image: "assets/images/maps/Chora.jpg" },
    { name: "Chora", type: "Insurgency", version: "v1", id: "Chora_Insurgency_v1", image: "assets/images/maps/Chora.jpg" },
    { name: "Chora", type: "Invasion", version: "v1", id: "Chora_Invasion_v1", image: "assets/images/maps/Chora.jpg" },
    { name: "Chora", type: "Invasion", version: "v2", id: "Chora_Invasion_v2", image: "assets/images/maps/Chora.jpg" },
    { name: "Chora", type: "RAAS", version: "v1", id: "Chora_RAAS_v1", image: "assets/images/maps/Chora.jpg" },
    { name: "Chora", type: "Skirmish", version: "v1", id: "Chora_Skirmish_v1", image: "assets/images/maps/Chora.jpg" },
    { name: "Chora", type: "TC", version: "v1", id: "Chora_TC_v1", image: "assets/images/maps/Chora.jpg" },
    
    // Fallujah maps
    { name: "Fallujah", type: "AAS", version: "v1", id: "Fallujah_AAS_v1", image: "assets/images/maps/Fallujah.jpg" },
    { name: "Fallujah", type: "Insurgency", version: "v1", id: "Fallujah_Insurgency_v1", image: "assets/images/maps/Fallujah.jpg" },
    { name: "Fallujah", type: "Invasion", version: "v1", id: "Fallujah_Invasion_v1", image: "assets/images/maps/Fallujah.jpg" },
    { name: "Fallujah", type: "Invasion", version: "v2", id: "Fallujah_Invasion_v2", image: "assets/images/maps/Fallujah.jpg" },
    { name: "Fallujah", type: "RAAS", version: "v1", id: "Fallujah_RAAS_v1", image: "assets/images/maps/Fallujah.jpg" },
    { name: "Fallujah", type: "RAAS", version: "v2", id: "Fallujah_RAAS_v2", image: "assets/images/maps/Fallujah.jpg" },
    { name: "Fallujah", type: "Seed", version: "v1", id: "Fallujah_Seed_v1", image: "assets/images/maps/Fallujah.jpg" },
    { name: "Fallujah", type: "Skirmish", version: "v1", id: "Fallujah_Skirmish_v1", image: "assets/images/maps/Fallujah.jpg" },
    { name: "Fallujah", type: "Skirmish", version: "v2", id: "Fallujah_Skirmish_v2", image: "assets/images/maps/Fallujah.jpg" },
    { name: "Fallujah", type: "TC", version: "v1", id: "Fallujah_TC_v1", image: "assets/images/maps/Fallujah.jpg" },
    
    // Fool's Road maps
    { name: "Fool's Road", type: "AAS", version: "v1", id: "FoolsRoad_AAS_v1", image: "assets/images/maps/FoolsRoad.jpg" },
    { name: "Fool's Road", type: "AAS", version: "v2", id: "FoolsRoad_AAS_v2", image: "assets/images/maps/FoolsRoad.jpg" },
    { name: "Fool's Road", type: "Destruction", version: "v1", id: "FoolsRoad_Destruction_v1", image: "assets/images/maps/FoolsRoad.jpg" },
    { name: "Fool's Road", type: "Invasion", version: "v1", id: "FoolsRoad_Invasion_v1", image: "assets/images/maps/FoolsRoad.jpg" },
    { name: "Fool's Road", type: "RAAS", version: "v1", id: "FoolsRoad_RAAS_v1", image: "assets/images/maps/FoolsRoad.jpg" },
    { name: "Fool's Road", type: "Skirmish", version: "v1", id: "FoolsRoad_Skirmish_v1", image: "assets/images/maps/FoolsRoad.jpg" },
    { name: "Fool's Road", type: "Skirmish", version: "v2", id: "FoolsRoad_Skirmish_v2", image: "assets/images/maps/FoolsRoad.jpg" },
    { name: "Fool's Road", type: "TC", version: "v1", id: "FoolsRoad_TC_v1", image: "assets/images/maps/FoolsRoad.jpg" },
    
    // Goose Bay maps
    { name: "Goose Bay", type: "AAS", version: "v1", id: "GooseBay_AAS_v1", image: "assets/images/maps/GooseBay.jpg" },
    { name: "Goose Bay", type: "Invasion", version: "v1", id: "GooseBay_Invasion_v1", image: "assets/images/maps/GooseBay.jpg" },
    { name: "Goose Bay", type: "RAAS", version: "v1", id: "GooseBay_RAAS_v1", image: "assets/images/maps/GooseBay.jpg" },
    { name: "Goose Bay", type: "RAAS", version: "v2", id: "GooseBay_RAAS_v2", image: "assets/images/maps/GooseBay.jpg" },
    { name: "Goose Bay", type: "Seed", version: "v1", id: "GooseBay_Seed_v1", image: "assets/images/maps/GooseBay.jpg" },
    { name: "Goose Bay", type: "Skirmish", version: "v1", id: "GooseBay_Skirmish_v1", image: "assets/images/maps/GooseBay.jpg" },
    
    // Gorodok maps
    { name: "Gorodok", type: "AAS", version: "v1", id: "Gorodok_AAS_v1", image: "assets/images/maps/Gorodok.jpg" },
    { name: "Gorodok", type: "Destruction", version: "v1", id: "Gorodok_Destruction_v1", image: "assets/images/maps/Gorodok.jpg" },
    { name: "Gorodok", type: "Insurgency", version: "v1", id: "Gorodok_Insurgency_v1", image: "assets/images/maps/Gorodok.jpg" },
    { name: "Gorodok", type: "Invasion", version: "v1", id: "Gorodok_Invasion_v1", image: "assets/images/maps/Gorodok.jpg" },
    { name: "Gorodok", type: "Invasion", version: "v2", id: "Gorodok_Invasion_v2", image: "assets/images/maps/Gorodok.jpg" },
    { name: "Gorodok", type: "RAAS", version: "v1", id: "Gorodok_RAAS_v1", image: "assets/images/maps/Gorodok.jpg" },
    { name: "Gorodok", type: "RAAS", version: "v2", id: "Gorodok_RAAS_v2", image: "assets/images/maps/Gorodok.jpg" },
    { name: "Gorodok", type: "Skirmish", version: "v1", id: "Gorodok_Skirmish_v1", image: "assets/images/maps/Gorodok.jpg" },
    { name: "Gorodok", type: "TC", version: "v1", id: "Gorodok_TC_v1", image: "assets/images/maps/Gorodok.jpg" },
    
    // Kamdesh maps
    { name: "Kamdesh", type: "AAS", version: "v1", id: "Kamdesh_AAS_v1", image: "assets/images/maps/Kamdesh.jpg" },
    { name: "Kamdesh", type: "Insurgency", version: "v1", id: "Kamdesh_Insurgency_v1", image: "assets/images/maps/Kamdesh.jpg" },
    { name: "Kamdesh", type: "Invasion", version: "v1", id: "Kamdesh_Invasion_v1", image: "assets/images/maps/Kamdesh.jpg" },
    { name: "Kamdesh", type: "RAAS", version: "v1", id: "Kamdesh_RAAS_v1", image: "assets/images/maps/Kamdesh.jpg" },
    { name: "Kamdesh", type: "Skirmish", version: "v1", id: "Kamdesh_Skirmish_v1", image: "assets/images/maps/Kamdesh.jpg" },
    { name: "Kamdesh", type: "TC", version: "v1", id: "Kamdesh_TC_v1", image: "assets/images/maps/Kamdesh.jpg" },
    
    // Kohat maps
    { name: "Kohat", type: "AAS", version: "v1", id: "Kohat_AAS_v1", image: "assets/images/maps/Kohat.jpg" },
    { name: "Kohat", type: "Insurgency", version: "v1", id: "Kohat_Insurgency_v1", image: "assets/images/maps/Kohat.jpg" },
    { name: "Kohat", type: "Invasion", version: "v1", id: "Kohat_Invasion_v1", image: "assets/images/maps/Kohat.jpg" },
    { name: "Kohat", type: "Invasion", version: "v2", id: "Kohat_Invasion_v2", image: "assets/images/maps/Kohat.jpg" },
    { name: "Kohat", type: "RAAS", version: "v1", id: "Kohat_RAAS_v1", image: "assets/images/maps/Kohat.jpg" },
    { name: "Kohat", type: "RAAS", version: "v2", id: "Kohat_RAAS_v2", image: "assets/images/maps/Kohat.jpg" },
    { name: "Kohat", type: "Skirmish", version: "v1", id: "Kohat_Skirmish_v1", image: "assets/images/maps/Kohat.jpg" },
    { name: "Kohat", type: "TC", version: "v1", id: "Kohat_TC_v1", image: "assets/images/maps/Kohat.jpg" },
    
    // Kokan maps
    { name: "Kokan", type: "AAS", version: "v1", id: "Kokan_AAS_v1", image: "assets/images/maps/Kokan.jpg" },
    { name: "Kokan", type: "AAS", version: "v2", id: "Kokan_AAS_v2", image: "assets/images/maps/Kokan.jpg" },
    { name: "Kokan", type: "Insurgency", version: "v1", id: "Kokan_Insurgency_v1", image: "assets/images/maps/Kokan.jpg" },
    { name: "Kokan", type: "Invasion", version: "v1", id: "Kokan_Invasion_v1", image: "assets/images/maps/Kokan.jpg" },
    { name: "Kokan", type: "RAAS", version: "v1", id: "Kokan_RAAS_v1", image: "assets/images/maps/Kokan.jpg" },
    { name: "Kokan", type: "Skirmish", version: "v1", id: "Kokan_Skirmish_v1", image: "assets/images/maps/Kokan.jpg" },
    { name: "Kokan", type: "TC", version: "v1", id: "Kokan_TC_v1", image: "assets/images/maps/Kokan.jpg" },
    
    // Lashkar maps
    { name: "Lashkar", type: "Insurgency", version: "v1", id: "Lashkar_Insurgency_v1", image: "assets/images/maps/Lashkar.jpg" },
    { name: "Lashkar", type: "AAS", version: "v1", id: "Lashkar_AAS_v1", image: "assets/images/maps/Lashkar.jpg" },
    { name: "Lashkar", type: "AAS", version: "v2", id: "Lashkar_AAS_v2", image: "assets/images/maps/Lashkar.jpg" },
    { name: "Lashkar", type: "Invasion", version: "v1", id: "Lashkar_Invasion_v1", image: "assets/images/maps/Lashkar.jpg" },
    { name: "Lashkar", type: "RAAS", version: "v1", id: "Lashkar_RAAS_v1", image: "assets/images/maps/Lashkar.jpg" },
    { name: "Lashkar", type: "Skirmish", version: "v1", id: "Lashkar_Skirmish_v1", image: "assets/images/maps/Lashkar.jpg" },
    { name: "Lashkar", type: "TC", version: "v1", id: "Lashkar_TC_v1", image: "assets/images/maps/Lashkar.jpg" },
    { name: "Lashkar", type: "TC", version: "v2", id: "Lashkar_TC_v2", image: "assets/images/maps/Lashkar.jpg" },
    
    // Logar maps
    { name: "Logar", type: "RAAS", version: "v1", id: "Logar_RAAS_v1", image: "assets/images/maps/Logar.jpg" },
    { name: "Logar", type: "AAS", version: "v1", id: "Logar_AAS_v1", image: "assets/images/maps/Logar.jpg" },
    { name: "Logar", type: "Insurgency", version: "v1", id: "Logar_Insurgency_v1", image: "assets/images/maps/Logar.jpg" },
    { name: "Logar", type: "Seed", version: "v1", id: "Logar_Seed_v1", image: "assets/images/maps/Logar.jpg" },
    { name: "Logar", type: "Skirmish", version: "v1", id: "Logar_Skirmish_v1", image: "assets/images/maps/Logar.jpg" },
    { name: "Logar", type: "TC", version: "v1", id: "Logar_TC_v1", image: "assets/images/maps/Logar.jpg" },
    
    // Manicouagan maps
    { name: "Manicouagan", type: "Invasion", version: "v1", id: "Manicouagan_Invasion_v1", image: "assets/images/maps/Manicouagan.jpg" },
    { name: "Manicouagan", type: "AAS", version: "v1", id: "Manicouagan_AAS_v1", image: "assets/images/maps/Manicouagan.jpg" },
    { name: "Manicouagan", type: "AAS", version: "v2", id: "Manicouagan_AAS_v2", image: "assets/images/maps/Manicouagan.jpg" },
    { name: "Manicouagan", type: "AAS", version: "v3", id: "Manicouagan_AAS_v3", image: "assets/images/maps/Manicouagan.jpg" },
    { name: "Manicouagan", type: "Invasion", version: "v2", id: "Manicouagan_Invasion_v2", image: "assets/images/maps/Manicouagan.jpg" },
    { name: "Manicouagan", type: "RAAS", version: "v1", id: "Manicouagan_RAAS_v1", image: "assets/images/maps/Manicouagan.jpg" },
    { name: "Manicouagan", type: "RAAS", version: "v2", id: "Manicouagan_RAAS_v2", image: "assets/images/maps/Manicouagan.jpg" },
    { name: "Manicouagan", type: "Seed", version: "v1", id: "Manicouagan_Seed_v1", image: "assets/images/maps/Manicouagan.jpg" },
    { name: "Manicouagan", type: "Skirmish", version: "v1", id: "Manicouagan_Skirmish_v1", image: "assets/images/maps/Manicouagan.jpg" },
    { name: "Manicouagan", type: "Skirmish", version: "v2", id: "Manicouagan_Skirmish_v2", image: "assets/images/maps/Manicouagan.jpg" },
    { name: "Manicouagan", type: "Skirmish", version: "v3", id: "Manicouagan_Skirmish_v3", image: "assets/images/maps/Manicouagan.jpg" },
    
    // Mestia maps
    { name: "Mestia", type: "TC", version: "v1", id: "Mestia_TC_v1", image: "assets/images/maps/Mestia.jpg" },
    { name: "Mestia", type: "AAS", version: "v1", id: "Mestia_AAS_v1", image: "assets/images/maps/Mestia.jpg" },
    { name: "Mestia", type: "AAS", version: "v2", id: "Mestia_AAS_v2", image: "assets/images/maps/Mestia.jpg" },
    { name: "Mestia", type: "Invasion", version: "v1", id: "Mestia_Invasion_v1", image: "assets/images/maps/Mestia.jpg" },
    { name: "Mestia", type: "RAAS", version: "v1", id: "Mestia_RAAS_v1", image: "assets/images/maps/Mestia.jpg" },
    { name: "Mestia", type: "Skirmish", version: "v1", id: "Mestia_Skirmish_v1", image: "assets/images/maps/Mestia.jpg" },
    
    // Mutaha maps
    { name: "Mutaha", type: "AAS", version: "v1", id: "Mutaha_AAS_v1", image: "assets/images/maps/Mutaha.jpg" },
    { name: "Mutaha", type: "AAS", version: "v2", id: "Mutaha_AAS_v2", image: "assets/images/maps/Mutaha.jpg" },
    { name: "Mutaha", type: "Invasion", version: "v1", id: "Mutaha_Invasion_v1", image: "assets/images/maps/Mutaha.jpg" },
    { name: "Mutaha", type: "RAAS", version: "v1", id: "Mutaha_RAAS_v1", image: "assets/images/maps/Mutaha.jpg" },
    { name: "Mutaha", type: "RAAS", version: "v2", id: "Mutaha_RAAS_v2", image: "assets/images/maps/Mutaha.jpg" },
    { name: "Mutaha", type: "Seed", version: "v1", id: "Mutaha_Seed_v1", image: "assets/images/maps/Mutaha.jpg" },
    { name: "Mutaha", type: "Skirmish", version: "v1", id: "Mutaha_Skirmish_v1", image: "assets/images/maps/Mutaha.jpg" },
    { name: "Mutaha", type: "TC", version: "v1", id: "Mutaha_TC_v1", image: "assets/images/maps/Mutaha.jpg" },
    
    // Narva maps
    { name: "Narva", type: "RAAS", version: "v1", id: "Narva_RAAS_v1", image: "assets/images/maps/Narva.jpg" },
    { name: "Narva", type: "AAS", version: "v1", id: "Narva_AAS_v1", image: "assets/images/maps/Narva.jpg" },
    { name: "Narva", type: "AAS", version: "v2", id: "Narva_AAS_v2", image: "assets/images/maps/Narva.jpg" },
    { name: "Narva", type: "AAS", version: "v3", id: "Narva_AAS_v3", image: "assets/images/maps/Narva.jpg" },
    { name: "Narva", type: "Destruction", version: "v1", id: "Narva_Destruction_v1", image: "assets/images/maps/Narva.jpg" },
    { name: "Narva", type: "Invasion", version: "v1", id: "Narva_Invasion_v1", image: "assets/images/maps/Narva.jpg" },
    { name: "Narva", type: "Invasion", version: "v2", id: "Narva_Invasion_v2", image: "assets/images/maps/Narva.jpg" },
    { name: "Narva", type: "Skirmish", version: "v1", id: "Narva_Skirmish_v1", image: "assets/images/maps/Narva.jpg" },
    { name: "Narva", type: "TC", version: "v1", id: "Narva_TC_v1", image: "assets/images/maps/Narva.jpg" },
    
    // Pacific Proving Grounds maps
    { name: "Pacific Proving Grounds", type: "AAS", version: "v1", id: "PacificProvingGrounds_AAS_v1", image: "assets/images/maps/PacificProvingGrounds.jpg" },
    { name: "Pacific Proving Grounds", type: "Seed", version: "v1", id: "PacificProvingGrounds_Seed_v1", image: "assets/images/maps/PacificProvingGrounds.jpg" },
    
    // Skorpo maps
    { name: "Skorpo", type: "Invasion", version: "v1", id: "Skorpo_Invasion_v1", image: "assets/images/maps/Skorpo.jpg" },
    { name: "Skorpo", type: "Invasion", version: "v2", id: "Skorpo_Invasion_v2", image: "assets/images/maps/Skorpo.jpg" },
    { name: "Skorpo", type: "RAAS", version: "v1", id: "Skorpo_RAAS_v1", image: "assets/images/maps/Skorpo.jpg" },
    { name: "Skorpo", type: "Skirmish", version: "v1", id: "Skorpo_Skirmish_v1", image: "assets/images/maps/Skorpo.jpg" },
    
    // Sumari maps
    { name: "Sumari", type: "Skirmish", version: "v1", id: "Sumari_Skirmish_v1", image: "assets/images/maps/Sumari.jpg" },
    { name: "Sumari", type: "AAS", version: "v1", id: "Sumari_AAS_v1", image: "assets/images/maps/Sumari.jpg" },
    { name: "Sumari", type: "AAS", version: "v2", id: "Sumari_AAS_v2", image: "assets/images/maps/Sumari.jpg" },
    { name: "Sumari", type: "AAS", version: "v3", id: "Sumari_AAS_v3", image: "assets/images/maps/Sumari.jpg" },
    { name: "Sumari", type: "Insurgency", version: "v1", id: "Sumari_Insurgency_v1", image: "assets/images/maps/Sumari.jpg" },
    { name: "Sumari", type: "Invasion", version: "v1", id: "Sumari_Invasion_v1", image: "assets/images/maps/Sumari.jpg" },
    { name: "Sumari", type: "RAAS", version: "v1", id: "Sumari_RAAS_v1", image: "assets/images/maps/Sumari.jpg" },
    { name: "Sumari", type: "Seed", version: "v1", id: "Sumari_Seed_v1", image: "assets/images/maps/Sumari.jpg" },
    { name: "Sumari", type: "TC", version: "v1", id: "Sumari_TC_v1", image: "assets/images/maps/Sumari.jpg" },
    
    // Tallil maps
    { name: "Tallil", type: "AAS", version: "v1", id: "Tallil_AAS_v1", image: "assets/images/maps/Tallil.jpg" },
    { name: "Tallil", type: "Invasion", version: "v1", id: "Tallil_Invasion_v1", image: "assets/images/maps/Tallil.jpg" },
    { name: "Tallil", type: "RAAS", version: "v1", id: "Tallil_RAAS_v1", image: "assets/images/maps/Tallil.jpg" },
    { name: "Tallil", type: "RAAS", version: "v2", id: "Tallil_RAAS_v2", image: "assets/images/maps/Tallil.jpg" },
    { name: "Tallil", type: "Seed", version: "v1", id: "Tallil_Seed_v1", image: "assets/images/maps/Tallil.jpg" },
    { name: "Tallil", type: "Skirmish", version: "v1", id: "Tallil_Skirmish_v1", image: "assets/images/maps/Tallil.jpg" },
    { name: "Tallil", type: "Skirmish", version: "v2", id: "Tallil_Skirmish_v2", image: "assets/images/maps/Tallil.jpg" },
    { name: "Tallil", type: "Skirmish", version: "v3", id: "Tallil_Skirmish_v3", image: "assets/images/maps/Tallil.jpg" },
    { name: "Tallil", type: "TC", version: "v1", id: "Tallil_TC_v1", image: "assets/images/maps/Tallil.jpg" },
    
    // Yehorivka maps
    { name: "Yehorivka", type: "RAAS", version: "v1", id: "Yehorivka_RAAS_v1", image: "assets/images/maps/Yehorivka.jpg" },
    { name: "Yehorivka", type: "AAS", version: "v1", id: "Yehorivka_AAS_v1", image: "assets/images/maps/Yehorivka.jpg" },
    { name: "Yehorivka", type: "AAS", version: "v2", id: "Yehorivka_AAS_v2", image: "assets/images/maps/Yehorivka.jpg" },
    { name: "Yehorivka", type: "Destruction", version: "v1", id: "Yehorivka_Destruction_v1", image: "assets/images/maps/Yehorivka.jpg" },
    { name: "Yehorivka", type: "Invasion", version: "v1", id: "Yehorivka_Invasion_v1", image: "assets/images/maps/Yehorivka.jpg" },
    { name: "Yehorivka", type: "Invasion", version: "v2", id: "Yehorivka_Invasion_v2", image: "assets/images/maps/Yehorivka.jpg" },
    { name: "Yehorivka", type: "RAAS", version: "v2", id: "Yehorivka_RAAS_v2", image: "assets/images/maps/Yehorivka.jpg" },
    { name: "Yehorivka", type: "Skirmish", version: "v1", id: "Yehorivka_Skirmish_v1", image: "assets/images/maps/Yehorivka.jpg" },
    { name: "Yehorivka", type: "Skirmish", version: "v2", id: "Yehorivka_Skirmish_v2", image: "assets/images/maps/Yehorivka.jpg" },
    { name: "Yehorivka", type: "TC", version: "v1", id: "Yehorivka_TC_v1", image: "assets/images/maps/Yehorivka.jpg" },
    { name: "Yehorivka", type: "TC", version: "v2", id: "Yehorivka_TC_v2", image: "assets/images/maps/Yehorivka.jpg" },
    
    // Black Coast maps
    { name: "BlackCoast", type: "Invasion", version: "v1", id: "BlackCoast_Invasion_v1", image: "assets/images/maps/BlackCoast.jpg" },
    { name: "BlackCoast", type: "AAS", version: "v1", id: "BlackCoast_AAS_v1", image: "assets/images/maps/BlackCoast.jpg" },
    { name: "BlackCoast", type: "AAS", version: "v2", id: "BlackCoast_AAS_v2", image: "assets/images/maps/BlackCoast.jpg" },
    { name: "BlackCoast", type: "Invasion", version: "v2", id: "BlackCoast_Invasion_v2", image: "assets/images/maps/BlackCoast.jpg" },
    { name: "BlackCoast", type: "RAAS", version: "v1", id: "BlackCoast_RAAS_v1", image: "assets/images/maps/BlackCoast.jpg" },
    { name: "BlackCoast", type: "RAAS", version: "v2", id: "BlackCoast_RAAS_v2", image: "assets/images/maps/BlackCoast.jpg" },
    { name: "BlackCoast", type: "Seed", version: "v1", id: "BlackCoast_Seed_v1", image: "assets/images/maps/BlackCoast.jpg" },
    { name: "BlackCoast", type: "Skirmish", version: "v1", id: "BlackCoast_Skirmish_v1", image: "assets/images/maps/BlackCoast.jpg" },
    
    // Harju maps
    { name: "Harju", type: "AAS", version: "v1", id: "Harju_AAS_v1", image: "assets/images/maps/Harju.jpg" },
    { name: "Harju", type: "AAS", version: "v2", id: "Harju_AAS_v2", image: "assets/images/maps/Harju.jpg" },
    { name: "Harju", type: "AAS", version: "v3", id: "Harju_AAS_v3", image: "assets/images/maps/Harju.jpg" },
    { name: "Harju", type: "Invasion", version: "v1", id: "Harju_Invasion_v1", image: "assets/images/maps/Harju.jpg" },
    { name: "Harju", type: "Invasion", version: "v2", id: "Harju_Invasion_v2", image: "assets/images/maps/Harju.jpg" },
    { name: "Harju", type: "Invasion", version: "v3", id: "Harju_Invasion_v3", image: "assets/images/maps/Harju.jpg" },
    { name: "Harju", type: "RAAS", version: "v1", id: "Harju_RAAS_v1", image: "assets/images/maps/Harju.jpg" },
    { name: "Harju", type: "RAAS", version: "v2", id: "Harju_RAAS_v2", image: "assets/images/maps/Harju.jpg" },
    { name: "Harju", type: "Seed", version: "v1", id: "Harju_Seed_v1", image: "assets/images/maps/Harju.jpg" },
    { name: "Harju", type: "Skirmish", version: "v1", id: "Harju_Skirmish_v1", image: "assets/images/maps/Harju.jpg" },
    { name: "Harju", type: "Skirmish", version: "v2", id: "Harju_Skirmish_v2", image: "assets/images/maps/Harju.jpg" },
    { name: "Harju", type: "TC", version: "v1", id: "Harju_TC_v1", image: "assets/images/maps/Harju.jpg" },
    
    // Sanxian maps
    { name: "Sanxian", type: "RAAS", version: "v1", id: "Sanxian_RAAS_v1", image: "assets/images/maps/Sanxian.jpg" },
    { name: "Sanxian", type: "AAS", version: "v1", id: "Sanxian_AAS_v1", image: "assets/images/maps/Sanxian.jpg" },
    { name: "Sanxian", type: "AAS", version: "v2", id: "Sanxian_AAS_v2", image: "assets/images/maps/Sanxian.jpg" },
    { name: "Sanxian", type: "AAS", version: "v3", id: "Sanxian_AAS_v3", image: "assets/images/maps/Sanxian.jpg" },
    { name: "Sanxian", type: "Invasion", version: "v1", id: "Sanxian_Invasion_v1", image: "assets/images/maps/Sanxian.jpg" },
    { name: "Sanxian", type: "Invasion", version: "v2", id: "Sanxian_Invasion_v2", image: "assets/images/maps/Sanxian.jpg" },
    { name: "Sanxian", type: "RAAS", version: "v2", id: "Sanxian_RAAS_v2", image: "assets/images/maps/Sanxian.jpg" },
    { name: "Sanxian", type: "Seed", version: "v1", id: "Sanxian_Seed_v1", image: "assets/images/maps/Sanxian.jpg" },
    { name: "Sanxian", type: "Skirmish", version: "v1", id: "Sanxian_Skirmish_v1", image: "assets/images/maps/Sanxian.jpg" },
  ];