let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let vSuma: number[] = new Array(6);
let posicion: number,
  i: number = 0;

for (posicion = 0; posicion < 6; posicion++) {
  v1[posicion] = Number(
    prompt("Primer arreglo: Ingresar el elemento " + (posicion + 1))
  );
}
for (posicion = 0; posicion < 6; posicion++) {
  v2[posicion] = Number(
    prompt("Segundo arreglo: Ingresar el elemento " + (posicion + 1))
  );
}
while (i < 6) {
  vSuma[i] = v1[i] + v2[i];
  console.log(
    "v1[" + v1[i] + "] + V2[" + v2[i] + "] = vSuma[" + vSuma[i] + "]"
  );
  i++;
}
