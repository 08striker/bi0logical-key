let stage = 1;
let kingdom = "none";
let clss = "none";
let phylum = "none";
let order = "none";
let repeat = false;
let fix = true;
const p = document.querySelector(".p");
const yes = document.querySelector(".btn-yes");
const no = document.querySelector(".btn-no");
yes.addEventListener("click", function () {
  if (stage === 1) {
    p.textContent =
      "does it produce it's own food?(example: dogs, butterflies and humans can't make their own food but trees and most plants can)";
    stage = 3;
    return;
  }
  if (stage === 2) {
    stage = "done";
    kingdom = "Protista";
  }
  if (stage === 3) {
    p.textContent = "does it's leaves have parallel veins";
    stage = 4;
    kingdom = "Plantae";
    return;
  }
  if (stage === 4) {
    stage = "done";
    phylum = "Anthophyta";
    clss = "Monocotyledoneae";
  }
  if (stage === 5) {
    p.textContent = "is it a consumer?";
    stage = 6;
    return;
  }
  if (stage === 6) {
    p.textContent = "does it have a back bone";
    kingdom = "Animalia";
    stage = 22;
    return;
  }
  if (stage === 7) {
  }
  if (stage === 8) {
    p.textContent = "is it's body soft and transparent with tentacles?";
    stage = "8";
    return;
  }
  if (stage === "8") {
    phylum = "Cnidaria";
    stage = "done";
  }
  if (stage === 9) {
  }
  if (stage === 10) {
  }
  if (stage === 11) {
    clss = "Gastropoda";
    stage = "done";
  }
  if (stage === 12) {
    p.textContent = "does it have a coiled shell";
    phylum = "Mollusca";
    stage = 11;
  }
  if (stage === 13) {
    phylum = "Annelida";
    stage = "done";
  }
  if (stage === "13") {
    clss = "Gastropoda";
    stage = "done";
  }
  if (stage === 14) {
    p.textContent = "Does it have more than three pairs of walking legs?";
    phylum = "Arthopoda";
    stage = 15;
    return;
  }
  if (stage === 15) {
    p.textContent =
      "Does it have four pairs of walking legs, body in two divisons?";
    stage = "15";
  }
  if (stage === "15") {
    clss = "Arachnida";
    stage = "done";
  }
  if (stage === 16) {
    p.textContent = "Are All of it's wings transparent?";
    stage = 18;
    return;
  }
  if (stage === 17) {
  }
  if (stage === 18) {
    p.textContent = "is it capable of stinging from the back of it's body?";
    stage = "18";
    return;
  }
  if (stage === "18") {
    order = "Hymenoptera";
    stage = "done";
  }
  if (stage === 19) {
  }
  if (stage === 20) {
    order = "Lepidoptera";
    stage = "done";
  }
  if (stage === "20") {
    order = "Coleoptera";
    stage = "done";
  }
  if (stage === 21) {
    order = "Siphonaptera";
    stage = "done";
  }
  if (stage === 22) {
    p.textContent = "does it have jaws or a beak?";
    phylum = "chordata";
    stage = 23;
    return;
  }
  if (stage === 23) {
    p.textContent = "is it's skin covered with scales?";
    stage = 24;
    return;
  }
  if (stage === 24) {
    p.textContent = "does it have fins and gills?";
    stage = 25;
    return;
  }
  if (stage === 25) {
    p.textContent = "is it's mouth on the lower part of it's body?";
    stage = "25";
    return;
  }
  if (stage === "25") {
    clss = "Chondrichthyes";
    stage = "done";
  }
  if (stage === 26) {
  }
  if (stage === 27) {
    order = "Caudata";
    stage = "done";
  }
  if (stage === 28) {
    clss = "Amphibia";
    p.textContent = "does it have a tail?";
    stage = 27;
    return;
  }
  if (stage === 29) {
    clss = "Aves";
    stage = "done";
  }
  if (stage === 30) {
    p.textContent = "does it have an odd number of toes?";
    stage = "30";
    return;
  }
  if (stage === "30") {
    order = "Perissodactyla";
    stage = "done";
  }
  if (stage === 31) {
    p.textContent = "does it have teeth?";
    stage = "31";
    return;
  }
  if (stage === "31") {
    order = "Carnivora";
    stage = "done";
  }
  if (stage === 32) {
  }
  if (stage === 33) {
    p.textContent = "Does it have legs for crawing";
    stage = 34;
    return;
  }
  if (stage === 34) {
    order = "Rodentia";
    stage = "done";
  }
  if (stage === 35) {
    order = "Probosciedea";
    stage = "done";
  }
  if (stage === "done") {
    p.textContent = `kingdom: ${kingdom}, Phylum: ${phylum}, class: ${clss}, order: ${order}`;
  }
});
no.addEventListener("click", function () {
  if (stage === 1) {
    p.textContent =
      "does it's cell have distinct, membrane-bounded organelles?";
    stage = 2;
    return;
  }
  if (stage === 2) {
    stage = "done";
    kingdom = "Monera";
  }
  if (stage === 3) {
    stage = 5;
  }
  if (stage === 4) {
    stage = "done";
    phylum = "Anthophyta";
    clss = "Dicotyledoneae";
  }

  if (stage === 5) {
    p.textContent = "is it a consumer?";
    stage = 6;
    return;
  }
  if (stage === 6) {
    stage = "done";
    kingdom = "Fungi";
  }
  if (stage === 7) {
  }
  if (stage === 8) {
    p.textContent =
      "does it have external plates that support and protoect it?";
    stage = 14;
    return;
  }
  if (stage === "8") {
    phylum = "Echinodermata";
    stage = "done";
  }
  if (stage === 9) {
  }
  if (stage === 10) {
  }
  if (stage === 11) {
    clss = "Bivalvia";
    stage = "done";
  }
  if (stage === 12) {
    p.textContent =
      "is it's body wormlike without tentacled recepters on it's head?";
    stage = 13;
    return;
  }
  if (stage === 13) {
    phylum = "Mollusca";
    p.textContent =
      "is it's body wormlike with tentacled recepters on it's head?";
    stage = "13";
  }
  if (stage === "13") {
    clss = "Cephalopoda";
    stage = "done";
  }
  if (stage === 14) {
    p.textContent = "does it have an external shell?";
    stage = 12;
    return;
  }
  if (stage === 15) {
    p.textContent = "does it have wings?";
    clss = "Insecta";
    stage = 16;
    return;
  }
  if (stage === "15") {
    clss = "Malacostraca";
    stage = "done";
  }
  if (stage === 16) {
    p.textContent =
      "does it have piercing, sucking mouth parts for obtaining blood?";
    stage = 21;
    return;
  }
  if (stage === 17) {
  }
  if (stage === 18) {
    p.textContent = "Does it have large sometimes colorful wings?";
    stage = 20;
    return;
  }
  if (stage === "18") {
    order = "Diptera";
    stage = "done";
  }
  if (stage === 19) {
  }
  if (stage === 20) {
    p.textContent =
      "Does it have a pair of hard wings covering a pair of folded transparent wings?";
    stage = "20";
    return;
  }
  if (stage === "20") {
    order = "Orthoptera";
    stage = "done";
  }
  if (stage === 21) {
    order = "Hymenoptera";
    stage = "done";
  }
  if (stage === 22) {
    p.textContent =
      "Can it be externally divided into equal halves(like a pi), but it has no distinguishable right and left sides?";
    stage = 8;
    return;
  }
  if (stage === 23) {
    clss = "Agnatha";
    stage = "done";
  }
  if (stage === 24) {
    p.textContent =
      "does it have no scales, hair and feathers on it's body and is it's skin slimy?";
    stage = 28;
    return;
  }
  if (stage === 25) {
    clss = "Reptilia";
    stage = "done";
  }
  if (stage === "25") {
    clss = "Osteichthyes";
    stage = "done";
  }
  if (stage === 26) {
  }
  if (stage === 27) {
    order = "Anura";
    stage = "done";
  }
  if (stage === 28) {
    p.textContent = "does it have feathers on it's body?";
    stage = 29;
    return;
  }
  if (stage === 29) {
    p.textContent = "does it have hooves?";
    stage = 30;
    clss = "Mammalia";
    return;
  }
  if (stage === 30) {
    p.textContent = "is it a carnivore?";
    stage = 31;
    return;
  }
  if (stage === "30") {
    order = "Ariodactyla";
    stage = "done";
  }
  if (stage === 31) {
    p.textContent = "does it have enlarged front teeth for gnawing";
    stage = 33;
    return;
  }
  if (stage === "31") {
    order = "Insectivora";
  }
  if (stage === 32) {
  }
  if (stage === 33) {
    p.textContent =
      "does it have an enlarged trunk used for breathing and grasping?";
    stage = 35;
    return;
  }
  if (stage === 34) {
    order = "Lagomorpha";
    stage = "done";
  }
  if (stage === 35) {
    order = "Primates";
    stage = "done";
  }
  if (stage === "done") {
    p.textContent = `kingdom: ${kingdom}, Phylum: ${phylum}, class: ${clss}, order: ${order}`;
  }
});
