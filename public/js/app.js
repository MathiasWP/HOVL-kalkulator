const storeList = document.querySelector(".grocery-store"),
  razorList = document.querySelector(".razor-model"),
  intervalList = document.querySelector(".interval-select-list"),
  timeChosen = document.querySelector(".time_chosen"),
  noticeScreen = document.querySelector(".calculator_notice"),
  okayBtn = document.querySelector(".calculator_notice-btn"),
  calculatorMain = document.querySelector(".calculator");

let razorModels = {},
  lastList = {};

timeChosen.addEventListener("input", () => {
  timeChosen.classList.add("reset");
});

storeList.addEventListener("change", () => {
  if (!storeList.classList.contains("activate")) {
    storeList.removeChild(storeList.children[0]);
    storeList.classList.add("activate");
  }
  setPrices(storeList.value);
});

razorList.addEventListener("change", () => {
  if (!razorList.classList.contains("activate")) {
    razorList.removeChild(razorList.children[0]);
    razorList.classList.add("activate");
  }
});

intervalList.addEventListener("change", () => {
  intervalList.classList.add("activate");
});

okayBtn.addEventListener("click", () => {
  noticeScreen.style.display = "none";
  calculatorMain.style.display = "flex";
});

const setStartPrices = () => {
  // Hvis det ikke fantes en startpakke til påfyllspakke-prisene som ble samlet inn, er startpakke-pris utregnet ved å ta prisen til påfyllspakken og legge til prisen for 1 håndtak av nærmeste modell.
  // I arrayet er første integer startpakkepris og andre integer påfyllspakkepris.
  // razorModels inneholder alle gjennomsnittsprisene
  razorModels = {
    Venus_Extra_Smooth: [178.44, 112.3],
    Mach_3: [12.14, 23.64],
    Venus_Divine: [53.7, 62.87],
    Venus_Smooth: [54.33 + 66.14, 54.33],
    Mach_3_Turbo: [-0.13, 22.77],
    Venus_Comfortglide_Breeze: [98.5, 57.98],
    Venus_Swirl: [86.33 + 87.33, 86.33],
    Fusion_5_Power: [56 + 110.57, 56],
    Fusion_5_Proglide: [205.03, 83.45],
    Fusion_5: [45.46, 44.98],
    Fusion_5_Proshield: [116.25, 89],
    Venus_Embrace: [45 + 66.14, 45],
    Venus_Olay: [79.67 + 66.14, 79.67],
    Venus_Comfortglide_Sugarberry: [79.67 + 66.14, 79.67],
    Fusion_5_Proglide_Power: [205.3, 98.32],
    Venus_Breeze: [78.93 + 30.5, 78.93],
    Venus_Swirl_Extra_Smooth: [283.12, 120],
    Skinguard: [69.59, 95.23]
  };
};
setStartPrices();

for (let model in razorModels) {
  if (razorModels.hasOwnProperty(model)) {
    let opt = document.createElement("option");
    opt.value = model;
    opt.innerHTML = model.replace(/_/g, " ");
    razorList.appendChild(opt);
  }
}

const setPrices = chosen => {
  // Resette prisene etter hvert valg før de endres, ettersom forskjellige butikker har forskjellige varer.
  setStartPrices();

  // Setter egne verdiene til produktene, ettersom razorModels har kun gjennomsnittspriser.
  switch (chosen) {
    case "Bunnpris":
      razorModels.Venus_Breeze[1] = 110;
      razorModels.Skinguard = [99, 119];
      razorModels.Venus_Divine[1] = 77.8;
      razorModels.Fusion_5_Proglide_Power[1] = 166;
      razorModels.Fusion_5 = [64.85, 70.9];
      razorModels.Mach_3 = [44.67, 60.33];
      break;
    case "BunnprisGourmet":
      razorModels.Skinguard[0] = 87.11;
      razorModels.Mach_3[0] = 76.27;
      razorModels.Fusion_5[0] = 51.89;
      razorModels.Fusion_5_Proglide_Power[0] = 207.99;
      razorModels.Venus_Divine[0] = 50.93;
      razorModels.Venus_Swirl[0] = 179;
      break;
    case "CoopExtra":
      razorModels.Mach_3[0] = 2.22;
      razorModels.Fusion_5[0] = 21.99;
      razorModels.Fusion_5_Proglide_Power[0] = 196.89;
      razorModels.Skinguard[0] = 57.11;
      razorModels.Venus_Divine[0] = 40.93;
      break;
    case "CoopMega":
      razorModels.Fusion_5[0] = 35.89;
      razorModels.Venus_Breeze[0] = 147.87;
      razorModels.Venus_Divine[0] = 54.83;
      razorModels.Venus_Extra_Smooth[0] = 202.38;
      razorModels.Fusion_5_Proglide_Power[0] = 226.89;
      razorModels.Fusion_5_Proshield[0] = 114.9;
      razorModels.Venus_Embrace[0] = 144.9;
      razorModels.Skinguard[0] = 71.01;
      razorModels.Mach_3[0] = 14.22;
      break;
    case "CoopPrix":
      razorModels.Mach_3 = [27.87, 60.93];
      razorModels.Fusion_5_Proglide[1] = 116.9;
      razorModels.Fusion_5_Proglide_Power = [243.33, 146.9];
      razorModels.Fusion_5[0] = 30.89;
      razorModels.Skinguard = [58.85, 80.9];
      razorModels.Venus_Extra_Smooth = [200.83, 116.9];
      razorModels.Venus_Divine = [53.35, 73.9];
      razorModels.Venus_Breeze[1] = 68.9;
      break;
    case "Kiwi":
      razorModels.Fusion_5[0] = 21.99;
      razorModels.Skinguard = [44.5, 70];
      razorModels.Fusion_5_Proglide_Power[1] = 100;
      razorModels.Mach_3[1] = 19.6;
      razorModels.Venus_Breeze[1] = 57.9;
      razorModels.Venus_Divine[1] = 64;
      razorModels.Venus_Smooth[1] = 100;
      break;
    case "Meny":
      razorModels.Venus_Comfortglide_Breeze = [117.5, 76];
      razorModels.Venus_Extra_Smooth = [116.75, 150];
      razorModels.Venus_Swirl_Extra_Smooth = [283, 199.67];
      razorModels.Fusion_5_Proglide_Power = [173.63, 36.5];
      razorModels.Mach_3[0] = 21.32;
      razorModels.Skinguard = [76, 111];
      razorModels.Venus_Divine = [59, 5979];
      razorModels.Fusion_5[1] = 50;
      razorModels.Mach_3_Turbo[1] = 33.67;
      razorModels.Fusion_5_Proshield[1] = 112;
      break;
    case "Rema1000":
      razorModels.Fusion_5_Proglide_Power = [198.15, 100];
      razorModels.Mach_3 = [15.9, 51];
      razorModels.Fusion_5 = [24.5, 50];
      razorModels.Venus_Extra_Smooth[1] = 100;
      razorModels.Venus_Divine[1] = 64;
      razorModels.Mach_3_Turbo[1] = 17.1;
      razorModels.Venus_Comfortglide_Breeze[1] = 57.9;
      break;
    case "ClasOhlson":
      razorModels.Venus_Smooth[1] = 54.3;
      razorModels.Fusion_5[1] = 34.3;
      razorModels.Mach_3[1] = 8.47;
      break;
    case "Normal":
      razorModels.Fusion_5 = [50, 30];
      razorModels.Venus_Extra_Smooth = [116.75, 70];
      razorModels.Fusion_5_Proglide = [50, 50];
      (razorModels.Mach_3 = [50, 5]),
        (razorModels.Venus_Comfortglide_Breeze = [79.5, 60]);
      razorModels.Mach_3_Turbo = [-0.13, 15.5];
      razorModels.Skinguard[0] = 70;
      razorModels.Fusion_5_Proshield = [116.25, 56];
      razorModels.Venus_Divine = [48.75, 36];
      razorModels.Venus_Swirl_Extra_Smooth[0] = 139.25;
      break;
  }
  lastList = razorModels;
};

const calcBtn = document.querySelector(".calculate_for_me"),
  calcResult = document.querySelector(".calculation_result");

calcBtn.addEventListener("click", () => {
  calcResult.style.visibility = "visible";
  calcResult.innerHTML = "";

  if (!storeList.classList.contains("activate")) {
    storeList.style.border = "2px solid red";
    return calcResult.insertAdjacentHTML("beforeend", "-Velg butikk først<br>");
  }
  if (!razorList.classList.contains("activate")) {
    razorList.style.border = "2px solid red";

    return calcResult.insertAdjacentHTML(
      "beforeend",
      "- Velg barberhøvel først<br>"
    );
  }
  if (timeChosen.value.length === 0) {
    timeChosen.classList.remove("reset");
    timeChosen.style.border = "2px solid red";

    return calcResult.insertAdjacentHTML(
      "beforeend",
      "- Skriv inn antall måneder først<br>"
    );
  }
  if (parseInt(intervalList.value) > parseInt(timeChosen.value)) {
    return calcResult.insertAdjacentHTML(
      "beforeend",
      "- Antall måneder kan ikke være mindre enn intervallet<br>"
    );
  }

  intervalList.classList.add("activate");

  const numOfPurchases = ~~(
    parseInt(timeChosen.value) / parseInt(intervalList.value)
  );

  const numOfRefills = numOfPurchases - 1;

  let prices = lastList[`${razorList.value}`];

  if (prices) {
    let savedMoney = Math.round(prices[0] + prices[1] * numOfRefills);
    calcResult.innerHTML = `<h3>I løpet av ${
      timeChosen.value
    } mnd hadde du kjøpt 1 startpakke, ${numOfRefills} ${
      numOfRefills === 1 ? "påfyllspakke" : "påfyllspakker"
    }, og kunne ha spart <b>kr ${savedMoney},-</b> hos <span class="hovl">HØVL</span></h3>`;
  }
});
