function ajuste(array) {
    const arrayOrdenado = array.sort((a, b) => {
      if (a[1] !== b[1]) {
        return b[1] - a[1]; // Ordenar por pontos (maior para menor)
      }
  
      if (a[3] !== b[3]) {
        return b[3] - a[3]; // Ordenar por vitórias (maior para menor)
      }
  
      if (a[6] !== b[6]) {
        return b[6] - a[6]; // Ordenar por saldo de gols (maior para menor)
      }
  
      return b[7] - a[7]; // Ordenar por gols pró (maior para menor)
    });
  
    return arrayOrdenado;
  }
  

// Grupo A
var time1a = ['Cobresal.png', 'Cobresal', 0, 0, 0, 0, 0, 0, 0, 0];
var time2a = ['Atlético Mineiro.png', 'Atlético Mineiro', 0, 0, 0, 0, 0, 0, 0, 0];
var time3a = ['San Lorenzo.png', 'San Lorenzo', 0, 0, 0, 0, 0, 0, 0, 0];
var time4a = ['Alianza Petroleira.png', 'Alianza Petroleira', 0, 0, 0, 0, 0, 0, 0, 0];

// Grupo B
var time1b = ['Libertad.png', 'Libertad', 0, 0, 0, 0, 0, 0, 0, 0];
var time2b = ['Alianza Lima.png', 'Alianza Lima', 0, 0, 0, 0, 0, 0, 0, 0];
var time3b = ['Defensa y Justicia.png', 'Defensa y Justicia', 0, 0, 0, 0, 0, 0, 0, 0];
var time4b = ['Flamengo.png', 'Flamengo', 0, 0, 0, 0, 0, 0, 0, 0];

// Grupo C
var time1c = ['Cuzeiro.png', 'Cuzeiro', 0, 0, 0, 0, 0, 0, 0, 0];
var time2c = ['Huachipato.png', 'Huachipato', 0, 0, 0, 0, 0, 0, 0, 0];
var time3c = ['São Paulo.png', 'São Paulo', 0, 0, 0, 0, 0, 0, 0, 0];
var time4c = ['Rosário Central.png', 'Rosário Central', 0, 0, 0, 0, 0, 0, 0, 0];

// Grupo D
var time1d = ['Athletico Paranaense.png', 'Athletico Paranaense', 0, 0, 0, 0, 0, 0, 0, 0];
var time2d = ['Talleres.png', 'Talleres', 0, 0, 0, 0, 0, 0, 0, 0];
var time3d = ['Academia Puerto Cabello.png', 'Academia Puerto Cabello', 0, 0, 0, 0, 0, 0, 0, 0];
var time4d = ['The Strongest.png', 'The Strongest', 0, 0, 0, 0, 0, 0, 0, 0];

// Grupo E
var time1e = ['Nacional Potosí.png', 'Nacional Potosí', 0, 0, 0, 0, 0, 0, 0, 0];
var time2e = ['Cerro Porteño.png', 'Cerro Porteño', 0, 0, 0, 0, 0, 0, 0, 0];
var time3e = ['River Plate.png', 'River Plate', 0, 0, 0, 0, 0, 0, 0, 0];
var time4e = ['Botafogo.png', 'Botafogo', 0, 0, 0, 0, 0, 0, 0, 0];

// Grupo F
var time1f = ['Millonarios.png', 'Millonarios', 0, 0, 0, 0, 0, 0, 0, 0];
var time2f = ['Barcelona de Guayaquil.png', 'Barcelona de Guayaquil', 0, 0, 0, 0, 0, 0, 0, 0];
var time3f = ['Estudiantes.png', 'Estudiantes', 0, 0, 0, 0, 0, 0, 0, 0];
var time4f = ['Grêmio.png', 'Grêmio', 0, 0, 0, 0, 0, 0, 0, 0];

// Grupo G
var time1g = ['Sporting Cristal.png', 'Sporting Cristal', 0, 0, 0, 0, 0, 0, 0, 0];
var time2g = ['Independiente del Valle.png', 'Independiente del Valle', 0, 0, 0, 0, 0, 0, 0, 0];
var time3g = ['América Mineiro.png', 'América Mineiro', 0, 0, 0, 0, 0, 0, 0, 0];
var time4g = ['Liverpool.png', 'Liverpool', 0, 0, 0, 0, 0, 0, 0, 0];

// Grupo H
var time1h = ['Palmeiras.png', 'Palmeiras', 0, 0, 0, 0, 0, 0, 0, 0];
var time2h = ['La Luz Fútbol Club.png', 'La Luz Fútbol Club', 0, 0, 0, 0, 0, 0, 0, 0];
var time3h = ['Deportivo Táchira.png', 'Deportivo Táchira', 0, 0, 0, 0, 0, 0, 0, 0];
var time4h = ['El Nacional.png', 'El Nacional', 0, 0, 0, 0, 0, 0, 0, 0];

// CRIANDO TIME 1 A

var time1a_img = document.querySelector("#time1a_img")
time1a_img.setAttribute("src", time1a[0])

var time1a_nome = document.querySelector("#time1a_nome")
time1a_nome.appendChild(document.createTextNode(" " + time1a[1].toUpperCase()))

var time1a_P = document.querySelector("#time1a_P")
time1a_P.appendChild(document.createTextNode(0))

var time1a_J = document.querySelector("#time1a_J")
time1a_J.appendChild(document.createTextNode(0))

var time1a_V = document.querySelector("#time1a_V")
time1a_V.appendChild(document.createTextNode(0))

var time1a_E = document.querySelector("#time1a_E")
time1a_E.appendChild(document.createTextNode(0))

var time1a_D = document.querySelector("#time1a_D")
time1a_D.appendChild(document.createTextNode(0))

var time1a_S = document.querySelector("#time1a_S")
time1a_S.appendChild(document.createTextNode(0))

var time1a_GP = document.querySelector("#time1a_GP")
time1a_GP.appendChild(document.createTextNode(0))

var time1a_GC = document.querySelector("#time1a_GC")
time1a_GC.appendChild(document.createTextNode(0))

// CRIANDO TIME 2 A

var time2a_img = document.querySelector("#time2a_img");
time2a_img.setAttribute("src", time2a[0]);

var time2a_nome = document.querySelector("#time2a_nome");
time2a_nome.appendChild(document.createTextNode(" " + time2a[1].toUpperCase()));

var time2a_P = document.querySelector("#time2a_P");
time2a_P.appendChild(document.createTextNode(0));

var time2a_J = document.querySelector("#time2a_J");
time2a_J.appendChild(document.createTextNode(0));

var time2a_V = document.querySelector("#time2a_V");
time2a_V.appendChild(document.createTextNode(0));

var time2a_E = document.querySelector("#time2a_E");
time2a_E.appendChild(document.createTextNode(0));

var time2a_D = document.querySelector("#time2a_D");
time2a_D.appendChild(document.createTextNode(0));

var time2a_S = document.querySelector("#time2a_S");
time2a_S.appendChild(document.createTextNode(0));

var time2a_GP = document.querySelector("#time2a_GP");
time2a_GP.appendChild(document.createTextNode(0));

var time2a_GC = document.querySelector("#time2a_GC");
time2a_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 3 A

var time3a_img = document.querySelector("#time3a_img");
time3a_img.setAttribute("src", time3a[0]);

var time3a_nome = document.querySelector("#time3a_nome");
time3a_nome.appendChild(document.createTextNode(" " + time3a[1].toUpperCase()));

var time3a_P = document.querySelector("#time3a_P");
time3a_P.appendChild(document.createTextNode(0));

var time3a_J = document.querySelector("#time3a_J");
time3a_J.appendChild(document.createTextNode(0));

var time3a_V = document.querySelector("#time3a_V");
time3a_V.appendChild(document.createTextNode(0));

var time3a_E = document.querySelector("#time3a_E");
time3a_E.appendChild(document.createTextNode(0));

var time3a_D = document.querySelector("#time3a_D");
time3a_D.appendChild(document.createTextNode(0));

var time3a_S = document.querySelector("#time3a_S");
time3a_S.appendChild(document.createTextNode(0));

var time3a_GP = document.querySelector("#time3a_GP");
time3a_GP.appendChild(document.createTextNode(0));

var time3a_GC = document.querySelector("#time3a_GC");
time3a_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 4 A

var time4a_img = document.querySelector("#time4a_img");
time4a_img.setAttribute("src", time4a[0]);

var time4a_nome = document.querySelector("#time4a_nome");
time4a_nome.appendChild(document.createTextNode(" " + time4a[1].toUpperCase()));

var time4a_P = document.querySelector("#time4a_P");
time4a_P.appendChild(document.createTextNode(0));

var time4a_J = document.querySelector("#time4a_J");
time4a_J.appendChild(document.createTextNode(0));

var time4a_V = document.querySelector("#time4a_V");
time4a_V.appendChild(document.createTextNode(0));

var time4a_E = document.querySelector("#time4a_E");
time4a_E.appendChild(document.createTextNode(0));

var time4a_D = document.querySelector("#time4a_D");
time4a_D.appendChild(document.createTextNode(0));

var time4a_S = document.querySelector("#time4a_S");
time4a_S.appendChild(document.createTextNode(0));

var time4a_GP = document.querySelector("#time4a_GP");
time4a_GP.appendChild(document.createTextNode(0));

var time4a_GC = document.querySelector("#time4a_GC");
time4a_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 1 B

var time1b_img = document.querySelector("#time1b_img");
time1b_img.setAttribute("src", time1b[0]);

var time1b_nome = document.querySelector("#time1b_nome");
time1b_nome.appendChild(document.createTextNode(" " + time1b[1].toUpperCase()));

var time1b_P = document.querySelector("#time1b_P");
time1b_P.appendChild(document.createTextNode(0));

var time1b_J = document.querySelector("#time1b_J");
time1b_J.appendChild(document.createTextNode(0));

var time1b_V = document.querySelector("#time1b_V");
time1b_V.appendChild(document.createTextNode(0));

var time1b_E = document.querySelector("#time1b_E");
time1b_E.appendChild(document.createTextNode(0));

var time1b_D = document.querySelector("#time1b_D");
time1b_D.appendChild(document.createTextNode(0));

var time1b_S = document.querySelector("#time1b_S");
time1b_S.appendChild(document.createTextNode(0));

var time1b_GP = document.querySelector("#time1b_GP");
time1b_GP.appendChild(document.createTextNode(0));

var time1b_GC = document.querySelector("#time1b_GC");
time1b_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 2 B

var time2b_img = document.querySelector("#time2b_img");
time2b_img.setAttribute("src", time2b[0]);

var time2b_nome = document.querySelector("#time2b_nome");
time2b_nome.appendChild(document.createTextNode(" " + time2b[1].toUpperCase()));

var time2b_P = document.querySelector("#time2b_P");
time2b_P.appendChild(document.createTextNode(0));

var time2b_J = document.querySelector("#time2b_J");
time2b_J.appendChild(document.createTextNode(0));

var time2b_V = document.querySelector("#time2b_V");
time2b_V.appendChild(document.createTextNode(0));

var time2b_E = document.querySelector("#time2b_E");
time2b_E.appendChild(document.createTextNode(0));

var time2b_D = document.querySelector("#time2b_D");
time2b_D.appendChild(document.createTextNode(0));

var time2b_S = document.querySelector("#time2b_S");
time2b_S.appendChild(document.createTextNode(0));

var time2b_GP = document.querySelector("#time2b_GP");
time2b_GP.appendChild(document.createTextNode(0));

var time2b_GC = document.querySelector("#time2b_GC");
time2b_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 3 B

var time3b_img = document.querySelector("#time3b_img");
time3b_img.setAttribute("src", time3b[0]);

var time3b_nome = document.querySelector("#time3b_nome");
time3b_nome.appendChild(document.createTextNode(" " + time3b[1].toUpperCase()));

var time3b_P = document.querySelector("#time3b_P");
time3b_P.appendChild(document.createTextNode(0));

var time3b_J = document.querySelector("#time3b_J");
time3b_J.appendChild(document.createTextNode(0));

var time3b_V = document.querySelector("#time3b_V");
time3b_V.appendChild(document.createTextNode(0));

var time3b_E = document.querySelector("#time3b_E");
time3b_E.appendChild(document.createTextNode(0));

var time3b_D = document.querySelector("#time3b_D");
time3b_D.appendChild(document.createTextNode(0));

var time3b_S = document.querySelector("#time3b_S");
time3b_S.appendChild(document.createTextNode(0));

var time3b_GP = document.querySelector("#time3b_GP");
time3b_GP.appendChild(document.createTextNode(0));

var time3b_GC = document.querySelector("#time3b_GC");
time3b_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 4 B

var time4b_img = document.querySelector("#time4b_img");
time4b_img.setAttribute("src", time4b[0]);

var time4b_nome = document.querySelector("#time4b_nome");
time4b_nome.appendChild(document.createTextNode(" " + time4b[1].toUpperCase()));

var time4b_P = document.querySelector("#time4b_P");
time4b_P.appendChild(document.createTextNode(0));

var time4b_J = document.querySelector("#time4b_J");
time4b_J.appendChild(document.createTextNode(0));

var time4b_V = document.querySelector("#time4b_V");
time4b_V.appendChild(document.createTextNode(0));

var time4b_E = document.querySelector("#time4b_E");
time4b_E.appendChild(document.createTextNode(0));

var time4b_D = document.querySelector("#time4b_D");
time4b_D.appendChild(document.createTextNode(0));

var time4b_S = document.querySelector("#time4b_S");
time4b_S.appendChild(document.createTextNode(0));

var time4b_GP = document.querySelector("#time4b_GP");
time4b_GP.appendChild(document.createTextNode(0));

var time4b_GC = document.querySelector("#time4b_GC");
time4b_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 1 C

var time1c_img = document.querySelector("#time1c_img");
time1c_img.setAttribute("src", time1c[0]);

var time1c_nome = document.querySelector("#time1c_nome");
time1c_nome.appendChild(document.createTextNode(" " + time1c[1].toUpperCase()));

var time1c_P = document.querySelector("#time1c_P");
time1c_P.appendChild(document.createTextNode(0));

var time1c_J = document.querySelector("#time1c_J");
time1c_J.appendChild(document.createTextNode(0));

var time1c_V = document.querySelector("#time1c_V");
time1c_V.appendChild(document.createTextNode(0));

var time1c_E = document.querySelector("#time1c_E");
time1c_E.appendChild(document.createTextNode(0));

var time1c_D = document.querySelector("#time1c_D");
time1c_D.appendChild(document.createTextNode(0));

var time1c_S = document.querySelector("#time1c_S");
time1c_S.appendChild(document.createTextNode(0));

var time1c_GP = document.querySelector("#time1c_GP");
time1c_GP.appendChild(document.createTextNode(0));

var time1c_GC = document.querySelector("#time1c_GC");
time1c_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 2 C

var time2c_img = document.querySelector("#time2c_img");
time2c_img.setAttribute("src", time2c[0]);

var time2c_nome = document.querySelector("#time2c_nome");
time2c_nome.appendChild(document.createTextNode(" " + time2c[1].toUpperCase()));

var time2c_P = document.querySelector("#time2c_P");
time2c_P.appendChild(document.createTextNode(0));

var time2c_J = document.querySelector("#time2c_J");
time2c_J.appendChild(document.createTextNode(0));

var time2c_V = document.querySelector("#time2c_V");
time2c_V.appendChild(document.createTextNode(0));

var time2c_E = document.querySelector("#time2c_E");
time2c_E.appendChild(document.createTextNode(0));

var time2c_D = document.querySelector("#time2c_D");
time2c_D.appendChild(document.createTextNode(0));

var time2c_S = document.querySelector("#time2c_S");
time2c_S.appendChild(document.createTextNode(0));

var time2c_GP = document.querySelector("#time2c_GP");
time2c_GP.appendChild(document.createTextNode(0));

var time2c_GC = document.querySelector("#time2c_GC");
time2c_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 3 C

var time3c_img = document.querySelector("#time3c_img");
time3c_img.setAttribute("src", time3c[0]);

var time3c_nome = document.querySelector("#time3c_nome");
time3c_nome.appendChild(document.createTextNode(" " + time3c[1].toUpperCase()));

var time3c_P = document.querySelector("#time3c_P");
time3c_P.appendChild(document.createTextNode(0));

var time3c_J = document.querySelector("#time3c_J");
time3c_J.appendChild(document.createTextNode(0));

var time3c_V = document.querySelector("#time3c_V");
time3c_V.appendChild(document.createTextNode(0));

var time3c_E = document.querySelector("#time3c_E");
time3c_E.appendChild(document.createTextNode(0));

var time3c_D = document.querySelector("#time3c_D");
time3c_D.appendChild(document.createTextNode(0));

var time3c_S = document.querySelector("#time3c_S");
time3c_S.appendChild(document.createTextNode(0));

var time3c_GP = document.querySelector("#time3c_GP");
time3c_GP.appendChild(document.createTextNode(0));

var time3c_GC = document.querySelector("#time3c_GC");
time3c_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 4 C

var time4c_img = document.querySelector("#time4c_img");
time4c_img.setAttribute("src", time4c[0]);

var time4c_nome = document.querySelector("#time4c_nome");
time4c_nome.appendChild(document.createTextNode(" " + time4c[1].toUpperCase()));

var time4c_P = document.querySelector("#time4c_P");
time4c_P.appendChild(document.createTextNode(0));

var time4c_J = document.querySelector("#time4c_J");
time4c_J.appendChild(document.createTextNode(0));

var time4c_V = document.querySelector("#time4c_V");
time4c_V.appendChild(document.createTextNode(0));

var time4c_E = document.querySelector("#time4c_E");
time4c_E.appendChild(document.createTextNode(0));

var time4c_D = document.querySelector("#time4c_D");
time4c_D.appendChild(document.createTextNode(0));

var time4c_S = document.querySelector("#time4c_S");
time4c_S.appendChild(document.createTextNode(0));

var time4c_GP = document.querySelector("#time4c_GP");
time4c_GP.appendChild(document.createTextNode(0));

var time4c_GC = document.querySelector("#time4c_GC");
time4c_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 1 D

var time1d_img = document.querySelector("#time1d_img")
time1d_img.setAttribute("src", time1d[0])

var time1d_nome = document.querySelector("#time1d_nome")
time1d_nome.appendChild(document.createTextNode(" " + time1d[1].toUpperCase()))

var time1d_P = document.querySelector("#time1d_P")
time1d_P.appendChild(document.createTextNode(0))

var time1d_J = document.querySelector("#time1d_J")
time1d_J.appendChild(document.createTextNode(0))

var time1d_V = document.querySelector("#time1d_V")
time1d_V.appendChild(document.createTextNode(0))

var time1d_E = document.querySelector("#time1d_E")
time1d_E.appendChild(document.createTextNode(0))

var time1d_D = document.querySelector("#time1d_D")
time1d_D.appendChild(document.createTextNode(0))

var time1d_S = document.querySelector("#time1d_S")
time1d_S.appendChild(document.createTextNode(0))

var time1d_GP = document.querySelector("#time1d_GP")
time1d_GP.appendChild(document.createTextNode(0))

var time1d_GC = document.querySelector("#time1d_GC")
time1d_GC.appendChild(document.createTextNode(0))

// CRIANDO TIME 2 D

var time2d_img = document.querySelector("#time2d_img");
time2d_img.setAttribute("src", time2d[0]);

var time2d_nome = document.querySelector("#time2d_nome");
time2d_nome.appendChild(document.createTextNode(" " + time2d[1].toUpperCase()));

var time2d_P = document.querySelector("#time2d_P");
time2d_P.appendChild(document.createTextNode(0));

var time2d_J = document.querySelector("#time2d_J");
time2d_J.appendChild(document.createTextNode(0));

var time2d_V = document.querySelector("#time2d_V");
time2d_V.appendChild(document.createTextNode(0));

var time2d_E = document.querySelector("#time2d_E");
time2d_E.appendChild(document.createTextNode(0));

var time2d_D = document.querySelector("#time2d_D");
time2d_D.appendChild(document.createTextNode(0));

var time2d_S = document.querySelector("#time2d_S");
time2d_S.appendChild(document.createTextNode(0));

var time2d_GP = document.querySelector("#time2d_GP");
time2d_GP.appendChild(document.createTextNode(0));

var time2d_GC = document.querySelector("#time2d_GC");
time2d_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 3 D

var time3d_img = document.querySelector("#time3d_img");
time3d_img.setAttribute("src", time3d[0]);

var time3d_nome = document.querySelector("#time3d_nome");
time3d_nome.appendChild(document.createTextNode(" " + time3d[1].toUpperCase()));

var time3d_P = document.querySelector("#time3d_P");
time3d_P.appendChild(document.createTextNode(0));

var time3d_J = document.querySelector("#time3d_J");
time3d_J.appendChild(document.createTextNode(0));

var time3d_V = document.querySelector("#time3d_V");
time3d_V.appendChild(document.createTextNode(0));

var time3d_E = document.querySelector("#time3d_E");
time3d_E.appendChild(document.createTextNode(0));

var time3d_D = document.querySelector("#time3d_D");
time3d_D.appendChild(document.createTextNode(0));

var time3d_S = document.querySelector("#time3d_S");
time3d_S.appendChild(document.createTextNode(0));

var time3d_GP = document.querySelector("#time3d_GP");
time3d_GP.appendChild(document.createTextNode(0));

var time3d_GC = document.querySelector("#time3d_GC");
time3d_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 4 D

var time4d_img = document.querySelector("#time4d_img");
time4d_img.setAttribute("src", time4d[0]);

var time4d_nome = document.querySelector("#time4d_nome");
time4d_nome.appendChild(document.createTextNode(" " + time4d[1].toUpperCase()));

var time4d_P = document.querySelector("#time4d_P");
time4d_P.appendChild(document.createTextNode(0));

var time4d_J = document.querySelector("#time4d_J");
time4d_J.appendChild(document.createTextNode(0));

var time4d_V = document.querySelector("#time4d_V");
time4d_V.appendChild(document.createTextNode(0));

var time4d_E = document.querySelector("#time4d_E");
time4d_E.appendChild(document.createTextNode(0));

var time4d_D = document.querySelector("#time4d_D");
time4d_D.appendChild(document.createTextNode(0));

var time4d_S = document.querySelector("#time4d_S");
time4d_S.appendChild(document.createTextNode(0));

var time4d_GP = document.querySelector("#time4d_GP");
time4d_GP.appendChild(document.createTextNode(0));

var time4d_GC = document.querySelector("#time4d_GC");
time4d_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 1 E

var time1e_img = document.querySelector("#time1e_img")
time1e_img.setAttribute("src", time1e[0])

var time1e_nome = document.querySelector("#time1e_nome")
time1e_nome.appendChild(document.createTextNode(" " + time1e[1].toUpperCase()))

var time1e_P = document.querySelector("#time1e_P")
time1e_P.appendChild(document.createTextNode(0))

var time1e_J = document.querySelector("#time1e_J")
time1e_J.appendChild(document.createTextNode(0))

var time1e_V = document.querySelector("#time1e_V")
time1e_V.appendChild(document.createTextNode(0))

var time1e_E = document.querySelector("#time1e_E")
time1e_E.appendChild(document.createTextNode(0))

var time1e_D = document.querySelector("#time1e_D")
time1e_D.appendChild(document.createTextNode(0))

var time1e_S = document.querySelector("#time1e_S")
time1e_S.appendChild(document.createTextNode(0))

var time1e_GP = document.querySelector("#time1e_GP")
time1e_GP.appendChild(document.createTextNode(0))

var time1e_GC = document.querySelector("#time1e_GC")
time1e_GC.appendChild(document.createTextNode(0))

// CRIANDO TIME 2 E

var time2e_img = document.querySelector("#time2e_img");
time2e_img.setAttribute("src", time2e[0]);

var time2e_nome = document.querySelector("#time2e_nome");
time2e_nome.appendChild(document.createTextNode(" " + time2e[1].toUpperCase()));

var time2e_P = document.querySelector("#time2e_P");
time2e_P.appendChild(document.createTextNode(0));

var time2e_J = document.querySelector("#time2e_J");
time2e_J.appendChild(document.createTextNode(0));

var time2e_V = document.querySelector("#time2e_V");
time2e_V.appendChild(document.createTextNode(0));

var time2e_E = document.querySelector("#time2e_E");
time2e_E.appendChild(document.createTextNode(0));

var time2e_D = document.querySelector("#time2e_D");
time2e_D.appendChild(document.createTextNode(0));

var time2e_S = document.querySelector("#time2e_S");
time2e_S.appendChild(document.createTextNode(0));

var time2e_GP = document.querySelector("#time2e_GP");
time2e_GP.appendChild(document.createTextNode(0));

var time2e_GC = document.querySelector("#time2e_GC");
time2e_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 3 E

var time3e_img = document.querySelector("#time3e_img");
time3e_img.setAttribute("src", time3e[0]);

var time3e_nome = document.querySelector("#time3e_nome");
time3e_nome.appendChild(document.createTextNode(" " + time3e[1].toUpperCase()));

var time3e_P = document.querySelector("#time3e_P");
time3e_P.appendChild(document.createTextNode(0));

var time3e_J = document.querySelector("#time3e_J");
time3e_J.appendChild(document.createTextNode(0));

var time3e_V = document.querySelector("#time3e_V");
time3e_V.appendChild(document.createTextNode(0));

var time3e_E = document.querySelector("#time3e_E");
time3e_E.appendChild(document.createTextNode(0));

var time3e_D = document.querySelector("#time3e_D");
time3e_D.appendChild(document.createTextNode(0));

var time3e_S = document.querySelector("#time3e_S");
time3e_S.appendChild(document.createTextNode(0));

var time3e_GP = document.querySelector("#time3e_GP");
time3e_GP.appendChild(document.createTextNode(0));

var time3e_GC = document.querySelector("#time3e_GC");
time3e_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 4 E

var time4e_img = document.querySelector("#time4e_img");
time4e_img.setAttribute("src", time4e[0]);

var time4e_nome = document.querySelector("#time4e_nome");
time4e_nome.appendChild(document.createTextNode(" " + time4e[1].toUpperCase()));

var time4e_P = document.querySelector("#time4e_P");
time4e_P.appendChild(document.createTextNode(0));

var time4e_J = document.querySelector("#time4e_J");
time4e_J.appendChild(document.createTextNode(0));

var time4e_V = document.querySelector("#time4e_V");
time4e_V.appendChild(document.createTextNode(0));

var time4e_E = document.querySelector("#time4e_E");
time4e_E.appendChild(document.createTextNode(0));

var time4e_D = document.querySelector("#time4e_D");
time4e_D.appendChild(document.createTextNode(0));

var time4e_S = document.querySelector("#time4e_S");
time4e_S.appendChild(document.createTextNode(0));

var time4e_GP = document.querySelector("#time4e_GP");
time4e_GP.appendChild(document.createTextNode(0));

var time4e_GC = document.querySelector("#time4e_GC");
time4e_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 1 F

var time1f_img = document.querySelector("#time1f_img")
time1f_img.setAttribute("src", time1f[0])

var time1f_nome = document.querySelector("#time1f_nome")
time1f_nome.appendChild(document.createTextNode(" " + time1f[1].toUpperCase()))

var time1f_P = document.querySelector("#time1f_P")
time1f_P.appendChild(document.createTextNode(0))

var time1f_J = document.querySelector("#time1f_J")
time1f_J.appendChild(document.createTextNode(0))

var time1f_V = document.querySelector("#time1f_V")
time1f_V.appendChild(document.createTextNode(0))

var time1f_E = document.querySelector("#time1f_E")
time1f_E.appendChild(document.createTextNode(0))

var time1f_D = document.querySelector("#time1f_D")
time1f_D.appendChild(document.createTextNode(0))

var time1f_S = document.querySelector("#time1f_S")
time1f_S.appendChild(document.createTextNode(0))

var time1f_GP = document.querySelector("#time1f_GP")
time1f_GP.appendChild(document.createTextNode(0))

var time1f_GC = document.querySelector("#time1f_GC")
time1f_GC.appendChild(document.createTextNode(0))

// CRIANDO TIME 2 F

var time2f_img = document.querySelector("#time2f_img");
time2f_img.setAttribute("src", time2f[0]);

var time2f_nome = document.querySelector("#time2f_nome");
time2f_nome.appendChild(document.createTextNode(" " + time2f[1].toUpperCase()));

var time2f_P = document.querySelector("#time2f_P");
time2f_P.appendChild(document.createTextNode(0));

var time2f_J = document.querySelector("#time2f_J");
time2f_J.appendChild(document.createTextNode(0));

var time2f_V = document.querySelector("#time2f_V");
time2f_V.appendChild(document.createTextNode(0));

var time2f_E = document.querySelector("#time2f_E");
time2f_E.appendChild(document.createTextNode(0));

var time2f_D = document.querySelector("#time2f_D");
time2f_D.appendChild(document.createTextNode(0));

var time2f_S = document.querySelector("#time2f_S");
time2f_S.appendChild(document.createTextNode(0));

var time2f_GP = document.querySelector("#time2f_GP");
time2f_GP.appendChild(document.createTextNode(0));

var time2f_GC = document.querySelector("#time2f_GC");
time2f_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 3 F

var time3f_img = document.querySelector("#time3f_img");
time3f_img.setAttribute("src", time3f[0]);

var time3f_nome = document.querySelector("#time3f_nome");
time3f_nome.appendChild(document.createTextNode(" " + time3f[1].toUpperCase()));

var time3f_P = document.querySelector("#time3f_P");
time3f_P.appendChild(document.createTextNode(0));

var time3f_J = document.querySelector("#time3f_J");
time3f_J.appendChild(document.createTextNode(0));

var time3f_V = document.querySelector("#time3f_V");
time3f_V.appendChild(document.createTextNode(0));

var time3f_E = document.querySelector("#time3f_E");
time3f_E.appendChild(document.createTextNode(0));

var time3f_D = document.querySelector("#time3f_D");
time3f_D.appendChild(document.createTextNode(0));

var time3f_S = document.querySelector("#time3f_S");
time3f_S.appendChild(document.createTextNode(0));

var time3f_GP = document.querySelector("#time3f_GP");
time3f_GP.appendChild(document.createTextNode(0));

var time3f_GC = document.querySelector("#time3f_GC");
time3f_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 4 F

var time4f_img = document.querySelector("#time4f_img");
time4f_img.setAttribute("src", time4f[0]);

var time4f_nome = document.querySelector("#time4f_nome");
time4f_nome.appendChild(document.createTextNode(" " + time4f[1].toUpperCase()));

var time4f_P = document.querySelector("#time4f_P");
time4f_P.appendChild(document.createTextNode(0));

var time4f_J = document.querySelector("#time4f_J");
time4f_J.appendChild(document.createTextNode(0));

var time4f_V = document.querySelector("#time4f_V");
time4f_V.appendChild(document.createTextNode(0));

var time4f_E = document.querySelector("#time4f_E");
time4f_E.appendChild(document.createTextNode(0));

var time4f_D = document.querySelector("#time4f_D");
time4f_D.appendChild(document.createTextNode(0));

var time4f_S = document.querySelector("#time4f_S");
time4f_S.appendChild(document.createTextNode(0));

var time4f_GP = document.querySelector("#time4f_GP");
time4f_GP.appendChild(document.createTextNode(0));

var time4f_GC = document.querySelector("#time4f_GC");
time4f_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 1 G

var time1g_img = document.querySelector("#time1g_img")
time1g_img.setAttribute("src", time1g[0])

var time1g_nome = document.querySelector("#time1g_nome")
time1g_nome.appendChild(document.createTextNode(" " + time1g[1].toUpperCase()))

var time1g_P = document.querySelector("#time1g_P")
time1g_P.appendChild(document.createTextNode(0))

var time1g_J = document.querySelector("#time1g_J")
time1g_J.appendChild(document.createTextNode(0))

var time1g_V = document.querySelector("#time1g_V")
time1g_V.appendChild(document.createTextNode(0))

var time1g_E = document.querySelector("#time1g_E")
time1g_E.appendChild(document.createTextNode(0))

var time1g_D = document.querySelector("#time1g_D")
time1g_D.appendChild(document.createTextNode(0))

var time1g_S = document.querySelector("#time1g_S")
time1g_S.appendChild(document.createTextNode(0))

var time1g_GP = document.querySelector("#time1g_GP")
time1g_GP.appendChild(document.createTextNode(0))

var time1g_GC = document.querySelector("#time1g_GC")
time1g_GC.appendChild(document.createTextNode(0))

// CRIANDO TIME 2 G

var time2g_img = document.querySelector("#time2g_img");
time2g_img.setAttribute("src", time2g[0]);

var time2g_nome = document.querySelector("#time2g_nome");
time2g_nome.appendChild(document.createTextNode(" " + time2g[1].toUpperCase()));

var time2g_P = document.querySelector("#time2g_P");
time2g_P.appendChild(document.createTextNode(0));

var time2g_J = document.querySelector("#time2g_J");
time2g_J.appendChild(document.createTextNode(0));

var time2g_V = document.querySelector("#time2g_V");
time2g_V.appendChild(document.createTextNode(0));

var time2g_E = document.querySelector("#time2g_E");
time2g_E.appendChild(document.createTextNode(0));

var time2g_D = document.querySelector("#time2g_D");
time2g_D.appendChild(document.createTextNode(0));

var time2g_S = document.querySelector("#time2g_S");
time2g_S.appendChild(document.createTextNode(0));

var time2g_GP = document.querySelector("#time2g_GP");
time2g_GP.appendChild(document.createTextNode(0));

var time2g_GC = document.querySelector("#time2g_GC");
time2g_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 3 G

var time3g_img = document.querySelector("#time3g_img");
time3g_img.setAttribute("src", time3g[0]);

var time3g_nome = document.querySelector("#time3g_nome");
time3g_nome.appendChild(document.createTextNode(" " + time3g[1].toUpperCase()));

var time3g_P = document.querySelector("#time3g_P");
time3g_P.appendChild(document.createTextNode(0));

var time3g_J = document.querySelector("#time3g_J");
time3g_J.appendChild(document.createTextNode(0));

var time3g_V = document.querySelector("#time3g_V");
time3g_V.appendChild(document.createTextNode(0));

var time3g_E = document.querySelector("#time3g_E");
time3g_E.appendChild(document.createTextNode(0));

var time3g_D = document.querySelector("#time3g_D");
time3g_D.appendChild(document.createTextNode(0));

var time3g_S = document.querySelector("#time3g_S");
time3g_S.appendChild(document.createTextNode(0));

var time3g_GP = document.querySelector("#time3g_GP");
time3g_GP.appendChild(document.createTextNode(0));

var time3g_GC = document.querySelector("#time3g_GC");
time3g_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 4 G

var time4g_img = document.querySelector("#time4g_img");
time4g_img.setAttribute("src", time4g[0]);

var time4g_nome = document.querySelector("#time4g_nome");
time4g_nome.appendChild(document.createTextNode(" " + time4g[1].toUpperCase()));

var time4g_P = document.querySelector("#time4g_P");
time4g_P.appendChild(document.createTextNode(0));

var time4g_J = document.querySelector("#time4g_J");
time4g_J.appendChild(document.createTextNode(0));

var time4g_V = document.querySelector("#time4g_V");
time4g_V.appendChild(document.createTextNode(0));

var time4g_E = document.querySelector("#time4g_E");
time4g_E.appendChild(document.createTextNode(0));

var time4g_D = document.querySelector("#time4g_D");
time4g_D.appendChild(document.createTextNode(0));

var time4g_S = document.querySelector("#time4g_S");
time4g_S.appendChild(document.createTextNode(0));

var time4g_GP = document.querySelector("#time4g_GP");
time4g_GP.appendChild(document.createTextNode(0));

var time4g_GC = document.querySelector("#time4g_GC");
time4g_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 1 H

var time1h_img = document.querySelector("#time1h_img")
time1h_img.setAttribute("src", time1h[0])

var time1h_nome = document.querySelector("#time1h_nome")
time1h_nome.appendChild(document.createTextNode(" " + time1h[1].toUpperCase()))

var time1h_P = document.querySelector("#time1h_P")
time1h_P.appendChild(document.createTextNode(0))

var time1h_J = document.querySelector("#time1h_J")
time1h_J.appendChild(document.createTextNode(0))

var time1h_V = document.querySelector("#time1h_V")
time1h_V.appendChild(document.createTextNode(0))

var time1h_E = document.querySelector("#time1h_E")
time1h_E.appendChild(document.createTextNode(0))

var time1h_D = document.querySelector("#time1h_D")
time1h_D.appendChild(document.createTextNode(0))

var time1h_S = document.querySelector("#time1h_S")
time1h_S.appendChild(document.createTextNode(0))

var time1h_GP = document.querySelector("#time1h_GP")
time1h_GP.appendChild(document.createTextNode(0))

var time1h_GC = document.querySelector("#time1h_GC")
time1h_GC.appendChild(document.createTextNode(0))

// CRIANDO TIME 2 H

var time2h_img = document.querySelector("#time2h_img");
time2h_img.setAttribute("src", time2h[0]);

var time2h_nome = document.querySelector("#time2h_nome");
time2h_nome.appendChild(document.createTextNode(" " + time2h[1].toUpperCase()));

var time2h_P = document.querySelector("#time2h_P");
time2h_P.appendChild(document.createTextNode(0));

var time2h_J = document.querySelector("#time2h_J");
time2h_J.appendChild(document.createTextNode(0));

var time2h_V = document.querySelector("#time2h_V");
time2h_V.appendChild(document.createTextNode(0));

var time2h_E = document.querySelector("#time2h_E");
time2h_E.appendChild(document.createTextNode(0));

var time2h_D = document.querySelector("#time2h_D");
time2h_D.appendChild(document.createTextNode(0));

var time2h_S = document.querySelector("#time2h_S");
time2h_S.appendChild(document.createTextNode(0));

var time2h_GP = document.querySelector("#time2h_GP");
time2h_GP.appendChild(document.createTextNode(0));

var time2h_GC = document.querySelector("#time2h_GC");
time2h_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 3 H

var time3h_img = document.querySelector("#time3h_img");
time3h_img.setAttribute("src", time3h[0]);

var time3h_nome = document.querySelector("#time3h_nome");
time3h_nome.appendChild(document.createTextNode(" " + time3h[1].toUpperCase()));

var time3h_P = document.querySelector("#time3h_P");
time3h_P.appendChild(document.createTextNode(0));

var time3h_J = document.querySelector("#time3h_J");
time3h_J.appendChild(document.createTextNode(0));

var time3h_V = document.querySelector("#time3h_V");
time3h_V.appendChild(document.createTextNode(0));

var time3h_E = document.querySelector("#time3h_E");
time3h_E.appendChild(document.createTextNode(0));

var time3h_D = document.querySelector("#time3h_D");
time3h_D.appendChild(document.createTextNode(0));

var time3h_S = document.querySelector("#time3h_S");
time3h_S.appendChild(document.createTextNode(0));

var time3h_GP = document.querySelector("#time3h_GP");
time3h_GP.appendChild(document.createTextNode(0));

var time3h_GC = document.querySelector("#time3h_GC");
time3h_GC.appendChild(document.createTextNode(0));

// CRIANDO TIME 4 H

var time4h_img = document.querySelector("#time4h_img");
time4h_img.setAttribute("src", time4h[0]);

var time4h_nome = document.querySelector("#time4h_nome");
time4h_nome.appendChild(document.createTextNode(" " + time4h[1].toUpperCase()));

var time4h_P = document.querySelector("#time4h_P");
time4h_P.appendChild(document.createTextNode(0));

var time4h_J = document.querySelector("#time4h_J");
time4h_J.appendChild(document.createTextNode(0));

var time4h_V = document.querySelector("#time4h_V");
time4h_V.appendChild(document.createTextNode(0));

var time4h_E = document.querySelector("#time4h_E");
time4h_E.appendChild(document.createTextNode(0));

var time4h_D = document.querySelector("#time4h_D");
time4h_D.appendChild(document.createTextNode(0));

var time4h_S = document.querySelector("#time4h_S");
time4h_S.appendChild(document.createTextNode(0));

var time4h_GP = document.querySelector("#time4h_GP");
time4h_GP.appendChild(document.createTextNode(0));

var time4h_GC = document.querySelector("#time4h_GC");
time4h_GC.appendChild(document.createTextNode(0));

// JOGO 1 X 2

var ula = document.createElement("ul")

var grupo_a = document.querySelector(".grupo_a")

var input1x2a_1 = document.createElement("input")
input1x2a_1.setAttribute("id", "input1x2a_1")

var input1x2a_2 = document.createElement("input")
input1x2a_2.setAttribute("id", "input1x2a_2")

var img1x2a_1 = document.createElement("img")
img1x2a_1.setAttribute("src", time1a[0])

var img1x2a_2 = document.createElement("img")
img1x2a_2.setAttribute("src", time2a[0])

var jogo_1a_1x2 = document.createElement("li")
jogo_1a_1x2.appendChild(img1x2a_1)
jogo_1a_1x2.appendChild(document.createTextNode(" "))
jogo_1a_1x2.appendChild(input1x2a_1)
jogo_1a_1x2.appendChild(document.createTextNode(" X "))
jogo_1a_1x2.appendChild(input1x2a_2)
jogo_1a_1x2.appendChild(document.createTextNode(" "))
jogo_1a_1x2.appendChild(img1x2a_2)

ula.appendChild(jogo_1a_1x2)

grupo_a.appendChild(ula)

// JOGO 4 X 3

var input4x3a_4 = document.createElement("input");
input4x3a_4.setAttribute("id", "input4x3a_4");

var input4x3a_3 = document.createElement("input");
input4x3a_3.setAttribute("id", "input4x3a_3");

var img4x3a_4 = document.createElement("img");
img4x3a_4.setAttribute("src", time4a[0]);

var img4x3a_3 = document.createElement("img");
img4x3a_3.setAttribute("src", time3a[0]);

var jogo_2a_4x3 = document.createElement("li");
jogo_2a_4x3.appendChild(img4x3a_4);
jogo_2a_4x3.appendChild(document.createTextNode(" "));
jogo_2a_4x3.appendChild(input4x3a_4);
jogo_2a_4x3.appendChild(document.createTextNode(" X "));
jogo_2a_4x3.appendChild(input4x3a_3);
jogo_2a_4x3.appendChild(document.createTextNode(" "));
jogo_2a_4x3.appendChild(img4x3a_3);

ula.appendChild(jogo_2a_4x3);

grupo_a.appendChild(ula);

// JOGO 3 X 1

var input3x1a_3 = document.createElement("input");
input3x1a_3.setAttribute("id", "input3x1a_3");

var input3x1a_1 = document.createElement("input");
input3x1a_1.setAttribute("id", "input3x1a_1");

var img3x1a_3 = document.createElement("img");
img3x1a_3.setAttribute("src", time3a[0]);

var img3x1a_1 = document.createElement("img");
img3x1a_1.setAttribute("src", time1a[0]);

var jogo_3a_3x1 = document.createElement("li");
jogo_3a_3x1.appendChild(img3x1a_3);
jogo_3a_3x1.appendChild(document.createTextNode(" "));
jogo_3a_3x1.appendChild(input3x1a_3);
jogo_3a_3x1.appendChild(document.createTextNode(" X "));
jogo_3a_3x1.appendChild(input3x1a_1);
jogo_3a_3x1.appendChild(document.createTextNode(" "));
jogo_3a_3x1.appendChild(img3x1a_1);

ula.appendChild(jogo_3a_3x1);

grupo_a.appendChild(ula);

// JOGO 2 X 4

var input2x4a_2 = document.createElement("input");
input2x4a_2.setAttribute("id", "input2x4a_2");

var input2x4a_4 = document.createElement("input");
input2x4a_4.setAttribute("id", "input2x4a_4");

var img2x4a_2 = document.createElement("img");
img2x4a_2.setAttribute("src", time2a[0]);

var img2x4a_4 = document.createElement("img");
img2x4a_4.setAttribute("src", time4a[0]);

var jogo_4a_2x4 = document.createElement("li");
jogo_4a_2x4.appendChild(img2x4a_2);
jogo_4a_2x4.appendChild(document.createTextNode(" "));
jogo_4a_2x4.appendChild(input2x4a_2);
jogo_4a_2x4.appendChild(document.createTextNode(" X "));
jogo_4a_2x4.appendChild(input2x4a_4);
jogo_4a_2x4.appendChild(document.createTextNode(" "));
jogo_4a_2x4.appendChild(img2x4a_4);

ula.appendChild(jogo_4a_2x4);

grupo_a.appendChild(ula);

// JOGO 1 X 4

var input1x4a_1 = document.createElement("input");
input1x4a_1.setAttribute("id", "input1x4_1");

var input1x4a_4 = document.createElement("input");
input1x4a_4.setAttribute("id", "input1x4_4");

var img1x4a_1 = document.createElement("img");
img1x4a_1.setAttribute("src", time1a[0]);

var img1x4a_4 = document.createElement("img");
img1x4a_4.setAttribute("src", time4a[0]);

var jogo_5a_1x4 = document.createElement("li");
jogo_5a_1x4.appendChild(img1x4a_1);
jogo_5a_1x4.appendChild(document.createTextNode(" "));
jogo_5a_1x4.appendChild(input1x4a_1);
jogo_5a_1x4.appendChild(document.createTextNode(" X "));
jogo_5a_1x4.appendChild(input1x4a_4);
jogo_5a_1x4.appendChild(document.createTextNode(" "));
jogo_5a_1x4.appendChild(img1x4a_4);

ula.appendChild(jogo_5a_1x4);

grupo_a.appendChild(ula);

// JOGO 2 X 3

var input2x3a_2 = document.createElement("input");
input2x3a_2.setAttribute("id", "input2x3_2");

var input2x3a_3 = document.createElement("input");
input2x3a_3.setAttribute("id", "input2x3_3");

var img2x3a_2 = document.createElement("img");
img2x3a_2.setAttribute("src", time2a[0]);

var img2x3a_3 = document.createElement("img");
img2x3a_3.setAttribute("src", time3a[0]);

var jogo_6a_2x3 = document.createElement("li");
jogo_6a_2x3.appendChild(img2x3a_2);
jogo_6a_2x3.appendChild(document.createTextNode(" "));
jogo_6a_2x3.appendChild(input2x3a_2);
jogo_6a_2x3.appendChild(document.createTextNode(" X "));
jogo_6a_2x3.appendChild(input2x3a_3);
jogo_6a_2x3.appendChild(document.createTextNode(" "));
jogo_6a_2x3.appendChild(img2x3a_3);

ula.appendChild(jogo_6a_2x3);

grupo_a.appendChild(ula);

// JOGO 3 X 2

var input3x2a_3 = document.createElement("input");
input3x2a_3.setAttribute("id", "input3x2_3");

var input3x2a_2 = document.createElement("input");
input3x2a_2.setAttribute("id", "input3x2_2");

var img3x2a_3 = document.createElement("img");
img3x2a_3.setAttribute("src", time3a[0]);

var img3x2a_2 = document.createElement("img");
img3x2a_2.setAttribute("src", time2a[0]);

var jogo_7a_3x2 = document.createElement("li");
jogo_7a_3x2.appendChild(img3x2a_3);
jogo_7a_3x2.appendChild(document.createTextNode(" "));
jogo_7a_3x2.appendChild(input3x2a_3);
jogo_7a_3x2.appendChild(document.createTextNode(" X "));
jogo_7a_3x2.appendChild(input3x2a_2);
jogo_7a_3x2.appendChild(document.createTextNode(" "));
jogo_7a_3x2.appendChild(img3x2a_2);

ula.appendChild(jogo_7a_3x2);

grupo_a.appendChild(ula);

// JOGO 4 X 1

var input4x1a_4 = document.createElement("input");
input4x1a_4.setAttribute("id", "input4x1_4");

var input4x1a_1 = document.createElement("input");
input4x1a_1.setAttribute("id", "input4x1_1");

var img4x1a_4 = document.createElement("img");
img4x1a_4.setAttribute("src", time4a[0]);

var img4x1a_1 = document.createElement("img");
img4x1a_1.setAttribute("src", time1a[0]);

var jogo_8a_4x1 = document.createElement("li");
jogo_8a_4x1.appendChild(img4x1a_4);
jogo_8a_4x1.appendChild(document.createTextNode(" "));
jogo_8a_4x1.appendChild(input4x1a_4);
jogo_8a_4x1.appendChild(document.createTextNode(" X "));
jogo_8a_4x1.appendChild(input4x1a_1);
jogo_8a_4x1.appendChild(document.createTextNode(" "));
jogo_8a_4x1.appendChild(img4x1a_1);

ula.appendChild(jogo_8a_4x1);

grupo_a.appendChild(ula);

// JOGO 4 X 2

var input4x2a_4 = document.createElement("input");
input4x2a_4.setAttribute("id", "input4x2_4");

var input4x2a_2 = document.createElement("input");
input4x2a_2.setAttribute("id", "input4x2_2");

var img4x2a_4 = document.createElement("img");
img4x2a_4.setAttribute("src", time4a[0]);

var img4x2a_2 = document.createElement("img");
img4x2a_2.setAttribute("src", time2a[0]);

var jogo_9a_4x2 = document.createElement("li");
jogo_9a_4x2.appendChild(img4x2a_4);
jogo_9a_4x2.appendChild(document.createTextNode(" "));
jogo_9a_4x2.appendChild(input4x2a_4);
jogo_9a_4x2.appendChild(document.createTextNode(" X "));
jogo_9a_4x2.appendChild(input4x2a_2);
jogo_9a_4x2.appendChild(document.createTextNode(" "));
jogo_9a_4x2.appendChild(img4x2a_2);

ula.appendChild(jogo_9a_4x2);

grupo_a.appendChild(ula);

// JOGO 1 X 3

var input1x3a_1 = document.createElement("input");
input1x3a_1.setAttribute("id", "input1x3_1");

var input1x3a_3 = document.createElement("input");
input1x3a_3.setAttribute("id", "input1x3_3");

var img1x3a_1 = document.createElement("img");
img1x3a_1.setAttribute("src", time1a[0]);

var img1x3a_3 = document.createElement("img");
img1x3a_3.setAttribute("src", time3a[0]);

var jogo_10a_1x3 = document.createElement("li");
jogo_10a_1x3.appendChild(img1x3a_1);
jogo_10a_1x3.appendChild(document.createTextNode(" "));
jogo_10a_1x3.appendChild(input1x3a_1);
jogo_10a_1x3.appendChild(document.createTextNode(" X "));
jogo_10a_1x3.appendChild(input1x3a_3);
jogo_10a_1x3.appendChild(document.createTextNode(" "));
jogo_10a_1x3.appendChild(img1x3a_3);

ula.appendChild(jogo_10a_1x3);

grupo_a.appendChild(ula);

// JOGO 3 X 4

var input3x4a_3 = document.createElement("input");
input3x4a_3.setAttribute("id", "input3x4_3");

var input3x4a_4 = document.createElement("input");
input3x4a_4.setAttribute("id", "input3x4_4");

var img3x4a_3 = document.createElement("img");
img3x4a_3.setAttribute("src", time3a[0]);

var img3x4a_4 = document.createElement("img");
img3x4a_4.setAttribute("src", time4a[0]);

var jogo_11a_3x4 = document.createElement("li");
jogo_11a_3x4.appendChild(img3x4a_3);
jogo_11a_3x4.appendChild(document.createTextNode(" "));
jogo_11a_3x4.appendChild(input3x4a_3);
jogo_11a_3x4.appendChild(document.createTextNode(" X "));
jogo_11a_3x4.appendChild(input3x4a_4);
jogo_11a_3x4.appendChild(document.createTextNode(" "));
jogo_11a_3x4.appendChild(img3x4a_4);

ula.appendChild(jogo_11a_3x4);

grupo_a.appendChild(ula);

// JOGO 2 X 1

var input2x1a_2 = document.createElement("input");
input2x1a_2.setAttribute("id", "input2x1_2");

var input2x1a_1 = document.createElement("input");
input2x1a_1.setAttribute("id", "input2x1_1");

var img2x1a_2 = document.createElement("img");
img2x1a_2.setAttribute("src", time2a[0]);

var img2x1a_1 = document.createElement("img");
img2x1a_1.setAttribute("src", time1a[0]);

var jogo_12a_2x1 = document.createElement("li");
jogo_12a_2x1.appendChild(img2x1a_2);
jogo_12a_2x1.appendChild(document.createTextNode(" "));
jogo_12a_2x1.appendChild(input2x1a_2);
jogo_12a_2x1.appendChild(document.createTextNode(" X "));
jogo_12a_2x1.appendChild(input2x1a_1);
jogo_12a_2x1.appendChild(document.createTextNode(" "));
jogo_12a_2x1.appendChild(img2x1a_1);

ula.appendChild(jogo_12a_2x1);

grupo_a.appendChild(ula);

// JOGO 1 X 2

var ulb = document.createElement("ul")

var grupo_b = document.querySelector(".grupo_b")

var input1x2b_1 = document.createElement("input")
input1x2b_1.setAttribute("id", "input1x2b_1")

var input1x2b_2 = document.createElement("input")
input1x2b_2.setAttribute("id", "input1x2b_2")

var img1x2b_1 = document.createElement("img")
img1x2b_1.setAttribute("src", time1b[0])

var img1x2b_2 = document.createElement("img")
img1x2b_2.setAttribute("src", time2b[0])

var jogo_1b_1x2 = document.createElement("li")
jogo_1b_1x2.appendChild(img1x2b_1)
jogo_1b_1x2.appendChild(document.createTextNode(" "))
jogo_1b_1x2.appendChild(input1x2b_1)
jogo_1b_1x2.appendChild(document.createTextNode(" X "))
jogo_1b_1x2.appendChild(input1x2b_2)
jogo_1b_1x2.appendChild(document.createTextNode(" "))
jogo_1b_1x2.appendChild(img1x2b_2)

ulb.appendChild(jogo_1b_1x2)

grupo_b.appendChild(ulb)

// JOGO 4 X 3

var input4x3b_4 = document.createElement("input");
input4x3b_4.setAttribute("id", "input4x3b_4");

var input4x3b_3 = document.createElement("input");
input4x3b_3.setAttribute("id", "input4x3b_3");

var img4x3b_4 = document.createElement("img");
img4x3b_4.setAttribute("src", time4b[0]);

var img4x3b_3 = document.createElement("img");
img4x3b_3.setAttribute("src", time3b[0]);

var jogo_2b_4x3 = document.createElement("li");
jogo_2b_4x3.appendChild(img4x3b_4);
jogo_2b_4x3.appendChild(document.createTextNode(" "));
jogo_2b_4x3.appendChild(input4x3b_4);
jogo_2b_4x3.appendChild(document.createTextNode(" X "));
jogo_2b_4x3.appendChild(input4x3b_3);
jogo_2b_4x3.appendChild(document.createTextNode(" "));
jogo_2b_4x3.appendChild(img4x3b_3);

ulb.appendChild(jogo_2b_4x3);

grupo_b.appendChild(ulb);

// JOGO 3 X 1

var input3x1b_3 = document.createElement("input");
input3x1b_3.setAttribute("id", "input3x1b_3");

var input3x1b_1 = document.createElement("input");
input3x1b_1.setAttribute("id", "input3x1b_1");

var img3x1b_3 = document.createElement("img");
img3x1b_3.setAttribute("src", time3b[0]);

var img3x1b_1 = document.createElement("img");
img3x1b_1.setAttribute("src", time1b[0]);

var jogo_3b_3x1 = document.createElement("li");
jogo_3b_3x1.appendChild(img3x1b_3);
jogo_3b_3x1.appendChild(document.createTextNode(" "));
jogo_3b_3x1.appendChild(input3x1b_3);
jogo_3b_3x1.appendChild(document.createTextNode(" X "));
jogo_3b_3x1.appendChild(input3x1b_1);
jogo_3b_3x1.appendChild(document.createTextNode(" "));
jogo_3b_3x1.appendChild(img3x1b_1);

ulb.appendChild(jogo_3b_3x1);

grupo_b.appendChild(ulb);

// JOGO 2 X 4

var input2x4b_2 = document.createElement("input");
input2x4b_2.setAttribute("id", "input2x4b_2");

var input2x4b_4 = document.createElement("input");
input2x4b_4.setAttribute("id", "input2x4b_4");

var img2x4b_2 = document.createElement("img");
img2x4b_2.setAttribute("src", time2b[0]);

var img2x4b_4 = document.createElement("img");
img2x4b_4.setAttribute("src", time4b[0]);

var jogo_4b_2x4 = document.createElement("li");
jogo_4b_2x4.appendChild(img2x4b_2);
jogo_4b_2x4.appendChild(document.createTextNode(" "));
jogo_4b_2x4.appendChild(input2x4b_2);
jogo_4b_2x4.appendChild(document.createTextNode(" X "));
jogo_4b_2x4.appendChild(input2x4b_4);
jogo_4b_2x4.appendChild(document.createTextNode(" "));
jogo_4b_2x4.appendChild(img2x4b_4);

ulb.appendChild(jogo_4b_2x4);

grupo_b.appendChild(ulb);

// JOGO 1 X 4

var input1x4b_1 = document.createElement("input");
input1x4b_1.setAttribute("id", "input1x4_1");

var input1x4b_4 = document.createElement("input");
input1x4b_4.setAttribute("id", "input1x4_4");

var img1x4b_1 = document.createElement("img");
img1x4b_1.setAttribute("src", time1b[0]);

var img1x4b_4 = document.createElement("img");
img1x4b_4.setAttribute("src", time4b[0]);

var jogo_5b_1x4 = document.createElement("li");
jogo_5b_1x4.appendChild(img1x4b_1);
jogo_5b_1x4.appendChild(document.createTextNode(" "));
jogo_5b_1x4.appendChild(input1x4b_1);
jogo_5b_1x4.appendChild(document.createTextNode(" X "));
jogo_5b_1x4.appendChild(input1x4b_4);
jogo_5b_1x4.appendChild(document.createTextNode(" "));
jogo_5b_1x4.appendChild(img1x4b_4);

ulb.appendChild(jogo_5b_1x4);

grupo_b.appendChild(ulb);

// JOGO 2 X 3

var input2x3b_2 = document.createElement("input");
input2x3b_2.setAttribute("id", "input2x3_2");

var input2x3b_3 = document.createElement("input");
input2x3b_3.setAttribute("id", "input2x3_3");

var img2x3b_2 = document.createElement("img");
img2x3b_2.setAttribute("src", time2b[0]);

var img2x3b_3 = document.createElement("img");
img2x3b_3.setAttribute("src", time3b[0]);

var jogo_6b_2x3 = document.createElement("li");
jogo_6b_2x3.appendChild(img2x3b_2);
jogo_6b_2x3.appendChild(document.createTextNode(" "));
jogo_6b_2x3.appendChild(input2x3b_2);
jogo_6b_2x3.appendChild(document.createTextNode(" X "));
jogo_6b_2x3.appendChild(input2x3b_3);
jogo_6b_2x3.appendChild(document.createTextNode(" "));
jogo_6b_2x3.appendChild(img2x3b_3);

ulb.appendChild(jogo_6b_2x3);

grupo_b.appendChild(ulb);

// JOGO 3 X 2

var input3x2b_3 = document.createElement("input");
input3x2b_3.setAttribute("id", "input3x2_3");

var input3x2b_2 = document.createElement("input");
input3x2b_2.setAttribute("id", "input3x2_2");

var img3x2b_3 = document.createElement("img");
img3x2b_3.setAttribute("src", time3b[0]);

var img3x2b_2 = document.createElement("img");
img3x2b_2.setAttribute("src", time2b[0]);

var jogo_7b_3x2 = document.createElement("li");
jogo_7b_3x2.appendChild(img3x2b_3);
jogo_7b_3x2.appendChild(document.createTextNode(" "));
jogo_7b_3x2.appendChild(input3x2b_3);
jogo_7b_3x2.appendChild(document.createTextNode(" X "));
jogo_7b_3x2.appendChild(input3x2b_2);
jogo_7b_3x2.appendChild(document.createTextNode(" "));
jogo_7b_3x2.appendChild(img3x2b_2);

ulb.appendChild(jogo_7b_3x2);

grupo_b.appendChild(ulb);

// JOGO 4 X 1

var input4x1b_4 = document.createElement("input");
input4x1b_4.setAttribute("id", "input4x1_4");

var input4x1b_1 = document.createElement("input");
input4x1b_1.setAttribute("id", "input4x1_1");

var img4x1b_4 = document.createElement("img");
img4x1b_4.setAttribute("src", time4b[0]);

var img4x1b_1 = document.createElement("img");
img4x1b_1.setAttribute("src", time1b[0]);

var jogo_8b_4x1 = document.createElement("li");
jogo_8b_4x1.appendChild(img4x1b_4);
jogo_8b_4x1.appendChild(document.createTextNode(" "));
jogo_8b_4x1.appendChild(input4x1b_4);
jogo_8b_4x1.appendChild(document.createTextNode(" X "));
jogo_8b_4x1.appendChild(input4x1b_1);
jogo_8b_4x1.appendChild(document.createTextNode(" "));
jogo_8b_4x1.appendChild(img4x1b_1);

ulb.appendChild(jogo_8b_4x1);

grupo_b.appendChild(ulb);

// JOGO 4 X 2

var input4x2b_4 = document.createElement("input");
input4x2b_4.setAttribute("id", "input4x2_4");

var input4x2b_2 = document.createElement("input");
input4x2b_2.setAttribute("id", "input4x2_2");

var img4x2b_4 = document.createElement("img");
img4x2b_4.setAttribute("src", time4b[0]);

var img4x2b_2 = document.createElement("img");
img4x2b_2.setAttribute("src", time2b[0]);

var jogo_9b_4x2 = document.createElement("li");
jogo_9b_4x2.appendChild(img4x2b_4);
jogo_9b_4x2.appendChild(document.createTextNode(" "));
jogo_9b_4x2.appendChild(input4x2b_4);
jogo_9b_4x2.appendChild(document.createTextNode(" X "));
jogo_9b_4x2.appendChild(input4x2b_2);
jogo_9b_4x2.appendChild(document.createTextNode(" "));
jogo_9b_4x2.appendChild(img4x2b_2);

ulb.appendChild(jogo_9b_4x2);

grupo_b.appendChild(ulb);

// JOGO 1 X 3

var input1x3b_1 = document.createElement("input");
input1x3b_1.setAttribute("id", "input1x3_1");

var input1x3b_3 = document.createElement("input");
input1x3b_3.setAttribute("id", "input1x3_3");

var img1x3b_1 = document.createElement("img");
img1x3b_1.setAttribute("src", time1b[0]);

var img1x3b_3 = document.createElement("img");
img1x3b_3.setAttribute("src", time3b[0]);

var jogo_10b_1x3 = document.createElement("li");
jogo_10b_1x3.appendChild(img1x3b_1);
jogo_10b_1x3.appendChild(document.createTextNode(" "));
jogo_10b_1x3.appendChild(input1x3b_1);
jogo_10b_1x3.appendChild(document.createTextNode(" X "));
jogo_10b_1x3.appendChild(input1x3b_3);
jogo_10b_1x3.appendChild(document.createTextNode(" "));
jogo_10b_1x3.appendChild(img1x3b_3);

ulb.appendChild(jogo_10b_1x3);

grupo_b.appendChild(ulb);

// JOGO 3 X 4

var input3x4b_3 = document.createElement("input");
input3x4b_3.setAttribute("id", "input3x4_3");

var input3x4b_4 = document.createElement("input");
input3x4b_4.setAttribute("id", "input3x4_4");

var img3x4b_3 = document.createElement("img");
img3x4b_3.setAttribute("src", time3b[0]);

var img3x4b_4 = document.createElement("img");
img3x4b_4.setAttribute("src", time4b[0]);

var jogo_11b_3x4 = document.createElement("li");
jogo_11b_3x4.appendChild(img3x4b_3);
jogo_11b_3x4.appendChild(document.createTextNode(" "));
jogo_11b_3x4.appendChild(input3x4b_3);
jogo_11b_3x4.appendChild(document.createTextNode(" X "));
jogo_11b_3x4.appendChild(input3x4b_4);
jogo_11b_3x4.appendChild(document.createTextNode(" "));
jogo_11b_3x4.appendChild(img3x4b_4);

ulb.appendChild(jogo_11b_3x4);

grupo_b.appendChild(ulb);

// JOGO 2 X 1

var input2x1b_2 = document.createElement("input");
input2x1b_2.setAttribute("id", "input2x1_2");

var input2x1b_1 = document.createElement("input");
input2x1b_1.setAttribute("id", "input2x1_1");

var img2x1b_2 = document.createElement("img");
img2x1b_2.setAttribute("src", time2b[0]);

var img2x1b_1 = document.createElement("img");
img2x1b_1.setAttribute("src", time1b[0]);

var jogo_12b_2x1 = document.createElement("li");
jogo_12b_2x1.appendChild(img2x1b_2);
jogo_12b_2x1.appendChild(document.createTextNode(" "));
jogo_12b_2x1.appendChild(input2x1b_2);
jogo_12b_2x1.appendChild(document.createTextNode(" X "));
jogo_12b_2x1.appendChild(input2x1b_1);
jogo_12b_2x1.appendChild(document.createTextNode(" "));
jogo_12b_2x1.appendChild(img2x1b_1);

ulb.appendChild(jogo_12b_2x1);

grupo_b.appendChild(ulb);

// JOGO 1 X 2

var ulc = document.createElement("ul")

var grupo_c = document.querySelector(".grupo_c")

var input1x2c_1 = document.createElement("input")
input1x2c_1.setAttribute("id", "input1x2c_1")

var input1x2c_2 = document.createElement("input")
input1x2c_2.setAttribute("id", "input1x2c_2")

var img1x2c_1 = document.createElement("img")
img1x2c_1.setAttribute("src", time1c[0])

var img1x2c_2 = document.createElement("img")
img1x2c_2.setAttribute("src", time2c[0])

var jogo_1c_1x2 = document.createElement("li")
jogo_1c_1x2.appendChild(img1x2c_1)
jogo_1c_1x2.appendChild(document.createTextNode(" "))
jogo_1c_1x2.appendChild(input1x2c_1)
jogo_1c_1x2.appendChild(document.createTextNode(" X "))
jogo_1c_1x2.appendChild(input1x2c_2)
jogo_1c_1x2.appendChild(document.createTextNode(" "))
jogo_1c_1x2.appendChild(img1x2c_2)

ulc.appendChild(jogo_1c_1x2)

grupo_c.appendChild(ulc)

// JOGO 4 X 3

var input4x3c_4 = document.createElement("input");
input4x3c_4.setAttribute("id", "input4x3c_4");

var input4x3c_3 = document.createElement("input");
input4x3c_3.setAttribute("id", "input4x3c_3");

var img4x3c_4 = document.createElement("img");
img4x3c_4.setAttribute("src", time4c[0]);

var img4x3c_3 = document.createElement("img");
img4x3c_3.setAttribute("src", time3c[0]);

var jogo_2c_4x3 = document.createElement("li");
jogo_2c_4x3.appendChild(img4x3c_4);
jogo_2c_4x3.appendChild(document.createTextNode(" "));
jogo_2c_4x3.appendChild(input4x3c_4);
jogo_2c_4x3.appendChild(document.createTextNode(" X "));
jogo_2c_4x3.appendChild(input4x3c_3);
jogo_2c_4x3.appendChild(document.createTextNode(" "));
jogo_2c_4x3.appendChild(img4x3c_3);

ulc.appendChild(jogo_2c_4x3);

grupo_c.appendChild(ulc);

// JOGO 3 X 1

var input3x1c_3 = document.createElement("input");
input3x1c_3.setAttribute("id", "input3x1c_3");

var input3x1c_1 = document.createElement("input");
input3x1c_1.setAttribute("id", "input3x1c_1");

var img3x1c_3 = document.createElement("img");
img3x1c_3.setAttribute("src", time3c[0]);

var img3x1c_1 = document.createElement("img");
img3x1c_1.setAttribute("src", time1c[0]);

var jogo_3c_3x1 = document.createElement("li");
jogo_3c_3x1.appendChild(img3x1c_3);
jogo_3c_3x1.appendChild(document.createTextNode(" "));
jogo_3c_3x1.appendChild(input3x1c_3);
jogo_3c_3x1.appendChild(document.createTextNode(" X "));
jogo_3c_3x1.appendChild(input3x1c_1);
jogo_3c_3x1.appendChild(document.createTextNode(" "));
jogo_3c_3x1.appendChild(img3x1c_1);

ulc.appendChild(jogo_3c_3x1);

grupo_c.appendChild(ulc);

// JOGO 2 X 4

var input2x4c_2 = document.createElement("input");
input2x4c_2.setAttribute("id", "input2x4c_2");

var input2x4c_4 = document.createElement("input");
input2x4c_4.setAttribute("id", "input2x4c_4");

var img2x4c_2 = document.createElement("img");
img2x4c_2.setAttribute("src", time2c[0]);

var img2x4c_4 = document.createElement("img");
img2x4c_4.setAttribute("src", time4c[0]);

var jogo_4c_2x4 = document.createElement("li");
jogo_4c_2x4.appendChild(img2x4c_2);
jogo_4c_2x4.appendChild(document.createTextNode(" "));
jogo_4c_2x4.appendChild(input2x4c_2);
jogo_4c_2x4.appendChild(document.createTextNode(" X "));
jogo_4c_2x4.appendChild(input2x4c_4);
jogo_4c_2x4.appendChild(document.createTextNode(" "));
jogo_4c_2x4.appendChild(img2x4c_4);

ulc.appendChild(jogo_4c_2x4);

grupo_c.appendChild(ulc);

// JOGO 1 X 4

var input1x4c_1 = document.createElement("input");
input1x4c_1.setAttribute("id", "input1x4_1");

var input1x4c_4 = document.createElement("input");
input1x4c_4.setAttribute("id", "input1x4_4");

var img1x4c_1 = document.createElement("img");
img1x4c_1.setAttribute("src", time1c[0]);

var img1x4c_4 = document.createElement("img");
img1x4c_4.setAttribute("src", time4c[0]);

var jogo_5c_1x4 = document.createElement("li");
jogo_5c_1x4.appendChild(img1x4c_1);
jogo_5c_1x4.appendChild(document.createTextNode(" "));
jogo_5c_1x4.appendChild(input1x4c_1);
jogo_5c_1x4.appendChild(document.createTextNode(" X "));
jogo_5c_1x4.appendChild(input1x4c_4);
jogo_5c_1x4.appendChild(document.createTextNode(" "));
jogo_5c_1x4.appendChild(img1x4c_4);

ulc.appendChild(jogo_5c_1x4);

grupo_c.appendChild(ulc);

// JOGO 2 X 3

var input2x3c_2 = document.createElement("input");
input2x3c_2.setAttribute("id", "input2x3_2");

var input2x3c_3 = document.createElement("input");
input2x3c_3.setAttribute("id", "input2x3_3");

var img2x3c_2 = document.createElement("img");
img2x3c_2.setAttribute("src", time2c[0]);

var img2x3c_3 = document.createElement("img");
img2x3c_3.setAttribute("src", time3c[0]);

var jogo_6c_2x3 = document.createElement("li");
jogo_6c_2x3.appendChild(img2x3c_2);
jogo_6c_2x3.appendChild(document.createTextNode(" "));
jogo_6c_2x3.appendChild(input2x3c_2);
jogo_6c_2x3.appendChild(document.createTextNode(" X "));
jogo_6c_2x3.appendChild(input2x3c_3);
jogo_6c_2x3.appendChild(document.createTextNode(" "));
jogo_6c_2x3.appendChild(img2x3c_3);

ulc.appendChild(jogo_6c_2x3);

grupo_c.appendChild(ulc);

// JOGO 3 X 2

var input3x2c_3 = document.createElement("input");
input3x2c_3.setAttribute("id", "input3x2_3");

var input3x2c_2 = document.createElement("input");
input3x2c_2.setAttribute("id", "input3x2_2");

var img3x2c_3 = document.createElement("img");
img3x2c_3.setAttribute("src", time3c[0]);

var img3x2c_2 = document.createElement("img");
img3x2c_2.setAttribute("src", time2c[0]);

var jogo_7c_3x2 = document.createElement("li");
jogo_7c_3x2.appendChild(img3x2c_3);
jogo_7c_3x2.appendChild(document.createTextNode(" "));
jogo_7c_3x2.appendChild(input3x2c_3);
jogo_7c_3x2.appendChild(document.createTextNode(" X "));
jogo_7c_3x2.appendChild(input3x2c_2);
jogo_7c_3x2.appendChild(document.createTextNode(" "));
jogo_7c_3x2.appendChild(img3x2c_2);

ulc.appendChild(jogo_7c_3x2);

grupo_c.appendChild(ulc);

// JOGO 4 X 1

var input4x1c_4 = document.createElement("input");
input4x1c_4.setAttribute("id", "input4x1_4");

var input4x1c_1 = document.createElement("input");
input4x1c_1.setAttribute("id", "input4x1_1");

var img4x1c_4 = document.createElement("img");
img4x1c_4.setAttribute("src", time4c[0]);

var img4x1c_1 = document.createElement("img");
img4x1c_1.setAttribute("src", time1c[0]);

var jogo_8c_4x1 = document.createElement("li");
jogo_8c_4x1.appendChild(img4x1c_4);
jogo_8c_4x1.appendChild(document.createTextNode(" "));
jogo_8c_4x1.appendChild(input4x1c_4);
jogo_8c_4x1.appendChild(document.createTextNode(" X "));
jogo_8c_4x1.appendChild(input4x1c_1);
jogo_8c_4x1.appendChild(document.createTextNode(" "));
jogo_8c_4x1.appendChild(img4x1c_1);

ulc.appendChild(jogo_8c_4x1);

grupo_c.appendChild(ulc);

// JOGO 4 X 2

var input4x2c_4 = document.createElement("input");
input4x2c_4.setAttribute("id", "input4x2_4");

var input4x2c_2 = document.createElement("input");
input4x2c_2.setAttribute("id", "input4x2_2");

var img4x2c_4 = document.createElement("img");
img4x2c_4.setAttribute("src", time4c[0]);

var img4x2c_2 = document.createElement("img");
img4x2c_2.setAttribute("src", time2c[0]);

var jogo_9c_4x2 = document.createElement("li");
jogo_9c_4x2.appendChild(img4x2c_4);
jogo_9c_4x2.appendChild(document.createTextNode(" "));
jogo_9c_4x2.appendChild(input4x2c_4);
jogo_9c_4x2.appendChild(document.createTextNode(" X "));
jogo_9c_4x2.appendChild(input4x2c_2);
jogo_9c_4x2.appendChild(document.createTextNode(" "));
jogo_9c_4x2.appendChild(img4x2c_2);

ulc.appendChild(jogo_9c_4x2);

grupo_c.appendChild(ulc);

// JOGO 1 X 3

var input1x3c_1 = document.createElement("input");
input1x3c_1.setAttribute("id", "input1x3_1");

var input1x3c_3 = document.createElement("input");
input1x3c_3.setAttribute("id", "input1x3_3");

var img1x3c_1 = document.createElement("img");
img1x3c_1.setAttribute("src", time1c[0]);

var img1x3c_3 = document.createElement("img");
img1x3c_3.setAttribute("src", time3c[0]);

var jogo_10c_1x3 = document.createElement("li");
jogo_10c_1x3.appendChild(img1x3c_1);
jogo_10c_1x3.appendChild(document.createTextNode(" "));
jogo_10c_1x3.appendChild(input1x3c_1);
jogo_10c_1x3.appendChild(document.createTextNode(" X "));
jogo_10c_1x3.appendChild(input1x3c_3);
jogo_10c_1x3.appendChild(document.createTextNode(" "));
jogo_10c_1x3.appendChild(img1x3c_3);

ulc.appendChild(jogo_10c_1x3);

grupo_c.appendChild(ulc);

// JOGO 3 X 4

var input3x4c_3 = document.createElement("input");
input3x4c_3.setAttribute("id", "input3x4_3");

var input3x4c_4 = document.createElement("input");
input3x4c_4.setAttribute("id", "input3x4_4");

var img3x4c_3 = document.createElement("img");
img3x4c_3.setAttribute("src", time3c[0]);

var img3x4c_4 = document.createElement("img");
img3x4c_4.setAttribute("src", time4c[0]);

var jogo_11c_3x4 = document.createElement("li");
jogo_11c_3x4.appendChild(img3x4c_3);
jogo_11c_3x4.appendChild(document.createTextNode(" "));
jogo_11c_3x4.appendChild(input3x4c_3);
jogo_11c_3x4.appendChild(document.createTextNode(" X "));
jogo_11c_3x4.appendChild(input3x4c_4);
jogo_11c_3x4.appendChild(document.createTextNode(" "));
jogo_11c_3x4.appendChild(img3x4c_4);

ulc.appendChild(jogo_11c_3x4);

grupo_c.appendChild(ulc);

// JOGO 2 X 1

var input2x1c_2 = document.createElement("input");
input2x1c_2.setAttribute("id", "input2x1_2");

var input2x1c_1 = document.createElement("input");
input2x1c_1.setAttribute("id", "input2x1_1");

var img2x1c_2 = document.createElement("img");
img2x1c_2.setAttribute("src", time2c[0]);

var img2x1c_1 = document.createElement("img");
img2x1c_1.setAttribute("src", time1c[0]);

var jogo_12c_2x1 = document.createElement("li");
jogo_12c_2x1.appendChild(img2x1c_2);
jogo_12c_2x1.appendChild(document.createTextNode(" "));
jogo_12c_2x1.appendChild(input2x1c_2);
jogo_12c_2x1.appendChild(document.createTextNode(" X "));
jogo_12c_2x1.appendChild(input2x1c_1);
jogo_12c_2x1.appendChild(document.createTextNode(" "));
jogo_12c_2x1.appendChild(img2x1c_1);

ulc.appendChild(jogo_12c_2x1);

grupo_c.appendChild(ulc);

// JOGO 1 X 2

var uld = document.createElement("ul")

var grupo_d = document.querySelector(".grupo_d")

var input1x2d_1 = document.createElement("input")
input1x2d_1.setAttribute("id", "input1x2d_1")

var input1x2d_2 = document.createElement("input")
input1x2d_2.setAttribute("id", "input1x2d_2")

var img1x2d_1 = document.createElement("img")
img1x2d_1.setAttribute("src", time1d[0])

var img1x2d_2 = document.createElement("img")
img1x2d_2.setAttribute("src", time2d[0])

var jogo_1d_1x2 = document.createElement("li")
jogo_1d_1x2.appendChild(img1x2d_1)
jogo_1d_1x2.appendChild(document.createTextNode(" "))
jogo_1d_1x2.appendChild(input1x2d_1)
jogo_1d_1x2.appendChild(document.createTextNode(" X "))
jogo_1d_1x2.appendChild(input1x2d_2)
jogo_1d_1x2.appendChild(document.createTextNode(" "))
jogo_1d_1x2.appendChild(img1x2d_2)

uld.appendChild(jogo_1d_1x2)

grupo_d.appendChild(uld)

// JOGO 4 X 3

var input4x3d_4 = document.createElement("input");
input4x3d_4.setAttribute("id", "input4x3d_4");

var input4x3d_3 = document.createElement("input");
input4x3d_3.setAttribute("id", "input4x3d_3");

var img4x3d_4 = document.createElement("img");
img4x3d_4.setAttribute("src", time4d[0]);

var img4x3d_3 = document.createElement("img");
img4x3d_3.setAttribute("src", time3d[0]);

var jogo_2d_4x3 = document.createElement("li");
jogo_2d_4x3.appendChild(img4x3d_4);
jogo_2d_4x3.appendChild(document.createTextNode(" "));
jogo_2d_4x3.appendChild(input4x3d_4);
jogo_2d_4x3.appendChild(document.createTextNode(" X "));
jogo_2d_4x3.appendChild(input4x3d_3);
jogo_2d_4x3.appendChild(document.createTextNode(" "));
jogo_2d_4x3.appendChild(img4x3d_3);

uld.appendChild(jogo_2d_4x3);

grupo_d.appendChild(uld);

// JOGO 3 X 1

var input3x1d_3 = document.createElement("input");
input3x1d_3.setAttribute("id", "input3x1d_3");

var input3x1d_1 = document.createElement("input");
input3x1d_1.setAttribute("id", "input3x1d_1");

var img3x1d_3 = document.createElement("img");
img3x1d_3.setAttribute("src", time3d[0]);

var img3x1d_1 = document.createElement("img");
img3x1d_1.setAttribute("src", time1d[0]);

var jogo_3d_3x1 = document.createElement("li");
jogo_3d_3x1.appendChild(img3x1d_3);
jogo_3d_3x1.appendChild(document.createTextNode(" "));
jogo_3d_3x1.appendChild(input3x1d_3);
jogo_3d_3x1.appendChild(document.createTextNode(" X "));
jogo_3d_3x1.appendChild(input3x1d_1);
jogo_3d_3x1.appendChild(document.createTextNode(" "));
jogo_3d_3x1.appendChild(img3x1d_1);

uld.appendChild(jogo_3d_3x1);

grupo_d.appendChild(uld);

// JOGO 2 X 4

var input2x4d_2 = document.createElement("input");
input2x4d_2.setAttribute("id", "input2x4d_2");

var input2x4d_4 = document.createElement("input");
input2x4d_4.setAttribute("id", "input2x4d_4");

var img2x4d_2 = document.createElement("img");
img2x4d_2.setAttribute("src", time2d[0]);

var img2x4d_4 = document.createElement("img");
img2x4d_4.setAttribute("src", time4d[0]);

var jogo_4d_2x4 = document.createElement("li");
jogo_4d_2x4.appendChild(img2x4d_2);
jogo_4d_2x4.appendChild(document.createTextNode(" "));
jogo_4d_2x4.appendChild(input2x4d_2);
jogo_4d_2x4.appendChild(document.createTextNode(" X "));
jogo_4d_2x4.appendChild(input2x4d_4);
jogo_4d_2x4.appendChild(document.createTextNode(" "));
jogo_4d_2x4.appendChild(img2x4d_4);

uld.appendChild(jogo_4d_2x4);

grupo_d.appendChild(uld);

// JOGO 1 X 4

var input1x4d_1 = document.createElement("input");
input1x4d_1.setAttribute("id", "input1x4_1");

var input1x4d_4 = document.createElement("input");
input1x4d_4.setAttribute("id", "input1x4_4");

var img1x4d_1 = document.createElement("img");
img1x4d_1.setAttribute("src", time1d[0]);

var img1x4d_4 = document.createElement("img");
img1x4d_4.setAttribute("src", time4d[0]);

var jogo_5d_1x4 = document.createElement("li");
jogo_5d_1x4.appendChild(img1x4d_1);
jogo_5d_1x4.appendChild(document.createTextNode(" "));
jogo_5d_1x4.appendChild(input1x4d_1);
jogo_5d_1x4.appendChild(document.createTextNode(" X "));
jogo_5d_1x4.appendChild(input1x4d_4);
jogo_5d_1x4.appendChild(document.createTextNode(" "));
jogo_5d_1x4.appendChild(img1x4d_4);

uld.appendChild(jogo_5d_1x4);

grupo_d.appendChild(uld);

// JOGO 2 X 3

var input2x3d_2 = document.createElement("input");
input2x3d_2.setAttribute("id", "input2x3_2");

var input2x3d_3 = document.createElement("input");
input2x3d_3.setAttribute("id", "input2x3_3");

var img2x3d_2 = document.createElement("img");
img2x3d_2.setAttribute("src", time2d[0]);

var img2x3d_3 = document.createElement("img");
img2x3d_3.setAttribute("src", time3d[0]);

var jogo_6d_2x3 = document.createElement("li");
jogo_6d_2x3.appendChild(img2x3d_2);
jogo_6d_2x3.appendChild(document.createTextNode(" "));
jogo_6d_2x3.appendChild(input2x3d_2);
jogo_6d_2x3.appendChild(document.createTextNode(" X "));
jogo_6d_2x3.appendChild(input2x3d_3);
jogo_6d_2x3.appendChild(document.createTextNode(" "));
jogo_6d_2x3.appendChild(img2x3d_3);

uld.appendChild(jogo_6d_2x3);

grupo_d.appendChild(uld);

// JOGO 3 X 2

var input3x2d_3 = document.createElement("input");
input3x2d_3.setAttribute("id", "input3x2_3");

var input3x2d_2 = document.createElement("input");
input3x2d_2.setAttribute("id", "input3x2_2");

var img3x2d_3 = document.createElement("img");
img3x2d_3.setAttribute("src", time3d[0]);

var img3x2d_2 = document.createElement("img");
img3x2d_2.setAttribute("src", time2d[0]);

var jogo_7d_3x2 = document.createElement("li");
jogo_7d_3x2.appendChild(img3x2d_3);
jogo_7d_3x2.appendChild(document.createTextNode(" "));
jogo_7d_3x2.appendChild(input3x2d_3);
jogo_7d_3x2.appendChild(document.createTextNode(" X "));
jogo_7d_3x2.appendChild(input3x2d_2);
jogo_7d_3x2.appendChild(document.createTextNode(" "));
jogo_7d_3x2.appendChild(img3x2d_2);

uld.appendChild(jogo_7d_3x2);

grupo_d.appendChild(uld);

// JOGO 4 X 1

var input4x1d_4 = document.createElement("input");
input4x1d_4.setAttribute("id", "input4x1_4");

var input4x1d_1 = document.createElement("input");
input4x1d_1.setAttribute("id", "input4x1_1");

var img4x1d_4 = document.createElement("img");
img4x1d_4.setAttribute("src", time4d[0]);

var img4x1d_1 = document.createElement("img");
img4x1d_1.setAttribute("src", time1d[0]);

var jogo_8d_4x1 = document.createElement("li");
jogo_8d_4x1.appendChild(img4x1d_4);
jogo_8d_4x1.appendChild(document.createTextNode(" "));
jogo_8d_4x1.appendChild(input4x1d_4);
jogo_8d_4x1.appendChild(document.createTextNode(" X "));
jogo_8d_4x1.appendChild(input4x1d_1);
jogo_8d_4x1.appendChild(document.createTextNode(" "));
jogo_8d_4x1.appendChild(img4x1d_1);

uld.appendChild(jogo_8d_4x1);

grupo_d.appendChild(uld);

// JOGO 4 X 2

var input4x2d_4 = document.createElement("input");
input4x2d_4.setAttribute("id", "input4x2_4");

var input4x2d_2 = document.createElement("input");
input4x2d_2.setAttribute("id", "input4x2_2");

var img4x2d_4 = document.createElement("img");
img4x2d_4.setAttribute("src", time4d[0]);

var img4x2d_2 = document.createElement("img");
img4x2d_2.setAttribute("src", time2d[0]);

var jogo_9d_4x2 = document.createElement("li");
jogo_9d_4x2.appendChild(img4x2d_4);
jogo_9d_4x2.appendChild(document.createTextNode(" "));
jogo_9d_4x2.appendChild(input4x2d_4);
jogo_9d_4x2.appendChild(document.createTextNode(" X "));
jogo_9d_4x2.appendChild(input4x2d_2);
jogo_9d_4x2.appendChild(document.createTextNode(" "));
jogo_9d_4x2.appendChild(img4x2d_2);

uld.appendChild(jogo_9d_4x2);

grupo_d.appendChild(uld);

// JOGO 1 X 3

var input1x3d_1 = document.createElement("input");
input1x3d_1.setAttribute("id", "input1x3_1");

var input1x3d_3 = document.createElement("input");
input1x3d_3.setAttribute("id", "input1x3_3");

var img1x3d_1 = document.createElement("img");
img1x3d_1.setAttribute("src", time1d[0]);

var img1x3d_3 = document.createElement("img");
img1x3d_3.setAttribute("src", time3d[0]);

var jogo_10d_1x3 = document.createElement("li");
jogo_10d_1x3.appendChild(img1x3d_1);
jogo_10d_1x3.appendChild(document.createTextNode(" "));
jogo_10d_1x3.appendChild(input1x3d_1);
jogo_10d_1x3.appendChild(document.createTextNode(" X "));
jogo_10d_1x3.appendChild(input1x3d_3);
jogo_10d_1x3.appendChild(document.createTextNode(" "));
jogo_10d_1x3.appendChild(img1x3d_3);

uld.appendChild(jogo_10d_1x3);

grupo_d.appendChild(uld);

// JOGO 3 X 4

var input3x4d_3 = document.createElement("input");
input3x4d_3.setAttribute("id", "input3x4_3");

var input3x4d_4 = document.createElement("input");
input3x4d_4.setAttribute("id", "input3x4_4");

var img3x4d_3 = document.createElement("img");
img3x4d_3.setAttribute("src", time3d[0]);

var img3x4d_4 = document.createElement("img");
img3x4d_4.setAttribute("src", time4d[0]);

var jogo_11d_3x4 = document.createElement("li");
jogo_11d_3x4.appendChild(img3x4d_3);
jogo_11d_3x4.appendChild(document.createTextNode(" "));
jogo_11d_3x4.appendChild(input3x4d_3);
jogo_11d_3x4.appendChild(document.createTextNode(" X "));
jogo_11d_3x4.appendChild(input3x4d_4);
jogo_11d_3x4.appendChild(document.createTextNode(" "));
jogo_11d_3x4.appendChild(img3x4d_4);

uld.appendChild(jogo_11d_3x4);

grupo_d.appendChild(uld);

// JOGO 2 X 1

var input2x1d_2 = document.createElement("input");
input2x1d_2.setAttribute("id", "input2x1_2");

var input2x1d_1 = document.createElement("input");
input2x1d_1.setAttribute("id", "input2x1_1");

var img2x1d_2 = document.createElement("img");
img2x1d_2.setAttribute("src", time2d[0]);

var img2x1d_1 = document.createElement("img");
img2x1d_1.setAttribute("src", time1d[0]);

var jogo_12d_2x1 = document.createElement("li");
jogo_12d_2x1.appendChild(img2x1d_2);
jogo_12d_2x1.appendChild(document.createTextNode(" "));
jogo_12d_2x1.appendChild(input2x1d_2);
jogo_12d_2x1.appendChild(document.createTextNode(" X "));
jogo_12d_2x1.appendChild(input2x1d_1);
jogo_12d_2x1.appendChild(document.createTextNode(" "));
jogo_12d_2x1.appendChild(img2x1d_1);

uld.appendChild(jogo_12d_2x1);

grupo_d.appendChild(uld);

// JOGO 1 X 2

var ule = document.createElement("ul")

var grupo_e = document.querySelector(".grupo_e")

var input1x2e_1 = document.createElement("input")
input1x2e_1.setAttribute("id", "input1x2e_1")

var input1x2e_2 = document.createElement("input")
input1x2e_2.setAttribute("id", "input1x2e_2")

var img1x2e_1 = document.createElement("img")
img1x2e_1.setAttribute("src", time1e[0])

var img1x2e_2 = document.createElement("img")
img1x2e_2.setAttribute("src", time2e[0])

var jogo_1e_1x2 = document.createElement("li")
jogo_1e_1x2.appendChild(img1x2e_1)
jogo_1e_1x2.appendChild(document.createTextNode(" "))
jogo_1e_1x2.appendChild(input1x2e_1)
jogo_1e_1x2.appendChild(document.createTextNode(" X "))
jogo_1e_1x2.appendChild(input1x2e_2)
jogo_1e_1x2.appendChild(document.createTextNode(" "))
jogo_1e_1x2.appendChild(img1x2e_2)

ule.appendChild(jogo_1e_1x2)

grupo_e.appendChild(ule)

// JOGO 4 X 3

var input4x3e_4 = document.createElement("input");
input4x3e_4.setAttribute("id", "input4x3e_4");

var input4x3e_3 = document.createElement("input");
input4x3e_3.setAttribute("id", "input4x3e_3");

var img4x3e_4 = document.createElement("img");
img4x3e_4.setAttribute("src", time4e[0]);

var img4x3e_3 = document.createElement("img");
img4x3e_3.setAttribute("src", time3e[0]);

var jogo_2e_4x3 = document.createElement("li");
jogo_2e_4x3.appendChild(img4x3e_4);
jogo_2e_4x3.appendChild(document.createTextNode(" "));
jogo_2e_4x3.appendChild(input4x3e_4);
jogo_2e_4x3.appendChild(document.createTextNode(" X "));
jogo_2e_4x3.appendChild(input4x3e_3);
jogo_2e_4x3.appendChild(document.createTextNode(" "));
jogo_2e_4x3.appendChild(img4x3e_3);

ule.appendChild(jogo_2e_4x3);

grupo_e.appendChild(ule);

// JOGO 3 X 1

var input3x1e_3 = document.createElement("input");
input3x1e_3.setAttribute("id", "input3x1e_3");

var input3x1e_1 = document.createElement("input");
input3x1e_1.setAttribute("id", "input3x1e_1");

var img3x1e_3 = document.createElement("img");
img3x1e_3.setAttribute("src", time3e[0]);

var img3x1e_1 = document.createElement("img");
img3x1e_1.setAttribute("src", time1e[0]);

var jogo_3e_3x1 = document.createElement("li");
jogo_3e_3x1.appendChild(img3x1e_3);
jogo_3e_3x1.appendChild(document.createTextNode(" "));
jogo_3e_3x1.appendChild(input3x1e_3);
jogo_3e_3x1.appendChild(document.createTextNode(" X "));
jogo_3e_3x1.appendChild(input3x1e_1);
jogo_3e_3x1.appendChild(document.createTextNode(" "));
jogo_3e_3x1.appendChild(img3x1e_1);

ule.appendChild(jogo_3e_3x1);

grupo_e.appendChild(ule);

// JOGO 2 X 4

var input2x4e_2 = document.createElement("input");
input2x4e_2.setAttribute("id", "input2x4e_2");

var input2x4e_4 = document.createElement("input");
input2x4e_4.setAttribute("id", "input2x4e_4");

var img2x4e_2 = document.createElement("img");
img2x4e_2.setAttribute("src", time2e[0]);

var img2x4e_4 = document.createElement("img");
img2x4e_4.setAttribute("src", time4e[0]);

var jogo_4e_2x4 = document.createElement("li");
jogo_4e_2x4.appendChild(img2x4e_2);
jogo_4e_2x4.appendChild(document.createTextNode(" "));
jogo_4e_2x4.appendChild(input2x4e_2);
jogo_4e_2x4.appendChild(document.createTextNode(" X "));
jogo_4e_2x4.appendChild(input2x4e_4);
jogo_4e_2x4.appendChild(document.createTextNode(" "));
jogo_4e_2x4.appendChild(img2x4e_4);

ule.appendChild(jogo_4e_2x4);

grupo_e.appendChild(ule);

// JOGO 1 X 4

var input1x4e_1 = document.createElement("input");
input1x4e_1.setAttribute("id", "input1x4_1");

var input1x4e_4 = document.createElement("input");
input1x4e_4.setAttribute("id", "input1x4_4");

var img1x4e_1 = document.createElement("img");
img1x4e_1.setAttribute("src", time1e[0]);

var img1x4e_4 = document.createElement("img");
img1x4e_4.setAttribute("src", time4e[0]);

var jogo_5e_1x4 = document.createElement("li");
jogo_5e_1x4.appendChild(img1x4e_1);
jogo_5e_1x4.appendChild(document.createTextNode(" "));
jogo_5e_1x4.appendChild(input1x4e_1);
jogo_5e_1x4.appendChild(document.createTextNode(" X "));
jogo_5e_1x4.appendChild(input1x4e_4);
jogo_5e_1x4.appendChild(document.createTextNode(" "));
jogo_5e_1x4.appendChild(img1x4e_4);

ule.appendChild(jogo_5e_1x4);

grupo_e.appendChild(ule);

// JOGO 2 X 3

var input2x3e_2 = document.createElement("input");
input2x3e_2.setAttribute("id", "input2x3_2");

var input2x3e_3 = document.createElement("input");
input2x3e_3.setAttribute("id", "input2x3_3");

var img2x3e_2 = document.createElement("img");
img2x3e_2.setAttribute("src", time2e[0]);

var img2x3e_3 = document.createElement("img");
img2x3e_3.setAttribute("src", time3e[0]);

var jogo_6e_2x3 = document.createElement("li");
jogo_6e_2x3.appendChild(img2x3e_2);
jogo_6e_2x3.appendChild(document.createTextNode(" "));
jogo_6e_2x3.appendChild(input2x3e_2);
jogo_6e_2x3.appendChild(document.createTextNode(" X "));
jogo_6e_2x3.appendChild(input2x3e_3);
jogo_6e_2x3.appendChild(document.createTextNode(" "));
jogo_6e_2x3.appendChild(img2x3e_3);

ule.appendChild(jogo_6e_2x3);

grupo_e.appendChild(ule);

// JOGO 3 X 2

var input3x2e_3 = document.createElement("input");
input3x2e_3.setAttribute("id", "input3x2_3");

var input3x2e_2 = document.createElement("input");
input3x2e_2.setAttribute("id", "input3x2_2");

var img3x2e_3 = document.createElement("img");
img3x2e_3.setAttribute("src", time3e[0]);

var img3x2e_2 = document.createElement("img");
img3x2e_2.setAttribute("src", time2e[0]);

var jogo_7e_3x2 = document.createElement("li");
jogo_7e_3x2.appendChild(img3x2e_3);
jogo_7e_3x2.appendChild(document.createTextNode(" "));
jogo_7e_3x2.appendChild(input3x2e_3);
jogo_7e_3x2.appendChild(document.createTextNode(" X "));
jogo_7e_3x2.appendChild(input3x2e_2);
jogo_7e_3x2.appendChild(document.createTextNode(" "));
jogo_7e_3x2.appendChild(img3x2e_2);

ule.appendChild(jogo_7e_3x2);

grupo_e.appendChild(ule);

// JOGO 4 X 1

var input4x1e_4 = document.createElement("input");
input4x1e_4.setAttribute("id", "input4x1_4");

var input4x1e_1 = document.createElement("input");
input4x1e_1.setAttribute("id", "input4x1_1");

var img4x1e_4 = document.createElement("img");
img4x1e_4.setAttribute("src", time4e[0]);

var img4x1e_1 = document.createElement("img");
img4x1e_1.setAttribute("src", time1e[0]);

var jogo_8e_4x1 = document.createElement("li");
jogo_8e_4x1.appendChild(img4x1e_4);
jogo_8e_4x1.appendChild(document.createTextNode(" "));
jogo_8e_4x1.appendChild(input4x1e_4);
jogo_8e_4x1.appendChild(document.createTextNode(" X "));
jogo_8e_4x1.appendChild(input4x1e_1);
jogo_8e_4x1.appendChild(document.createTextNode(" "));
jogo_8e_4x1.appendChild(img4x1e_1);

ule.appendChild(jogo_8e_4x1);

grupo_e.appendChild(ule);

// JOGO 4 X 2

var input4x2e_4 = document.createElement("input");
input4x2e_4.setAttribute("id", "input4x2_4");

var input4x2e_2 = document.createElement("input");
input4x2e_2.setAttribute("id", "input4x2_2");

var img4x2e_4 = document.createElement("img");
img4x2e_4.setAttribute("src", time4e[0]);

var img4x2e_2 = document.createElement("img");
img4x2e_2.setAttribute("src", time2e[0]);

var jogo_9e_4x2 = document.createElement("li");
jogo_9e_4x2.appendChild(img4x2e_4);
jogo_9e_4x2.appendChild(document.createTextNode(" "));
jogo_9e_4x2.appendChild(input4x2e_4);
jogo_9e_4x2.appendChild(document.createTextNode(" X "));
jogo_9e_4x2.appendChild(input4x2e_2);
jogo_9e_4x2.appendChild(document.createTextNode(" "));
jogo_9e_4x2.appendChild(img4x2e_2);

ule.appendChild(jogo_9e_4x2);

grupo_e.appendChild(ule);

// JOGO 1 X 3

var input1x3e_1 = document.createElement("input");
input1x3e_1.setAttribute("id", "input1x3_1");

var input1x3e_3 = document.createElement("input");
input1x3e_3.setAttribute("id", "input1x3_3");

var img1x3e_1 = document.createElement("img");
img1x3e_1.setAttribute("src", time1e[0]);

var img1x3e_3 = document.createElement("img");
img1x3e_3.setAttribute("src", time3e[0]);

var jogo_10e_1x3 = document.createElement("li");
jogo_10e_1x3.appendChild(img1x3e_1);
jogo_10e_1x3.appendChild(document.createTextNode(" "));
jogo_10e_1x3.appendChild(input1x3e_1);
jogo_10e_1x3.appendChild(document.createTextNode(" X "));
jogo_10e_1x3.appendChild(input1x3e_3);
jogo_10e_1x3.appendChild(document.createTextNode(" "));
jogo_10e_1x3.appendChild(img1x3e_3);

ule.appendChild(jogo_10e_1x3);

grupo_e.appendChild(ule);

// JOGO 3 X 4

var input3x4e_3 = document.createElement("input");
input3x4e_3.setAttribute("id", "input3x4_3");

var input3x4e_4 = document.createElement("input");
input3x4e_4.setAttribute("id", "input3x4_4");

var img3x4e_3 = document.createElement("img");
img3x4e_3.setAttribute("src", time3e[0]);

var img3x4e_4 = document.createElement("img");
img3x4e_4.setAttribute("src", time4e[0]);

var jogo_11e_3x4 = document.createElement("li");
jogo_11e_3x4.appendChild(img3x4e_3);
jogo_11e_3x4.appendChild(document.createTextNode(" "));
jogo_11e_3x4.appendChild(input3x4e_3);
jogo_11e_3x4.appendChild(document.createTextNode(" X "));
jogo_11e_3x4.appendChild(input3x4e_4);
jogo_11e_3x4.appendChild(document.createTextNode(" "));
jogo_11e_3x4.appendChild(img3x4e_4);

ule.appendChild(jogo_11e_3x4);

grupo_e.appendChild(ule);

// JOGO 2 X 1

var input2x1e_2 = document.createElement("input");
input2x1e_2.setAttribute("id", "input2x1_2");

var input2x1e_1 = document.createElement("input");
input2x1e_1.setAttribute("id", "input2x1_1");

var img2x1e_2 = document.createElement("img");
img2x1e_2.setAttribute("src", time2e[0]);

var img2x1e_1 = document.createElement("img");
img2x1e_1.setAttribute("src", time1e[0]);

var jogo_12e_2x1 = document.createElement("li");
jogo_12e_2x1.appendChild(img2x1e_2);
jogo_12e_2x1.appendChild(document.createTextNode(" "));
jogo_12e_2x1.appendChild(input2x1e_2);
jogo_12e_2x1.appendChild(document.createTextNode(" X "));
jogo_12e_2x1.appendChild(input2x1e_1);
jogo_12e_2x1.appendChild(document.createTextNode(" "));
jogo_12e_2x1.appendChild(img2x1e_1);

ule.appendChild(jogo_12e_2x1);

grupo_e.appendChild(ule);

// JOGO 1 X 2

var ulf = document.createElement("ul")

var grupo_f = document.querySelector(".grupo_f")

var input1x2f_1 = document.createElement("input")
input1x2f_1.setAttribute("id", "input1x2f_1")

var input1x2f_2 = document.createElement("input")
input1x2f_2.setAttribute("id", "input1x2f_2")

var img1x2f_1 = document.createElement("img")
img1x2f_1.setAttribute("src", time1f[0])

var img1x2f_2 = document.createElement("img")
img1x2f_2.setAttribute("src", time2f[0])

var jogo_1f_1x2 = document.createElement("li")
jogo_1f_1x2.appendChild(img1x2f_1)
jogo_1f_1x2.appendChild(document.createTextNode(" "))
jogo_1f_1x2.appendChild(input1x2f_1)
jogo_1f_1x2.appendChild(document.createTextNode(" X "))
jogo_1f_1x2.appendChild(input1x2f_2)
jogo_1f_1x2.appendChild(document.createTextNode(" "))
jogo_1f_1x2.appendChild(img1x2f_2)

ulf.appendChild(jogo_1f_1x2)

grupo_f.appendChild(ulf)

// JOGO 4 X 3

var input4x3f_4 = document.createElement("input");
input4x3f_4.setAttribute("id", "input4x3f_4");

var input4x3f_3 = document.createElement("input");
input4x3f_3.setAttribute("id", "input4x3f_3");

var img4x3f_4 = document.createElement("img");
img4x3f_4.setAttribute("src", time4f[0]);

var img4x3f_3 = document.createElement("img");
img4x3f_3.setAttribute("src", time3f[0]);

var jogo_2f_4x3 = document.createElement("li");
jogo_2f_4x3.appendChild(img4x3f_4);
jogo_2f_4x3.appendChild(document.createTextNode(" "));
jogo_2f_4x3.appendChild(input4x3f_4);
jogo_2f_4x3.appendChild(document.createTextNode(" X "));
jogo_2f_4x3.appendChild(input4x3f_3);
jogo_2f_4x3.appendChild(document.createTextNode(" "));
jogo_2f_4x3.appendChild(img4x3f_3);

ulf.appendChild(jogo_2f_4x3);

grupo_f.appendChild(ulf);

// JOGO 3 X 1

var input3x1f_3 = document.createElement("input");
input3x1f_3.setAttribute("id", "input3x1f_3");

var input3x1f_1 = document.createElement("input");
input3x1f_1.setAttribute("id", "input3x1f_1");

var img3x1f_3 = document.createElement("img");
img3x1f_3.setAttribute("src", time3f[0]);

var img3x1f_1 = document.createElement("img");
img3x1f_1.setAttribute("src", time1f[0]);

var jogo_3f_3x1 = document.createElement("li");
jogo_3f_3x1.appendChild(img3x1f_3);
jogo_3f_3x1.appendChild(document.createTextNode(" "));
jogo_3f_3x1.appendChild(input3x1f_3);
jogo_3f_3x1.appendChild(document.createTextNode(" X "));
jogo_3f_3x1.appendChild(input3x1f_1);
jogo_3f_3x1.appendChild(document.createTextNode(" "));
jogo_3f_3x1.appendChild(img3x1f_1);

ulf.appendChild(jogo_3f_3x1);

grupo_f.appendChild(ulf);

// JOGO 2 X 4

var input2x4f_2 = document.createElement("input");
input2x4f_2.setAttribute("id", "input2x4f_2");

var input2x4f_4 = document.createElement("input");
input2x4f_4.setAttribute("id", "input2x4f_4");

var img2x4f_2 = document.createElement("img");
img2x4f_2.setAttribute("src", time2f[0]);

var img2x4f_4 = document.createElement("img");
img2x4f_4.setAttribute("src", time4f[0]);

var jogo_4f_2x4 = document.createElement("li");
jogo_4f_2x4.appendChild(img2x4f_2);
jogo_4f_2x4.appendChild(document.createTextNode(" "));
jogo_4f_2x4.appendChild(input2x4f_2);
jogo_4f_2x4.appendChild(document.createTextNode(" X "));
jogo_4f_2x4.appendChild(input2x4f_4);
jogo_4f_2x4.appendChild(document.createTextNode(" "));
jogo_4f_2x4.appendChild(img2x4f_4);

ulf.appendChild(jogo_4f_2x4);

grupo_f.appendChild(ulf);

// JOGO 1 X 4

var input1x4f_1 = document.createElement("input");
input1x4f_1.setAttribute("id", "input1x4_1");

var input1x4f_4 = document.createElement("input");
input1x4f_4.setAttribute("id", "input1x4_4");

var img1x4f_1 = document.createElement("img");
img1x4f_1.setAttribute("src", time1f[0]);

var img1x4f_4 = document.createElement("img");
img1x4f_4.setAttribute("src", time4f[0]);

var jogo_5f_1x4 = document.createElement("li");
jogo_5f_1x4.appendChild(img1x4f_1);
jogo_5f_1x4.appendChild(document.createTextNode(" "));
jogo_5f_1x4.appendChild(input1x4f_1);
jogo_5f_1x4.appendChild(document.createTextNode(" X "));
jogo_5f_1x4.appendChild(input1x4f_4);
jogo_5f_1x4.appendChild(document.createTextNode(" "));
jogo_5f_1x4.appendChild(img1x4f_4);

ulf.appendChild(jogo_5f_1x4);

grupo_f.appendChild(ulf);

// JOGO 2 X 3

var input2x3f_2 = document.createElement("input");
input2x3f_2.setAttribute("id", "input2x3_2");

var input2x3f_3 = document.createElement("input");
input2x3f_3.setAttribute("id", "input2x3_3");

var img2x3f_2 = document.createElement("img");
img2x3f_2.setAttribute("src", time2f[0]);

var img2x3f_3 = document.createElement("img");
img2x3f_3.setAttribute("src", time3f[0]);

var jogo_6f_2x3 = document.createElement("li");
jogo_6f_2x3.appendChild(img2x3f_2);
jogo_6f_2x3.appendChild(document.createTextNode(" "));
jogo_6f_2x3.appendChild(input2x3f_2);
jogo_6f_2x3.appendChild(document.createTextNode(" X "));
jogo_6f_2x3.appendChild(input2x3f_3);
jogo_6f_2x3.appendChild(document.createTextNode(" "));
jogo_6f_2x3.appendChild(img2x3f_3);

ulf.appendChild(jogo_6f_2x3);

grupo_f.appendChild(ulf);

// JOGO 3 X 2

var input3x2f_3 = document.createElement("input");
input3x2f_3.setAttribute("id", "input3x2_3");

var input3x2f_2 = document.createElement("input");
input3x2f_2.setAttribute("id", "input3x2_2");

var img3x2f_3 = document.createElement("img");
img3x2f_3.setAttribute("src", time3f[0]);

var img3x2f_2 = document.createElement("img");
img3x2f_2.setAttribute("src", time2f[0]);

var jogo_7f_3x2 = document.createElement("li");
jogo_7f_3x2.appendChild(img3x2f_3);
jogo_7f_3x2.appendChild(document.createTextNode(" "));
jogo_7f_3x2.appendChild(input3x2f_3);
jogo_7f_3x2.appendChild(document.createTextNode(" X "));
jogo_7f_3x2.appendChild(input3x2f_2);
jogo_7f_3x2.appendChild(document.createTextNode(" "));
jogo_7f_3x2.appendChild(img3x2f_2);

ulf.appendChild(jogo_7f_3x2);

grupo_f.appendChild(ulf);

// JOGO 4 X 1

var input4x1f_4 = document.createElement("input");
input4x1f_4.setAttribute("id", "input4x1_4");

var input4x1f_1 = document.createElement("input");
input4x1f_1.setAttribute("id", "input4x1_1");

var img4x1f_4 = document.createElement("img");
img4x1f_4.setAttribute("src", time4f[0]);

var img4x1f_1 = document.createElement("img");
img4x1f_1.setAttribute("src", time1f[0]);

var jogo_8f_4x1 = document.createElement("li");
jogo_8f_4x1.appendChild(img4x1f_4);
jogo_8f_4x1.appendChild(document.createTextNode(" "));
jogo_8f_4x1.appendChild(input4x1f_4);
jogo_8f_4x1.appendChild(document.createTextNode(" X "));
jogo_8f_4x1.appendChild(input4x1f_1);
jogo_8f_4x1.appendChild(document.createTextNode(" "));
jogo_8f_4x1.appendChild(img4x1f_1);

ulf.appendChild(jogo_8f_4x1);

grupo_f.appendChild(ulf);

// JOGO 4 X 2

var input4x2f_4 = document.createElement("input");
input4x2f_4.setAttribute("id", "input4x2_4");

var input4x2f_2 = document.createElement("input");
input4x2f_2.setAttribute("id", "input4x2_2");

var img4x2f_4 = document.createElement("img");
img4x2f_4.setAttribute("src", time4f[0]);

var img4x2f_2 = document.createElement("img");
img4x2f_2.setAttribute("src", time2f[0]);

var jogo_9f_4x2 = document.createElement("li");
jogo_9f_4x2.appendChild(img4x2f_4);
jogo_9f_4x2.appendChild(document.createTextNode(" "));
jogo_9f_4x2.appendChild(input4x2f_4);
jogo_9f_4x2.appendChild(document.createTextNode(" X "));
jogo_9f_4x2.appendChild(input4x2f_2);
jogo_9f_4x2.appendChild(document.createTextNode(" "));
jogo_9f_4x2.appendChild(img4x2f_2);

ulf.appendChild(jogo_9f_4x2);

grupo_f.appendChild(ulf);

// JOGO 1 X 3

var input1x3f_1 = document.createElement("input");
input1x3f_1.setAttribute("id", "input1x3_1");

var input1x3f_3 = document.createElement("input");
input1x3f_3.setAttribute("id", "input1x3_3");

var img1x3f_1 = document.createElement("img");
img1x3f_1.setAttribute("src", time1f[0]);

var img1x3f_3 = document.createElement("img");
img1x3f_3.setAttribute("src", time3f[0]);

var jogo_10f_1x3 = document.createElement("li");
jogo_10f_1x3.appendChild(img1x3f_1);
jogo_10f_1x3.appendChild(document.createTextNode(" "));
jogo_10f_1x3.appendChild(input1x3f_1);
jogo_10f_1x3.appendChild(document.createTextNode(" X "));
jogo_10f_1x3.appendChild(input1x3f_3);
jogo_10f_1x3.appendChild(document.createTextNode(" "));
jogo_10f_1x3.appendChild(img1x3f_3);

ulf.appendChild(jogo_10f_1x3);

grupo_f.appendChild(ulf);

// JOGO 3 X 4

var input3x4f_3 = document.createElement("input");
input3x4f_3.setAttribute("id", "input3x4_3");

var input3x4f_4 = document.createElement("input");
input3x4f_4.setAttribute("id", "input3x4_4");

var img3x4f_3 = document.createElement("img");
img3x4f_3.setAttribute("src", time3f[0]);

var img3x4f_4 = document.createElement("img");
img3x4f_4.setAttribute("src", time4f[0]);

var jogo_11f_3x4 = document.createElement("li");
jogo_11f_3x4.appendChild(img3x4f_3);
jogo_11f_3x4.appendChild(document.createTextNode(" "));
jogo_11f_3x4.appendChild(input3x4f_3);
jogo_11f_3x4.appendChild(document.createTextNode(" X "));
jogo_11f_3x4.appendChild(input3x4f_4);
jogo_11f_3x4.appendChild(document.createTextNode(" "));
jogo_11f_3x4.appendChild(img3x4f_4);

ulf.appendChild(jogo_11f_3x4);

grupo_f.appendChild(ulf);

// JOGO 2 X 1

var input2x1f_2 = document.createElement("input");
input2x1f_2.setAttribute("id", "input2x1_2");

var input2x1f_1 = document.createElement("input");
input2x1f_1.setAttribute("id", "input2x1_1");

var img2x1f_2 = document.createElement("img");
img2x1f_2.setAttribute("src", time2f[0]);

var img2x1f_1 = document.createElement("img");
img2x1f_1.setAttribute("src", time1f[0]);

var jogo_12f_2x1 = document.createElement("li");
jogo_12f_2x1.appendChild(img2x1f_2);
jogo_12f_2x1.appendChild(document.createTextNode(" "));
jogo_12f_2x1.appendChild(input2x1f_2);
jogo_12f_2x1.appendChild(document.createTextNode(" X "));
jogo_12f_2x1.appendChild(input2x1f_1);
jogo_12f_2x1.appendChild(document.createTextNode(" "));
jogo_12f_2x1.appendChild(img2x1f_1);

ulf.appendChild(jogo_12f_2x1);

grupo_f.appendChild(ulf);

// JOGO 1 X 2

var ulg = document.createElement("ul")

var grupo_g = document.querySelector(".grupo_g")

var input1x2g_1 = document.createElement("input")
input1x2g_1.setAttribute("id", "input1x2g_1")

var input1x2g_2 = document.createElement("input")
input1x2g_2.setAttribute("id", "input1x2g_2")

var img1x2g_1 = document.createElement("img")
img1x2g_1.setAttribute("src", time1g[0])

var img1x2g_2 = document.createElement("img")
img1x2g_2.setAttribute("src", time2g[0])

var jogo_1g_1x2 = document.createElement("li")
jogo_1g_1x2.appendChild(img1x2g_1)
jogo_1g_1x2.appendChild(document.createTextNode(" "))
jogo_1g_1x2.appendChild(input1x2g_1)
jogo_1g_1x2.appendChild(document.createTextNode(" X "))
jogo_1g_1x2.appendChild(input1x2g_2)
jogo_1g_1x2.appendChild(document.createTextNode(" "))
jogo_1g_1x2.appendChild(img1x2g_2)

ulg.appendChild(jogo_1g_1x2)

grupo_g.appendChild(ulg)

// JOGO 4 X 3

var input4x3g_4 = document.createElement("input");
input4x3g_4.setAttribute("id", "input4x3g_4");

var input4x3g_3 = document.createElement("input");
input4x3g_3.setAttribute("id", "input4x3g_3");

var img4x3g_4 = document.createElement("img");
img4x3g_4.setAttribute("src", time4g[0]);

var img4x3g_3 = document.createElement("img");
img4x3g_3.setAttribute("src", time3g[0]);

var jogo_2g_4x3 = document.createElement("li");
jogo_2g_4x3.appendChild(img4x3g_4);
jogo_2g_4x3.appendChild(document.createTextNode(" "));
jogo_2g_4x3.appendChild(input4x3g_4);
jogo_2g_4x3.appendChild(document.createTextNode(" X "));
jogo_2g_4x3.appendChild(input4x3g_3);
jogo_2g_4x3.appendChild(document.createTextNode(" "));
jogo_2g_4x3.appendChild(img4x3g_3);

ulg.appendChild(jogo_2g_4x3);

grupo_g.appendChild(ulg);

// JOGO 3 X 1

var input3x1g_3 = document.createElement("input");
input3x1g_3.setAttribute("id", "input3x1g_3");

var input3x1g_1 = document.createElement("input");
input3x1g_1.setAttribute("id", "input3x1g_1");

var img3x1g_3 = document.createElement("img");
img3x1g_3.setAttribute("src", time3g[0]);

var img3x1g_1 = document.createElement("img");
img3x1g_1.setAttribute("src", time1g[0]);

var jogo_3g_3x1 = document.createElement("li");
jogo_3g_3x1.appendChild(img3x1g_3);
jogo_3g_3x1.appendChild(document.createTextNode(" "));
jogo_3g_3x1.appendChild(input3x1g_3);
jogo_3g_3x1.appendChild(document.createTextNode(" X "));
jogo_3g_3x1.appendChild(input3x1g_1);
jogo_3g_3x1.appendChild(document.createTextNode(" "));
jogo_3g_3x1.appendChild(img3x1g_1);

ulg.appendChild(jogo_3g_3x1);

grupo_g.appendChild(ulg);

// JOGO 2 X 4

var input2x4g_2 = document.createElement("input");
input2x4g_2.setAttribute("id", "input2x4g_2");

var input2x4g_4 = document.createElement("input");
input2x4g_4.setAttribute("id", "input2x4g_4");

var img2x4g_2 = document.createElement("img");
img2x4g_2.setAttribute("src", time2g[0]);

var img2x4g_4 = document.createElement("img");
img2x4g_4.setAttribute("src", time4g[0]);

var jogo_4g_2x4 = document.createElement("li");
jogo_4g_2x4.appendChild(img2x4g_2);
jogo_4g_2x4.appendChild(document.createTextNode(" "));
jogo_4g_2x4.appendChild(input2x4g_2);
jogo_4g_2x4.appendChild(document.createTextNode(" X "));
jogo_4g_2x4.appendChild(input2x4g_4);
jogo_4g_2x4.appendChild(document.createTextNode(" "));
jogo_4g_2x4.appendChild(img2x4g_4);

ulg.appendChild(jogo_4g_2x4);

grupo_g.appendChild(ulg);

// JOGO 1 X 4

var input1x4g_1 = document.createElement("input");
input1x4g_1.setAttribute("id", "input1x4_1");

var input1x4g_4 = document.createElement("input");
input1x4g_4.setAttribute("id", "input1x4_4");

var img1x4g_1 = document.createElement("img");
img1x4g_1.setAttribute("src", time1g[0]);

var img1x4g_4 = document.createElement("img");
img1x4g_4.setAttribute("src", time4g[0]);

var jogo_5g_1x4 = document.createElement("li");
jogo_5g_1x4.appendChild(img1x4g_1);
jogo_5g_1x4.appendChild(document.createTextNode(" "));
jogo_5g_1x4.appendChild(input1x4g_1);
jogo_5g_1x4.appendChild(document.createTextNode(" X "));
jogo_5g_1x4.appendChild(input1x4g_4);
jogo_5g_1x4.appendChild(document.createTextNode(" "));
jogo_5g_1x4.appendChild(img1x4g_4);

ulg.appendChild(jogo_5g_1x4);

grupo_g.appendChild(ulg);

// JOGO 2 X 3

var input2x3g_2 = document.createElement("input");
input2x3g_2.setAttribute("id", "input2x3_2");

var input2x3g_3 = document.createElement("input");
input2x3g_3.setAttribute("id", "input2x3_3");

var img2x3g_2 = document.createElement("img");
img2x3g_2.setAttribute("src", time2g[0]);

var img2x3g_3 = document.createElement("img");
img2x3g_3.setAttribute("src", time3g[0]);

var jogo_6g_2x3 = document.createElement("li");
jogo_6g_2x3.appendChild(img2x3g_2);
jogo_6g_2x3.appendChild(document.createTextNode(" "));
jogo_6g_2x3.appendChild(input2x3g_2);
jogo_6g_2x3.appendChild(document.createTextNode(" X "));
jogo_6g_2x3.appendChild(input2x3g_3);
jogo_6g_2x3.appendChild(document.createTextNode(" "));
jogo_6g_2x3.appendChild(img2x3g_3);

ulg.appendChild(jogo_6g_2x3);

grupo_g.appendChild(ulg);

// JOGO 3 X 2

var input3x2g_3 = document.createElement("input");
input3x2g_3.setAttribute("id", "input3x2_3");

var input3x2g_2 = document.createElement("input");
input3x2g_2.setAttribute("id", "input3x2_2");

var img3x2g_3 = document.createElement("img");
img3x2g_3.setAttribute("src", time3g[0]);

var img3x2g_2 = document.createElement("img");
img3x2g_2.setAttribute("src", time2g[0]);

var jogo_7g_3x2 = document.createElement("li");
jogo_7g_3x2.appendChild(img3x2g_3);
jogo_7g_3x2.appendChild(document.createTextNode(" "));
jogo_7g_3x2.appendChild(input3x2g_3);
jogo_7g_3x2.appendChild(document.createTextNode(" X "));
jogo_7g_3x2.appendChild(input3x2g_2);
jogo_7g_3x2.appendChild(document.createTextNode(" "));
jogo_7g_3x2.appendChild(img3x2g_2);

ulg.appendChild(jogo_7g_3x2);

grupo_g.appendChild(ulg);

// JOGO 4 X 1

var input4x1g_4 = document.createElement("input");
input4x1g_4.setAttribute("id", "input4x1_4");

var input4x1g_1 = document.createElement("input");
input4x1g_1.setAttribute("id", "input4x1_1");

var img4x1g_4 = document.createElement("img");
img4x1g_4.setAttribute("src", time4g[0]);

var img4x1g_1 = document.createElement("img");
img4x1g_1.setAttribute("src", time1g[0]);

var jogo_8g_4x1 = document.createElement("li");
jogo_8g_4x1.appendChild(img4x1g_4);
jogo_8g_4x1.appendChild(document.createTextNode(" "));
jogo_8g_4x1.appendChild(input4x1g_4);
jogo_8g_4x1.appendChild(document.createTextNode(" X "));
jogo_8g_4x1.appendChild(input4x1g_1);
jogo_8g_4x1.appendChild(document.createTextNode(" "));
jogo_8g_4x1.appendChild(img4x1g_1);

ulg.appendChild(jogo_8g_4x1);

grupo_g.appendChild(ulg);

// JOGO 4 X 2

var input4x2g_4 = document.createElement("input");
input4x2g_4.setAttribute("id", "input4x2_4");

var input4x2g_2 = document.createElement("input");
input4x2g_2.setAttribute("id", "input4x2_2");

var img4x2g_4 = document.createElement("img");
img4x2g_4.setAttribute("src", time4g[0]);

var img4x2g_2 = document.createElement("img");
img4x2g_2.setAttribute("src", time2g[0]);

var jogo_9g_4x2 = document.createElement("li");
jogo_9g_4x2.appendChild(img4x2g_4);
jogo_9g_4x2.appendChild(document.createTextNode(" "));
jogo_9g_4x2.appendChild(input4x2g_4);
jogo_9g_4x2.appendChild(document.createTextNode(" X "));
jogo_9g_4x2.appendChild(input4x2g_2);
jogo_9g_4x2.appendChild(document.createTextNode(" "));
jogo_9g_4x2.appendChild(img4x2g_2);

ulg.appendChild(jogo_9g_4x2);

grupo_g.appendChild(ulg);

// JOGO 1 X 3

var input1x3g_1 = document.createElement("input");
input1x3g_1.setAttribute("id", "input1x3_1");

var input1x3g_3 = document.createElement("input");
input1x3g_3.setAttribute("id", "input1x3_3");

var img1x3g_1 = document.createElement("img");
img1x3g_1.setAttribute("src", time1g[0]);

var img1x3g_3 = document.createElement("img");
img1x3g_3.setAttribute("src", time3g[0]);

var jogo_10g_1x3 = document.createElement("li");
jogo_10g_1x3.appendChild(img1x3g_1);
jogo_10g_1x3.appendChild(document.createTextNode(" "));
jogo_10g_1x3.appendChild(input1x3g_1);
jogo_10g_1x3.appendChild(document.createTextNode(" X "));
jogo_10g_1x3.appendChild(input1x3g_3);
jogo_10g_1x3.appendChild(document.createTextNode(" "));
jogo_10g_1x3.appendChild(img1x3g_3);

ulg.appendChild(jogo_10g_1x3);

grupo_g.appendChild(ulg);

// JOGO 3 X 4

var input3x4g_3 = document.createElement("input");
input3x4g_3.setAttribute("id", "input3x4_3");

var input3x4g_4 = document.createElement("input");
input3x4g_4.setAttribute("id", "input3x4_4");

var img3x4g_3 = document.createElement("img");
img3x4g_3.setAttribute("src", time3g[0]);

var img3x4g_4 = document.createElement("img");
img3x4g_4.setAttribute("src", time4g[0]);

var jogo_11g_3x4 = document.createElement("li");
jogo_11g_3x4.appendChild(img3x4g_3);
jogo_11g_3x4.appendChild(document.createTextNode(" "));
jogo_11g_3x4.appendChild(input3x4g_3);
jogo_11g_3x4.appendChild(document.createTextNode(" X "));
jogo_11g_3x4.appendChild(input3x4g_4);
jogo_11g_3x4.appendChild(document.createTextNode(" "));
jogo_11g_3x4.appendChild(img3x4g_4);

ulg.appendChild(jogo_11g_3x4);

grupo_g.appendChild(ulg);

// JOGO 2 X 1

var input2x1g_2 = document.createElement("input");
input2x1g_2.setAttribute("id", "input2x1_2");

var input2x1g_1 = document.createElement("input");
input2x1g_1.setAttribute("id", "input2x1_1");

var img2x1g_2 = document.createElement("img");
img2x1g_2.setAttribute("src", time2g[0]);

var img2x1g_1 = document.createElement("img");
img2x1g_1.setAttribute("src", time1g[0]);

var jogo_12g_2x1 = document.createElement("li");
jogo_12g_2x1.appendChild(img2x1g_2);
jogo_12g_2x1.appendChild(document.createTextNode(" "));
jogo_12g_2x1.appendChild(input2x1g_2);
jogo_12g_2x1.appendChild(document.createTextNode(" X "));
jogo_12g_2x1.appendChild(input2x1g_1);
jogo_12g_2x1.appendChild(document.createTextNode(" "));
jogo_12g_2x1.appendChild(img2x1g_1);

ulg.appendChild(jogo_12g_2x1);

grupo_g.appendChild(ulg);

// JOGO 1 X 2

var ulh = document.createElement("ul")

var grupo_h = document.querySelector(".grupo_h")

var input1x2h_1 = document.createElement("input")
input1x2h_1.setAttribute("id", "input1x2h_1")

var input1x2h_2 = document.createElement("input")
input1x2h_2.setAttribute("id", "input1x2h_2")

var img1x2h_1 = document.createElement("img")
img1x2h_1.setAttribute("src", time1h[0])

var img1x2h_2 = document.createElement("img")
img1x2h_2.setAttribute("src", time2h[0])

var jogo_1h_1x2 = document.createElement("li")
jogo_1h_1x2.appendChild(img1x2h_1)
jogo_1h_1x2.appendChild(document.createTextNode(" "))
jogo_1h_1x2.appendChild(input1x2h_1)
jogo_1h_1x2.appendChild(document.createTextNode(" X "))
jogo_1h_1x2.appendChild(input1x2h_2)
jogo_1h_1x2.appendChild(document.createTextNode(" "))
jogo_1h_1x2.appendChild(img1x2h_2)

ulh.appendChild(jogo_1h_1x2)

grupo_h.appendChild(ulh)

// JOGO 4 X 3

var input4x3h_4 = document.createElement("input");
input4x3h_4.setAttribute("id", "input4x3h_4");

var input4x3h_3 = document.createElement("input");
input4x3h_3.setAttribute("id", "input4x3h_3");

var img4x3h_4 = document.createElement("img");
img4x3h_4.setAttribute("src", time4h[0]);

var img4x3h_3 = document.createElement("img");
img4x3h_3.setAttribute("src", time3h[0]);

var jogo_2h_4x3 = document.createElement("li");
jogo_2h_4x3.appendChild(img4x3h_4);
jogo_2h_4x3.appendChild(document.createTextNode(" "));
jogo_2h_4x3.appendChild(input4x3h_4);
jogo_2h_4x3.appendChild(document.createTextNode(" X "));
jogo_2h_4x3.appendChild(input4x3h_3);
jogo_2h_4x3.appendChild(document.createTextNode(" "));
jogo_2h_4x3.appendChild(img4x3h_3);

ulh.appendChild(jogo_2h_4x3);

grupo_h.appendChild(ulh);

// JOGO 3 X 1

var input3x1h_3 = document.createElement("input");
input3x1h_3.setAttribute("id", "input3x1h_3");

var input3x1h_1 = document.createElement("input");
input3x1h_1.setAttribute("id", "input3x1h_1");

var img3x1h_3 = document.createElement("img");
img3x1h_3.setAttribute("src", time3h[0]);

var img3x1h_1 = document.createElement("img");
img3x1h_1.setAttribute("src", time1h[0]);

var jogo_3h_3x1 = document.createElement("li");
jogo_3h_3x1.appendChild(img3x1h_3);
jogo_3h_3x1.appendChild(document.createTextNode(" "));
jogo_3h_3x1.appendChild(input3x1h_3);
jogo_3h_3x1.appendChild(document.createTextNode(" X "));
jogo_3h_3x1.appendChild(input3x1h_1);
jogo_3h_3x1.appendChild(document.createTextNode(" "));
jogo_3h_3x1.appendChild(img3x1h_1);

ulh.appendChild(jogo_3h_3x1);

grupo_h.appendChild(ulh);

// JOGO 2 X 4

var input2x4h_2 = document.createElement("input");
input2x4h_2.setAttribute("id", "input2x4h_2");

var input2x4h_4 = document.createElement("input");
input2x4h_4.setAttribute("id", "input2x4h_4");

var img2x4h_2 = document.createElement("img");
img2x4h_2.setAttribute("src", time2h[0]);

var img2x4h_4 = document.createElement("img");
img2x4h_4.setAttribute("src", time4h[0]);

var jogo_4h_2x4 = document.createElement("li");
jogo_4h_2x4.appendChild(img2x4h_2);
jogo_4h_2x4.appendChild(document.createTextNode(" "));
jogo_4h_2x4.appendChild(input2x4h_2);
jogo_4h_2x4.appendChild(document.createTextNode(" X "));
jogo_4h_2x4.appendChild(input2x4h_4);
jogo_4h_2x4.appendChild(document.createTextNode(" "));
jogo_4h_2x4.appendChild(img2x4h_4);

ulh.appendChild(jogo_4h_2x4);

grupo_h.appendChild(ulh);

// JOGO 1 X 4

var input1x4h_1 = document.createElement("input");
input1x4h_1.setAttribute("id", "input1x4_1");

var input1x4h_4 = document.createElement("input");
input1x4h_4.setAttribute("id", "input1x4_4");

var img1x4h_1 = document.createElement("img");
img1x4h_1.setAttribute("src", time1h[0]);

var img1x4h_4 = document.createElement("img");
img1x4h_4.setAttribute("src", time4h[0]);

var jogo_5h_1x4 = document.createElement("li");
jogo_5h_1x4.appendChild(img1x4h_1);
jogo_5h_1x4.appendChild(document.createTextNode(" "));
jogo_5h_1x4.appendChild(input1x4h_1);
jogo_5h_1x4.appendChild(document.createTextNode(" X "));
jogo_5h_1x4.appendChild(input1x4h_4);
jogo_5h_1x4.appendChild(document.createTextNode(" "));
jogo_5h_1x4.appendChild(img1x4h_4);

ulh.appendChild(jogo_5h_1x4);

grupo_h.appendChild(ulh);

// JOGO 2 X 3

var input2x3h_2 = document.createElement("input");
input2x3h_2.setAttribute("id", "input2x3_2");

var input2x3h_3 = document.createElement("input");
input2x3h_3.setAttribute("id", "input2x3_3");

var img2x3h_2 = document.createElement("img");
img2x3h_2.setAttribute("src", time2h[0]);

var img2x3h_3 = document.createElement("img");
img2x3h_3.setAttribute("src", time3h[0]);

var jogo_6h_2x3 = document.createElement("li");
jogo_6h_2x3.appendChild(img2x3h_2);
jogo_6h_2x3.appendChild(document.createTextNode(" "));
jogo_6h_2x3.appendChild(input2x3h_2);
jogo_6h_2x3.appendChild(document.createTextNode(" X "));
jogo_6h_2x3.appendChild(input2x3h_3);
jogo_6h_2x3.appendChild(document.createTextNode(" "));
jogo_6h_2x3.appendChild(img2x3h_3);

ulh.appendChild(jogo_6h_2x3);

grupo_h.appendChild(ulh);

// JOGO 3 X 2

var input3x2h_3 = document.createElement("input");
input3x2h_3.setAttribute("id", "input3x2_3");

var input3x2h_2 = document.createElement("input");
input3x2h_2.setAttribute("id", "input3x2_2");

var img3x2h_3 = document.createElement("img");
img3x2h_3.setAttribute("src", time3h[0]);

var img3x2h_2 = document.createElement("img");
img3x2h_2.setAttribute("src", time2h[0]);

var jogo_7h_3x2 = document.createElement("li");
jogo_7h_3x2.appendChild(img3x2h_3);
jogo_7h_3x2.appendChild(document.createTextNode(" "));
jogo_7h_3x2.appendChild(input3x2h_3);
jogo_7h_3x2.appendChild(document.createTextNode(" X "));
jogo_7h_3x2.appendChild(input3x2h_2);
jogo_7h_3x2.appendChild(document.createTextNode(" "));
jogo_7h_3x2.appendChild(img3x2h_2);

ulh.appendChild(jogo_7h_3x2);

grupo_h.appendChild(ulh);

// JOGO 4 X 1

var input4x1h_4 = document.createElement("input");
input4x1h_4.setAttribute("id", "input4x1_4");

var input4x1h_1 = document.createElement("input");
input4x1h_1.setAttribute("id", "input4x1_1");

var img4x1h_4 = document.createElement("img");
img4x1h_4.setAttribute("src", time4h[0]);

var img4x1h_1 = document.createElement("img");
img4x1h_1.setAttribute("src", time1h[0]);

var jogo_8h_4x1 = document.createElement("li");
jogo_8h_4x1.appendChild(img4x1h_4);
jogo_8h_4x1.appendChild(document.createTextNode(" "));
jogo_8h_4x1.appendChild(input4x1h_4);
jogo_8h_4x1.appendChild(document.createTextNode(" X "));
jogo_8h_4x1.appendChild(input4x1h_1);
jogo_8h_4x1.appendChild(document.createTextNode(" "));
jogo_8h_4x1.appendChild(img4x1h_1);

ulh.appendChild(jogo_8h_4x1);

grupo_h.appendChild(ulh);

// JOGO 4 X 2

var input4x2h_4 = document.createElement("input");
input4x2h_4.setAttribute("id", "input4x2_4");

var input4x2h_2 = document.createElement("input");
input4x2h_2.setAttribute("id", "input4x2_2");

var img4x2h_4 = document.createElement("img");
img4x2h_4.setAttribute("src", time4h[0]);

var img4x2h_2 = document.createElement("img");
img4x2h_2.setAttribute("src", time2h[0]);

var jogo_9h_4x2 = document.createElement("li");
jogo_9h_4x2.appendChild(img4x2h_4);
jogo_9h_4x2.appendChild(document.createTextNode(" "));
jogo_9h_4x2.appendChild(input4x2h_4);
jogo_9h_4x2.appendChild(document.createTextNode(" X "));
jogo_9h_4x2.appendChild(input4x2h_2);
jogo_9h_4x2.appendChild(document.createTextNode(" "));
jogo_9h_4x2.appendChild(img4x2h_2);

ulh.appendChild(jogo_9h_4x2);

grupo_h.appendChild(ulh);

// JOGO 1 X 3

var input1x3h_1 = document.createElement("input");
input1x3h_1.setAttribute("id", "input1x3_1");

var input1x3h_3 = document.createElement("input");
input1x3h_3.setAttribute("id", "input1x3_3");

var img1x3h_1 = document.createElement("img");
img1x3h_1.setAttribute("src", time1h[0]);

var img1x3h_3 = document.createElement("img");
img1x3h_3.setAttribute("src", time3h[0]);

var jogo_10h_1x3 = document.createElement("li");
jogo_10h_1x3.appendChild(img1x3h_1);
jogo_10h_1x3.appendChild(document.createTextNode(" "));
jogo_10h_1x3.appendChild(input1x3h_1);
jogo_10h_1x3.appendChild(document.createTextNode(" X "));
jogo_10h_1x3.appendChild(input1x3h_3);
jogo_10h_1x3.appendChild(document.createTextNode(" "));
jogo_10h_1x3.appendChild(img1x3h_3);

ulh.appendChild(jogo_10h_1x3);

grupo_h.appendChild(ulh);

// JOGO 3 X 4

var input3x4h_3 = document.createElement("input");
input3x4h_3.setAttribute("id", "input3x4_3");

var input3x4h_4 = document.createElement("input");
input3x4h_4.setAttribute("id", "input3x4_4");

var img3x4h_3 = document.createElement("img");
img3x4h_3.setAttribute("src", time3h[0]);

var img3x4h_4 = document.createElement("img");
img3x4h_4.setAttribute("src", time4h[0]);

var jogo_11h_3x4 = document.createElement("li");
jogo_11h_3x4.appendChild(img3x4h_3);
jogo_11h_3x4.appendChild(document.createTextNode(" "));
jogo_11h_3x4.appendChild(input3x4h_3);
jogo_11h_3x4.appendChild(document.createTextNode(" X "));
jogo_11h_3x4.appendChild(input3x4h_4);
jogo_11h_3x4.appendChild(document.createTextNode(" "));
jogo_11h_3x4.appendChild(img3x4h_4);

ulh.appendChild(jogo_11h_3x4);

grupo_h.appendChild(ulh);

// JOGO 2 X 1

var input2x1h_2 = document.createElement("input");
input2x1h_2.setAttribute("id", "input2x1_2");

var input2x1h_1 = document.createElement("input");
input2x1h_1.setAttribute("id", "input2x1_1");

var img2x1h_2 = document.createElement("img");
img2x1h_2.setAttribute("src", time2h[0]);

var img2x1h_1 = document.createElement("img");
img2x1h_1.setAttribute("src", time1h[0]);

var jogo_12h_2x1 = document.createElement("li");
jogo_12h_2x1.appendChild(img2x1h_2);
jogo_12h_2x1.appendChild(document.createTextNode(" "));
jogo_12h_2x1.appendChild(input2x1h_2);
jogo_12h_2x1.appendChild(document.createTextNode(" X "));
jogo_12h_2x1.appendChild(input2x1h_1);
jogo_12h_2x1.appendChild(document.createTextNode(" "));
jogo_12h_2x1.appendChild(img2x1h_1);

ulh.appendChild(jogo_12h_2x1);

grupo_h.appendChild(ulh);
























var body = document.querySelector("body")

/*var grupo_a_table = document.querySelector("#grupo_a_table")
var primeiro_a = document.querySelector("#grupo_a_table #primeiro")
var segundo_a = document.querySelector("#segundo")
var terceiro_a = document.querySelector("#terceiro")
var quarto_a = document.querySelector("#quarto")

var btn = document.querySelector("#btn")

console.log(time1a_P)*/

body.addEventListener("click", function() {
    
    var t1aP = 0
    var t1aJ = 0
    var t1aV = 0
    var t1aE = 0
    var t1aD = 0
    var t1aS = 0
    var t1aGP = 0
    var t1aGC = 0
    
    var t2aP = 0
    var t2aJ = 0
    var t2aV = 0
    var t2aE = 0
    var t2aD = 0
    var t2aS = 0
    var t2aGP = 0
    var t2aGC = 0

    var t3aP = 0
    var t3aJ = 0
    var t3aV = 0
    var t3aE = 0
    var t3aD = 0
    var t3aS = 0
    var t3aGP = 0
    var t3aGC = 0

    var t4aP = 0
    var t4aJ = 0
    var t4aV = 0
    var t4aE = 0
    var t4aD = 0
    var t4aS = 0
    var t4aGP = 0
    var t4aGC = 0

    if(input1x2a_1.value != "" && input1x2a_2.value != ""){
        if(input1x2a_1.value > input1x2a_2.value){
            t1aP += 3
            t1aJ += 1
            t1aV += 1
            t1aE += 0
            t1aD += 0
            t1aS += parseInt(input1x2a_1.value)
            t1aS -= parseInt(input1x2a_2.value)
            t1aGP += parseInt(input1x2a_1.value)
            t1aGC += parseInt(input1x2a_2.value)
            
            t2aP += 0
            t2aJ += 1
            t2aV += 0
            t2aE += 0
            t2aD += 1
            t2aS += parseInt(input1x2a_2.value)
            t2aS -= parseInt(input1x2a_1.value)
            t2aGP += parseInt(input1x2a_2.value)
            t2aGC += parseInt(input1x2a_1.value)
        }
        else if(input1x2a_1.value < input1x2a_2.value){
            t1aP += 0
            t1aJ += 1
            t1aV += 0
            t1aE += 0
            t1aD += 1
            t1aS += parseInt(input1x2a_1.value)
            t1aS -= parseInt(input1x2a_2.value)
            t1aGP += parseInt(input1x2a_1.value)
            t1aGC += parseInt(input1x2a_2.value)
            
            t2aP += 3
            t2aJ += 1
            t2aV += 1
            t2aE += 0
            t2aD += 0
            t2aS += parseInt(input1x2a_2.value)
            t2aS -= parseInt(input1x2a_1.value)
            t2aGP += parseInt(input1x2a_2.value)
            t2aGC += parseInt(input1x2a_1.value)
        }
        else if(input1x2a_1.value == input1x2a_2.value){
            t1aP += 1
            t1aJ += 1
            t1aV += 0
            t1aE += 1
            t1aD += 0
            t1aS += parseInt(input1x2a_1.value)
            t1aS -= parseInt(input1x2a_2.value)
            t1aGP += parseInt(input1x2a_1.value)
            t1aGC += parseInt(input1x2a_2.value)
            
            t2aP += 1
            t2aJ += 1
            t2aV += 0
            t2aE += 1
            t2aD += 0
            t2aS += parseInt(input1x2a_2.value)
            t2aS -= parseInt(input1x2a_1.value)
            t2aGP += parseInt(input1x2a_2.value)
            t2aGC += parseInt(input1x2a_1.value)
        }
    }
    if(input4x3a_4.value != "" && input4x3a_3.value != ""){
        if(input4x3a_4.value > input4x3a_3.value){
            t4aP += 3
            t4aJ += 1
            t4aV += 1
            t4aE += 0
            t4aD += 0
            t4aS += parseInt(input4x3a_4.value)
            t4aS -= parseInt(input4x3a_3.value)
            t4aGP += parseInt(input4x3a_4.value)
            t4aGC += parseInt(input4x3a_3.value)
            
            t3aP += 0
            t3aJ += 1
            t3aV += 0
            t3aE += 0
            t3aD += 1
            t3aS += parseInt(input4x3a_3.value)
            t3aS -= parseInt(input4x3a_4.value)
            t3aGP += parseInt(input4x3a_3.value)
            t3aGC += parseInt(input4x3a_4.value)
        }
        else if(input4x3a_4.value < input4x3a_3.value){
            t4aP += 0
            t4aJ += 1
            t4aV += 0
            t4aE += 0
            t4aD += 1
            t4aS += parseInt(input4x3a_4.value)
            t4aS -= parseInt(input4x3a_3.value)
            t4aGP += parseInt(input4x3a_4.value)
            t4aGC += parseInt(input4x3a_3.value)
            
            t3aP += 3
            t3aJ += 1
            t3aV += 1
            t3aE += 0
            t3aD += 0
            t3aS += parseInt(input4x3a_3.value)
            t3aS -= parseInt(input4x3a_4.value)
            t3aGP += parseInt(input4x3a_3.value)
            t3aGC += parseInt(input4x3a_4.value)
        }
        else if(input4x3a_4.value == input4x3a_3.value){
            t4aP += 1
            t4aJ += 1
            t4aV += 0
            t4aE += 1
            t4aD += 0
            t4aS += parseInt(input4x3a_4.value)
            t4aS -= parseInt(input4x3a_3.value)
            t4aGP += parseInt(input4x3a_4.value)
            t4aGC += parseInt(input4x3a_3.value)
            
            t3aP += 1
            t3aJ += 1
            t3aV += 0
            t3aE += 1
            t3aD += 0
            t3aS += parseInt(input4x3a_3.value)
            t3aS -= parseInt(input4x3a_4.value)
            t3aGP += parseInt(input4x3a_3.value)
            t3aGC += parseInt(input4x3a_4.value)
        }
    }
    if(input3x1a_3.value != "" && input3x1a_1.value != ""){
        if(input3x1a_3.value > input3x1a_1.value){
            t3aP += 3
            t3aJ += 1
            t3aV += 1
            t3aE += 0
            t3aD += 0
            t3aS += parseInt(input3x1a_3.value)
            t3aS -= parseInt(input3x1a_1.value)
            t3aGP += parseInt(input3x1a_3.value)
            t3aGC += parseInt(input3x1a_1.value)
            
            t1aP += 0
            t1aJ += 1
            t1aV += 0
            t1aE += 0
            t1aD += 1
            t1aS += parseInt(input3x1a_1.value)
            t1aS -= parseInt(input3x1a_3.value)
            t1aGP += parseInt(input3x1a_1.value)
            t1aGC += parseInt(input3x1a_3.value)
        }
        else if(input3x1a_3.value < input3x1a_1.value){
            t3aP += 0
            t3aJ += 1
            t3aV += 0
            t3aE += 0
            t3aD += 1
            t3aS += parseInt(input3x1a_3.value)
            t3aS -= parseInt(input3x1a_1.value)
            t3aGP += parseInt(input3x1a_3.value)
            t3aGC += parseInt(input3x1a_1.value)
            
            t1aP += 3
            t1aJ += 1
            t1aV += 1
            t1aE += 0
            t1aD += 0
            t1aS += parseInt(input3x1a_1.value)
            t1aS -= parseInt(input3x1a_3.value)
            t1aGP += parseInt(input3x1a_1.value)
            t1aGC += parseInt(input3x1a_3.value)
        }
        else if(input3x1a_3.value == input3x1a_1.value){
            t3aP += 1
            t3aJ += 1
            t3aV += 0
            t3aE += 1
            t3aD += 0
            t3aS += parseInt(input3x1a_3.value)
            t3aS -= parseInt(input3x1a_1.value)
            t3aGP += parseInt(input3x1a_3.value)
            t3aGC += parseInt(input3x1a_1.value)
            
            t1aP += 1
            t1aJ += 1
            t1aV += 0
            t1aE += 1
            t1aD += 0
            t1aS += parseInt(input3x1a_1.value)
            t1aS -= parseInt(input3x1a_3.value)
            t1aGP += parseInt(input3x1a_1.value)
            t1aGC += parseInt(input3x1a_3.value)
        }
    }
    if(input2x4a_2.value != "" && input2x4a_4.value != ""){
        if(input2x4a_2.value > input2x4a_4.value){
            t2aP += 3
            t2aJ += 1
            t2aV += 1
            t2aE += 0
            t2aD += 0
            t2aS += parseInt(input2x4a_2.value)
            t2aS -= parseInt(input2x4a_4.value)
            t2aGP += parseInt(input2x4a_2.value)
            t2aGC += parseInt(input2x4a_4.value)
            
            t4aP += 0
            t4aJ += 1
            t4aV += 0
            t4aE += 0
            t4aD += 1
            t4aS += parseInt(input2x4a_4.value)
            t4aS -= parseInt(input2x4a_2.value)
            t4aGP += parseInt(input2x4a_4.value)
            t4aGC += parseInt(input2x4a_2.value)
        }
        else if(input2x4a_2.value < input2x4a_4.value){
            t2aP += 0
            t2aJ += 1
            t2aV += 0
            t2aE += 0
            t2aD += 1
            t2aS += parseInt(input2x4a_2.value)
            t2aS -= parseInt(input2x4a_4.value)
            t2aGP += parseInt(input2x4a_2.value)
            t2aGC += parseInt(input2x4a_4.value)
            
            t4aP += 3
            t4aJ += 1
            t4aV += 1
            t4aE += 0
            t4aD += 0
            t4aS += parseInt(input2x4a_4.value)
            t4aS -= parseInt(input2x4a_2.value)
            t4aGP += parseInt(input2x4a_4.value)
            t4aGC += parseInt(input2x4a_2.value)
        }
        else if(input2x4a_2.value == input2x4a_4.value){
            t2aP += 1
            t2aJ += 1
            t2aV += 0
            t2aE += 1
            t2aD += 0
            t2aS += parseInt(input2x4a_2.value)
            t2aS -= parseInt(input2x4a_4.value)
            t2aGP += parseInt(input2x4a_2.value)
            t2aGC += parseInt(input2x4a_4.value)
            
            t4aP += 1
            t4aJ += 1
            t4aV += 0
            t4aE += 1
            t4aD += 0
            t4aS += parseInt(input2x4a_4.value)
            t4aS -= parseInt(input2x4a_2.value)
            t4aGP += parseInt(input2x4a_4.value)
            t4aGC += parseInt(input2x4a_2.value)
        }
    }
    if(input1x4a_1.value != "" && input1x4a_4.value != ""){
        if(input1x4a_1.value > input1x4a_4.value){
            t1aP += 3
            t1aJ += 1
            t1aV += 1
            t1aE += 0
            t1aD += 0
            t1aS += parseInt(input1x4a_1.value)
            t1aS -= parseInt(input1x4a_4.value)
            t1aGP += parseInt(input1x4a_1.value)
            t1aGC += parseInt(input1x4a_4.value)
            
            t4aP += 0
            t4aJ += 1
            t4aV += 0
            t4aE += 0
            t4aD += 1
            t4aS += parseInt(input1x4a_4.value)
            t4aS -= parseInt(input1x4a_1.value)
            t4aGP += parseInt(input1x4a_4.value)
            t4aGC += parseInt(input1x4a_1.value)
        }
        else if(input1x4a_1.value < input1x4a_4.value){
            t1aP += 0
            t1aJ += 1
            t1aV += 0
            t1aE += 0
            t1aD += 1
            t1aS += parseInt(input1x4a_1.value)
            t1aS -= parseInt(input1x4a_4.value)
            t1aGP += parseInt(input1x4a_1.value)
            t1aGC += parseInt(input1x4a_4.value)
            
            t4aP += 3
            t4aJ += 1
            t4aV += 1
            t4aE += 0
            t4aD += 0
            t4aS += parseInt(input1x4a_4.value)
            t4aS -= parseInt(input1x4a_1.value)
            t4aGP += parseInt(input1x4a_4.value)
            t4aGC += parseInt(input1x4a_1.value)
        }
        else if(input1x4a_1.value == input1x4a_4.value){
            t1aP += 1
            t1aJ += 1
            t1aV += 0
            t1aE += 1
            t1aD += 0
            t1aS += parseInt(input1x4a_1.value)
            t1aS -= parseInt(input1x4a_4.value)
            t1aGP += parseInt(input1x4a_1.value)
            t1aGC += parseInt(input1x4a_4.value)
            
            t4aP += 1
            t4aJ += 1
            t4aV += 0
            t4aE += 1
            t4aD += 0
            t4aS += parseInt(input1x4a_4.value)
            t4aS -= parseInt(input1x4a_1.value)
            t4aGP += parseInt(input1x4a_4.value)
            t4aGC += parseInt(input1x4a_1.value)
        }
    }
    if(input2x3a_2.value != "" && input2x3a_3.value != ""){
        if(input2x3a_2.value > input2x3a_3.value){
            t2aP += 3
            t2aJ += 1
            t2aV += 1
            t2aE += 0
            t2aD += 0
            t2aS += parseInt(input2x3a_2.value)
            t2aS -= parseInt(input2x3a_3.value)
            t2aGP += parseInt(input2x3a_2.value)
            t2aGC += parseInt(input2x3a_3.value)
            
            t3aP += 0
            t3aJ += 1
            t3aV += 0
            t3aE += 0
            t3aD += 1
            t3aS += parseInt(input2x3a_3.value)
            t3aS -= parseInt(input2x3a_2.value)
            t3aGP += parseInt(input2x3a_3.value)
            t3aGC += parseInt(input2x3a_2.value)
        }
        else if(input2x3a_2.value < input2x3a_3.value){
            t2aP += 0
            t2aJ += 1
            t2aV += 0
            t2aE += 0
            t2aD += 1
            t2aS += parseInt(input2x3a_2.value)
            t2aS -= parseInt(input2x3a_3.value)
            t2aGP += parseInt(input2x3a_2.value)
            t2aGC += parseInt(input2x3a_3.value)
            
            t3aP += 3
            t3aJ += 1
            t3aV += 1
            t3aE += 0
            t3aD += 0
            t3aS += parseInt(input2x3a_3.value)
            t3aS -= parseInt(input2x3a_2.value)
            t3aGP += parseInt(input2x3a_3.value)
            t3aGC += parseInt(input2x3a_2.value)
        }
        else if(input2x3a_2.value == input2x3a_3.value){
            t2aP += 1
            t2aJ += 1
            t2aV += 0
            t2aE += 1
            t2aD += 0
            t2aS += parseInt(input2x3a_2.value)
            t2aS -= parseInt(input2x3a_3.value)
            t2aGP += parseInt(input2x3a_2.value)
            t2aGC += parseInt(input2x3a_3.value)
            
            t3aP += 1
            t3aJ += 1
            t3aV += 0
            t3aE += 1
            t3aD += 0
            t3aS += parseInt(input2x3a_3.value)
            t3aS -= parseInt(input2x3a_2.value)
            t3aGP += parseInt(input2x3a_3.value)
            t3aGC += parseInt(input2x3a_2.value)
        }
    }
    if(input3x2a_3.value != "" && input3x2a_2.value != ""){
        if(input3x2a_3.value > input3x2a_2.value){
            t3aP += 3
            t3aJ += 1
            t3aV += 1
            t3aE += 0
            t3aD += 0
            t3aS += parseInt(input3x2a_3.value)
            t3aS -= parseInt(input3x2a_2.value)
            t3aGP += parseInt(input3x2a_3.value)
            t3aGC += parseInt(input3x2a_2.value)
            
            t2aP += 0
            t2aJ += 1
            t2aV += 0
            t2aE += 0
            t2aD += 1
            t2aS += parseInt(input3x2a_2.value)
            t2aS -= parseInt(input3x2a_3.value)
            t2aGP += parseInt(input3x2a_2.value)
            t2aGC += parseInt(input3x2a_3.value)
        }
        else if(input3x2a_3.value < input3x2a_2.value){
            t3aP += 0
            t3aJ += 1
            t3aV += 0
            t3aE += 0
            t3aD += 1
            t3aS += parseInt(input3x2a_3.value)
            t3aS -= parseInt(input3x2a_2.value)
            t3aGP += parseInt(input3x2a_3.value)
            t3aGC += parseInt(input3x2a_2.value)
        
            t2aP += 3
            t2aJ += 1
            t2aV += 1
            t2aE += 0
            t2aD += 0
            t2aS += parseInt(input3x2a_2.value)
            t2aS -= parseInt(input3x2a_3.value)
            t2aGP += parseInt(input3x2a_2.value)
            t2aGC += parseInt(input3x2a_3.value)
        }
        else if(input3x2a_3.value == input3x2a_2.value){
            t3aP += 1
            t3aJ += 1
            t3aV += 0
            t3aE += 1
            t3aD += 0
            t3aS += parseInt(input3x2a_3.value)
            t3aS -= parseInt(input3x2a_2.value)
            t3aGP += parseInt(input3x2a_3.value)
            t3aGC += parseInt(input3x2a_2.value)
            
            t2aP += 1
            t2aJ += 1
            t2aV += 0
            t2aE += 1
            t2aD += 0
            t2aS += parseInt(input3x2a_2.value)
            t2aS -= parseInt(input3x2a_3.value)
            t2aGP += parseInt(input3x2a_2.value)
            t2aGC += parseInt(input3x2a_3.value)
        }
    }
    if(input4x1a_4.value != "" && input4x1a_1.value != ""){
        if(input4x1a_4.value > input4x1a_1.value){
            t4aP += 3
            t4aJ += 1
            t4aV += 1
            t4aE += 0
            t4aD += 0
            t4aS += parseInt(input4x1a_4.value)
            t4aS -= parseInt(input4x1a_1.value)
            t4aGP += parseInt(input4x1a_4.value)
            t4aGC += parseInt(input4x1a_1.value)
            
            t1aP += 0
            t1aJ += 1
            t1aV += 0
            t1aE += 0
            t1aD += 1
            t1aS += parseInt(input4x1a_1.value)
            t1aS -= parseInt(input4x1a_4.value)
            t1aGP += parseInt(input4x1a_1.value)
            t1aGC += parseInt(input4x1a_4.value)
        }
        else if(input4x1a_4.value < input4x1a_1.value){
            t4aP += 0
            t4aJ += 1
            t4aV += 0
            t4aE += 0
            t4aD += 1
            t4aS += parseInt(input4x1a_4.value)
            t4aS -= parseInt(input4x1a_1.value)
            t4aGP += parseInt(input4x1a_4.value)
            t4aGC += parseInt(input4x1a_1.value)
            
            t1aP += 3
            t1aJ += 1
            t1aV += 1
            t1aE += 0
            t1aD += 0
            t1aS += parseInt(input4x1a_1.value)
            t1aS -= parseInt(input4x1a_4.value)
            t1aGP += parseInt(input4x1a_1.value)
            t1aGC += parseInt(input4x1a_4.value)
        }
        else if(input4x1a_4.value == input4x1a_1.value){
            t4aP += 1
            t4aJ += 1
            t4aV += 0
            t4aE += 1
            t4aD += 0
            t4aS += parseInt(input4x1a_4.value)
            t4aS -= parseInt(input4x1a_1.value)
            t4aGP += parseInt(input4x1a_4.value)
            t4aGC += parseInt(input4x1a_1.value)
            
            t1aP += 1
            t1aJ += 1
            t1aV += 0
            t1aE += 1
            t1aD += 0
            t1aS += parseInt(input4x1a_1.value)
            t1aS -= parseInt(input4x1a_4.value)
            t1aGP += parseInt(input4x1a_1.value)
            t1aGC += parseInt(input4x1a_4.value)
        }
    }
    if(input4x2a_4.value != "" && input4x2a_2.value != ""){
        if(input4x2a_4.value > input4x2a_2.value){
            t4aP += 3
            t4aJ += 1
            t4aV += 1
            t4aE += 0
            t4aD += 0
            t4aS += parseInt(input4x2a_4.value)
            t4aS -= parseInt(input4x2a_2.value)
            t4aGP += parseInt(input4x2a_4.value)
            t4aGC += parseInt(input4x2a_2.value)
            
            t2aP += 0
            t2aJ += 1
            t2aV += 0
            t2aE += 0
            t2aD += 1
            t2aS += parseInt(input4x2a_2.value)
            t2aS -= parseInt(input4x2a_4.value)
            t2aGP += parseInt(input4x2a_2.value)
            t2aGC += parseInt(input4x2a_4.value)
        }
        else if(input4x2a_4.value < input4x2a_2.value){
            t4aP += 0
            t4aJ += 1
            t4aV += 0
            t4aE += 0
            t4aD += 1
            t4aS += parseInt(input4x2a_4.value)
            t4aS -= parseInt(input4x2a_2.value)
            t4aGP += parseInt(input4x2a_4.value)
            t4aGC += parseInt(input4x2a_2.value)
            
            t2aP += 3
            t2aJ += 1
            t2aV += 1
            t2aE += 0
            t2aD += 0
            t2aS += parseInt(input4x2a_2.value)
            t2aS -= parseInt(input4x2a_4.value)
            t2aGP += parseInt(input4x2a_2.value)
            t2aGC += parseInt(input4x2a_4.value)
        }
        else if(input4x2a_4.value == input4x2a_2.value){
            t4aP += 1
            t4aJ += 1
            t4aV += 0
            t4aE += 1
            t4aD += 0
            t4aS += parseInt(input4x2a_4.value)
            t4aS -= parseInt(input4x2a_2.value)
            t4aGP += parseInt(input4x2a_4.value)
            t4aGC += parseInt(input4x2a_2.value)
            
            t2aP += 1
            t2aJ += 1
            t2aV += 0
            t2aE += 1
            t2aD += 0
            t2aS += parseInt(input4x2a_2.value)
            t2aS -= parseInt(input4x2a_4.value)
            t2aGP += parseInt(input4x2a_2.value)
            t2aGC += parseInt(input4x2a_4.value)
        }
    }
    if(input1x3a_1.value != "" && input1x3a_3.value != ""){
        if(input1x3a_1.value > input1x3a_3.value){
            t1aP += 3
            t1aJ += 1
            t1aV += 1
            t1aE += 0
            t1aD += 0
            t1aS += parseInt(input1x3a_1.value)
            t1aS -= parseInt(input1x3a_3.value)
            t1aGP += parseInt(input1x3a_1.value)
            t1aGC += parseInt(input1x3a_3.value)
            
            t3aP += 0
            t3aJ += 1
            t3aV += 0
            t3aE += 0
            t3aD += 1
            t3aS += parseInt(input1x3a_3.value)
            t3aS -= parseInt(input1x3a_1.value)
            t3aGP += parseInt(input1x3a_3.value)
            t3aGC += parseInt(input1x3a_1.value)
        }
        else if(input1x3a_1.value < input1x3a_3.value){
            t1aP += 0
            t1aJ += 1
            t1aV += 0
            t1aE += 0
            t1aD += 1
            t1aS += parseInt(input1x3a_1.value)
            t1aS -= parseInt(input1x3a_3.value)
            t1aGP += parseInt(input1x3a_1.value)
            t1aGC += parseInt(input1x3a_3.value)
            
            t3aP += 3
            t3aJ += 1
            t3aV += 1
            t3aE += 0
            t3aD += 0
            t3aS += parseInt(input1x3a_3.value)
            t3aS -= parseInt(input1x3a_1.value)
            t3aGP += parseInt(input1x3a_3.value)
            t3aGC += parseInt(input1x3a_1.value)
        }
        else if(input1x3a_1.value == input1x3a_3.value){
            t1aP += 1
            t1aJ += 1
            t1aV += 0
            t1aE += 1
            t1aD += 0
            t1aS += parseInt(input1x3a_1.value)
            t1aS -= parseInt(input1x3a_3.value)
            t1aGP += parseInt(input1x3a_1.value)
            t1aGC += parseInt(input1x3a_3.value)
            
            t3aP += 1
            t3aJ += 1
            t3aV += 0
            t3aE += 1
            t3aD += 0
            t3aS += parseInt(input1x3a_3.value)
            t3aS -= parseInt(input1x3a_1.value)
            t3aGP += parseInt(input1x3a_3.value)
            t3aGC += parseInt(input1x3a_1.value)
        }
    }
    if(input3x4a_3.value != "" && input3x4a_4.value != ""){
        if(input3x4a_3.value > input3x4a_4.value){
            t3aP += 3
            t3aJ += 1
            t3aV += 1
            t3aE += 0
            t3aD += 0
            t3aS += parseInt(input3x4a_3.value)
            t3aS -= parseInt(input3x4a_4.value)
            t3aGP += parseInt(input3x4a_3.value)
            t3aGC += parseInt(input3x4a_4.value)
            
            t4aP += 0
            t4aJ += 1
            t4aV += 0
            t4aE += 0
            t4aD += 1
            t4aS += parseInt(input3x4a_4.value)
            t4aS -= parseInt(input3x4a_3.value)
            t4aGP += parseInt(input3x4a_4.value)
            t4aGC += parseInt(input3x4a_3.value)
        }
        else if(input3x4a_3.value < input3x4a_4.value){
            t3aP += 0
            t3aJ += 1
            t3aV += 0
            t3aE += 0
            t3aD += 1
            t3aS += parseInt(input3x4a_3.value)
            t3aS -= parseInt(input3x4a_4.value)
            t3aGP += parseInt(input3x4a_3.value)
            t3aGC += parseInt(input3x4a_4.value)
            
            t4aP += 3
            t4aJ += 1
            t4aV += 1
            t4aE += 0
            t4aD += 0
            t4aS += parseInt(input3x4a_4.value)
            t4aS -= parseInt(input3x4a_3.value)
            t4aGP += parseInt(input3x4a_4.value)
            t4aGC += parseInt(input3x4a_3.value)
        }
        else if(input3x4a_3.value == input3x4a_4.value){
            t3aP += 1
            t3aJ += 1
            t3aV += 0
            t3aE += 1
            t3aD += 0
            t3aS += parseInt(input3x4a_3.value)
            t3aS -= parseInt(input3x4a_4.value)
            t3aGP += parseInt(input3x4a_3.value)
            t3aGC += parseInt(input3x4a_4.value)
            
            t4aP += 1
            t4aJ += 1
            t4aV += 0
            t4aE += 1
            t4aD += 0
            t4aS += parseInt(input3x4a_4.value)
            t4aS -= parseInt(input3x4a_3.value)
            t4aGP += parseInt(input3x4a_4.value)
            t4aGC += parseInt(input3x4a_3.value)
        }
    }
    if(input2x1a_2.value != "" && input2x1a_1.value != ""){
        if(input2x1a_2.value > input2x1a_1.value){
            t2aP += 3
            t2aJ += 1
            t2aV += 1
            t2aE += 0
            t2aD += 0
            t2aS += parseInt(input2x1a_2.value)
            t2aS -= parseInt(input2x1a_1.value)
            t2aGP += parseInt(input2x1a_2.value)
            t2aGC += parseInt(input2x1a_1.value)
            
            t1aP += 0
            t1aJ += 1
            t1aV += 0
            t1aE += 0
            t1aD += 1
            t1aS += parseInt(input2x1a_1.value)
            t1aS -= parseInt(input2x1a_2.value)
            t1aGP += parseInt(input2x1a_1.value)
            t1aGC += parseInt(input2x1a_2.value)
        }
        else if(input2x1a_2.value < input2x1a_1.value){
            t2aP += 0
            t2aJ += 1
            t2aV += 0
            t2aE += 0
            t2aD += 1
            t2aS += parseInt(input2x1a_2.value)
            t2aS -= parseInt(input2x1a_1.value)
            t2aGP += parseInt(input2x1a_2.value)
            t2aGC += parseInt(input2x1a_1.value)
            
            t1aP += 3
            t1aJ += 1
            t1aV += 1
            t1aE += 0
            t1aD += 0
            t1aS += parseInt(input2x1a_1.value)
            t1aS -= parseInt(input2x1a_2.value)
            t1aGP += parseInt(input2x1a_1.value)
            t1aGC += parseInt(input2x1a_2.value)
        }
        else if(input2x1a_2.value == input2x1a_1.value){
            t2aP += 1
            t2aJ += 1
            t2aV += 0
            t2aE += 1
            t2aD += 0
            t2aS += parseInt(input2x1a_2.value)
            t2aS -= parseInt(input2x1a_1.value)
            t2aGP += parseInt(input2x1a_2.value)
            t2aGC += parseInt(input2x1a_1.value)
            
            t1aP += 1
            t1aJ += 1
            t1aV += 0
            t1aE += 1
            t1aD += 0
            t1aS += parseInt(input2x1a_1.value)
            t1aS -= parseInt(input2x1a_2.value)
            t1aGP += parseInt(input2x1a_1.value)
            t1aGC += parseInt(input2x1a_2.value)
        }
    }

    var array_time1 = [time1a[1],
                        t1aP,
                        t1aJ,
                        t1aV,
                        t1aE,
                        t1aD,
                        t1aS,
                        t1aGP,
                        t1aGC
                    ]
    var array_time2 = [time2a[1],
                        t2aP,
                        t2aJ,
                        t2aV,
                        t2aE,
                        t2aD,
                        t2aS,
                        t2aGP,
                        t2aGC
                    ]
    var array_time3 = [time3a[1],
                        t3aP,
                        t3aJ,
                        t3aV,
                        t3aE,
                        t3aD,
                        t3aS,
                        t3aGP,
                        t3aGC
                    ]
    var array_time4 = [time4a[1],
                        t4aP,
                        t4aJ,
                        t4aV,
                        t4aE,
                        t4aD,
                        t4aS,
                        t4aGP,
                        t4aGC
                    ]
    var matriz = [array_time1, array_time2, array_time3, array_time4]
    var matrizajustada = ajuste(matriz)

    console.log(matrizajustada)

    // CRIANDO TIME 1 A
    var time1a_nome = document.querySelector("#time1a_nome")
    time1a_nome.textContent = " " + (matrizajustada[0][0].toUpperCase())
    var time1a_img = document.querySelector("#time1a_img")
    time1a_img.src = matrizajustada[0][0] + ".png"
    var time1a_P = document.querySelector("#time1a_P")
    time1a_P.textContent = matrizajustada[0][1]
    var time1a_J = document.querySelector("#time1a_J")
    time1a_J.textContent = matrizajustada[0][2]
    var time1a_V = document.querySelector("#time1a_V")
    time1a_V.textContent = matrizajustada[0][3]
    var time1a_E = document.querySelector("#time1a_E")
    time1a_E.textContent = matrizajustada[0][4]
    var time1a_D = document.querySelector("#time1a_D")
    time1a_D.textContent = matrizajustada[0][5]
    var time1a_S = document.querySelector("#time1a_S")
    time1a_S.textContent = matrizajustada[0][6]
    var time1a_GP = document.querySelector("#time1a_GP")
    time1a_GP.textContent = matrizajustada[0][7]
    var time1a_GC = document.querySelector("#time1a_GC")
    time1a_GC.textContent = matrizajustada[0][8]

    // CRIANDO TIME 2 A

    var time2a_nome = document.querySelector("#time2a_nome")
    time2a_nome.textContent = " " + matrizajustada[1][0].toUpperCase()
    var time2a_img = document.querySelector("#time2a_img")
    time2a_img.src = matrizajustada[1][0] + ".png"
    var time2a_P = document.querySelector("#time2a_P")
    time2a_P.textContent = matrizajustada[1][1]
    var time2a_J = document.querySelector("#time2a_J")
    time2a_J.textContent = matrizajustada[1][2]
    var time2a_V = document.querySelector("#time2a_V")
    time2a_V.textContent = matrizajustada[1][3]
    var time2a_E = document.querySelector("#time2a_E")
    time2a_E.textContent = matrizajustada[1][4]
    var time2a_D = document.querySelector("#time2a_D")
    time2a_D.textContent = matrizajustada[1][5]
    var time2a_S = document.querySelector("#time2a_S")
    time2a_S.textContent = matrizajustada[1][6]
    var time2a_GP = document.querySelector("#time2a_GP")
    time2a_GP.textContent = matrizajustada[1][7]
    var time2a_GC = document.querySelector("#time2a_GC")
    time2a_GC.textContent = matrizajustada[1][8]

    // CRIANDO TIME 3 A

    var time3a_nome = document.querySelector("#time3a_nome")
    time3a_nome.textContent = " " + matrizajustada[2][0].toUpperCase()
    var time3a_img = document.querySelector("#time3a_img")
    time3a_img.src = matrizajustada[2][0] + ".png"
    var time3a_P = document.querySelector("#time3a_P")
    time3a_P.textContent = matrizajustada[2][1]
    var time3a_J = document.querySelector("#time3a_J")
    time3a_J.textContent = matrizajustada[2][2]
    var time3a_V = document.querySelector("#time3a_V")
    time3a_V.textContent = matrizajustada[2][3]
    var time3a_E = document.querySelector("#time3a_E")
    time3a_E.textContent = matrizajustada[2][4]
    var time3a_D = document.querySelector("#time3a_D")
    time3a_D.textContent = matrizajustada[2][5]
    var time3a_S = document.querySelector("#time3a_S")
    time3a_S.textContent = matrizajustada[2][6]
    var time3a_GP = document.querySelector("#time3a_GP")
    time3a_GP.textContent = matrizajustada[2][7]
    var time3a_GC = document.querySelector("#time3a_GC")
    time3a_GC.textContent = matrizajustada[2][8]

    // CRIANDO TIME 4 A

    var time4a_nome = document.querySelector("#time4a_nome")
    time4a_nome.textContent = " " + matrizajustada[3][0].toUpperCase()
    var time4a_img = document.querySelector("#time4a_img")
    time4a_img.src = matrizajustada[3][0] + ".png"
    var time4a_P = document.querySelector("#time4a_P")
    time4a_P.textContent = matrizajustada[3][1]
    var time4a_J = document.querySelector("#time4a_J")
    time4a_J.textContent = matrizajustada[3][2]
    var time4a_V = document.querySelector("#time4a_V")
    time4a_V.textContent = matrizajustada[3][3]
    var time4a_E = document.querySelector("#time4a_E")
    time4a_E.textContent = matrizajustada[3][4]
    var time4a_D = document.querySelector("#time4a_D")
    time4a_D.textContent = matrizajustada[3][5]
    var time4a_S = document.querySelector("#time4a_S")
    time4a_S.textContent = matrizajustada[3][6]
    var time4a_GP = document.querySelector("#time4a_GP")
    time4a_GP.textContent = matrizajustada[3][7]
    var time4a_GC = document.querySelector("#time4a_GC")
    time4a_GC.textContent = matrizajustada[3][8]

    var t1bP = 0
    var t1bJ = 0
    var t1bV = 0
    var t1bE = 0
    var t1bD = 0
    var t1bS = 0
    var t1bGP = 0
    var t1bGC = 0
    
    var t2bP = 0
    var t2bJ = 0
    var t2bV = 0
    var t2bE = 0
    var t2bD = 0
    var t2bS = 0
    var t2bGP = 0
    var t2bGC = 0

    var t3bP = 0
    var t3bJ = 0
    var t3bV = 0
    var t3bE = 0
    var t3bD = 0
    var t3bS = 0
    var t3bGP = 0
    var t3bGC = 0

    var t4bP = 0
    var t4bJ = 0
    var t4bV = 0
    var t4bE = 0
    var t4bD = 0
    var t4bS = 0
    var t4bGP = 0
    var t4bGC = 0

    if(input1x2b_1.value != "" && input1x2b_2.value != ""){
        if(input1x2b_1.value > input1x2b_2.value){
            t1bP += 3
            t1bJ += 1
            t1bV += 1
            t1bE += 0
            t1bD += 0
            t1bS += parseInt(input1x2b_1.value)
            t1bS -= parseInt(input1x2b_2.value)
            t1bGP += parseInt(input1x2b_1.value)
            t1bGC += parseInt(input1x2b_2.value)
            
            t2bP += 0
            t2bJ += 1
            t2bV += 0
            t2bE += 0
            t2bD += 1
            t2bS += parseInt(input1x2b_2.value)
            t2bS -= parseInt(input1x2b_1.value)
            t2bGP += parseInt(input1x2b_2.value)
            t2bGC += parseInt(input1x2b_1.value)
        }
        else if(input1x2b_1.value < input1x2b_2.value){
            t1bP += 0
            t1bJ += 1
            t1bV += 0
            t1bE += 0
            t1bD += 1
            t1bS += parseInt(input1x2b_1.value)
            t1bS -= parseInt(input1x2b_2.value)
            t1bGP += parseInt(input1x2b_1.value)
            t1bGC += parseInt(input1x2b_2.value)
            
            t2bP += 3
            t2bJ += 1
            t2bV += 1
            t2bE += 0
            t2bD += 0
            t2bS += parseInt(input1x2b_2.value)
            t2bS -= parseInt(input1x2b_1.value)
            t2bGP += parseInt(input1x2b_2.value)
            t2bGC += parseInt(input1x2b_1.value)
        }
        else if(input1x2b_1.value == input1x2b_2.value){
            t1bP += 1
            t1bJ += 1
            t1bV += 0
            t1bE += 1
            t1bD += 0
            t1bS += parseInt(input1x2b_1.value)
            t1bS -= parseInt(input1x2b_2.value)
            t1bGP += parseInt(input1x2b_1.value)
            t1bGC += parseInt(input1x2b_2.value)
            
            t2bP += 1
            t2bJ += 1
            t2bV += 0
            t2bE += 1
            t2bD += 0
            t2bS += parseInt(input1x2b_2.value)
            t2bS -= parseInt(input1x2b_1.value)
            t2bGP += parseInt(input1x2b_2.value)
            t2bGC += parseInt(input1x2b_1.value)
        }
    }
    if(input4x3b_4.value != "" && input4x3b_3.value != ""){
        if(input4x3b_4.value > input4x3b_3.value){
            t4bP += 3
            t4bJ += 1
            t4bV += 1
            t4bE += 0
            t4bD += 0
            t4bS += parseInt(input4x3b_4.value)
            t4bS -= parseInt(input4x3b_3.value)
            t4bGP += parseInt(input4x3b_4.value)
            t4bGC += parseInt(input4x3b_3.value)
            
            t3bP += 0
            t3bJ += 1
            t3bV += 0
            t3bE += 0
            t3bD += 1
            t3bS += parseInt(input4x3b_3.value)
            t3bS -= parseInt(input4x3b_4.value)
            t3bGP += parseInt(input4x3b_3.value)
            t3bGC += parseInt(input4x3b_4.value)
        }
        else if(input4x3b_4.value < input4x3b_3.value){
            t4bP += 0
            t4bJ += 1
            t4bV += 0
            t4bE += 0
            t4bD += 1
            t4bS += parseInt(input4x3b_4.value)
            t4bS -= parseInt(input4x3b_3.value)
            t4bGP += parseInt(input4x3b_4.value)
            t4bGC += parseInt(input4x3b_3.value)
            
            t3bP += 3
            t3bJ += 1
            t3bV += 1
            t3bE += 0
            t3bD += 0
            t3bS += parseInt(input4x3b_3.value)
            t3bS -= parseInt(input4x3b_4.value)
            t3bGP += parseInt(input4x3b_3.value)
            t3bGC += parseInt(input4x3b_4.value)
        }
        else if(input4x3b_4.value == input4x3b_3.value){
            t4bP += 1
            t4bJ += 1
            t4bV += 0
            t4bE += 1
            t4bD += 0
            t4bS += parseInt(input4x3b_4.value)
            t4bS -= parseInt(input4x3b_3.value)
            t4bGP += parseInt(input4x3b_4.value)
            t4bGC += parseInt(input4x3b_3.value)
            
            t3bP += 1
            t3bJ += 1
            t3bV += 0
            t3bE += 1
            t3bD += 0
            t3bS += parseInt(input4x3b_3.value)
            t3bS -= parseInt(input4x3b_4.value)
            t3bGP += parseInt(input4x3b_3.value)
            t3bGC += parseInt(input4x3b_4.value)
        }
    }
    if(input3x1b_3.value != "" && input3x1b_1.value != ""){
        if(input3x1b_3.value > input3x1b_1.value){
            t3bP += 3
            t3bJ += 1
            t3bV += 1
            t3bE += 0
            t3bD += 0
            t3bS += parseInt(input3x1b_3.value)
            t3bS -= parseInt(input3x1b_1.value)
            t3bGP += parseInt(input3x1b_3.value)
            t3bGC += parseInt(input3x1b_1.value)
            
            t1bP += 0
            t1bJ += 1
            t1bV += 0
            t1bE += 0
            t1bD += 1
            t1bS += parseInt(input3x1b_1.value)
            t1bS -= parseInt(input3x1b_3.value)
            t1bGP += parseInt(input3x1b_1.value)
            t1bGC += parseInt(input3x1b_3.value)
        }
        else if(input3x1b_3.value < input3x1b_1.value){
            t3bP += 0
            t3bJ += 1
            t3bV += 0
            t3bE += 0
            t3bD += 1
            t3bS += parseInt(input3x1b_3.value)
            t3bS -= parseInt(input3x1b_1.value)
            t3bGP += parseInt(input3x1b_3.value)
            t3bGC += parseInt(input3x1b_1.value)
            
            t1bP += 3
            t1bJ += 1
            t1bV += 1
            t1bE += 0
            t1bD += 0
            t1bS += parseInt(input3x1b_1.value)
            t1bS -= parseInt(input3x1b_3.value)
            t1bGP += parseInt(input3x1b_1.value)
            t1bGC += parseInt(input3x1b_3.value)
        }
        else if(input3x1b_3.value == input3x1b_1.value){
            t3bP += 1
            t3bJ += 1
            t3bV += 0
            t3bE += 1
            t3bD += 0
            t3bS += parseInt(input3x1b_3.value)
            t3bS -= parseInt(input3x1b_1.value)
            t3bGP += parseInt(input3x1b_3.value)
            t3bGC += parseInt(input3x1b_1.value)
            
            t1bP += 1
            t1bJ += 1
            t1bV += 0
            t1bE += 1
            t1bD += 0
            t1bS += parseInt(input3x1b_1.value)
            t1bS -= parseInt(input3x1b_3.value)
            t1bGP += parseInt(input3x1b_1.value)
            t1bGC += parseInt(input3x1b_3.value)
        }
    }
    if(input2x4b_2.value != "" && input2x4b_4.value != ""){
        if(input2x4b_2.value > input2x4b_4.value){
            t2bP += 3
            t2bJ += 1
            t2bV += 1
            t2bE += 0
            t2bD += 0
            t2bS += parseInt(input2x4b_2.value)
            t2bS -= parseInt(input2x4b_4.value)
            t2bGP += parseInt(input2x4b_2.value)
            t2bGC += parseInt(input2x4b_4.value)
            
            t4bP += 0
            t4bJ += 1
            t4bV += 0
            t4bE += 0
            t4bD += 1
            t4bS += parseInt(input2x4b_4.value)
            t4bS -= parseInt(input2x4b_2.value)
            t4bGP += parseInt(input2x4b_4.value)
            t4bGC += parseInt(input2x4b_2.value)
        }
        else if(input2x4b_2.value < input2x4b_4.value){
            t2bP += 0
            t2bJ += 1
            t2bV += 0
            t2bE += 0
            t2bD += 1
            t2bS += parseInt(input2x4b_2.value)
            t2bS -= parseInt(input2x4b_4.value)
            t2bGP += parseInt(input2x4b_2.value)
            t2bGC += parseInt(input2x4b_4.value)
            
            t4bP += 3
            t4bJ += 1
            t4bV += 1
            t4bE += 0
            t4bD += 0
            t4bS += parseInt(input2x4b_4.value)
            t4bS -= parseInt(input2x4b_2.value)
            t4bGP += parseInt(input2x4b_4.value)
            t4bGC += parseInt(input2x4b_2.value)
        }
        else if(input2x4b_2.value == input2x4b_4.value){
            t2bP += 1
            t2bJ += 1
            t2bV += 0
            t2bE += 1
            t2bD += 0
            t2bS += parseInt(input2x4b_2.value)
            t2bS -= parseInt(input2x4b_4.value)
            t2bGP += parseInt(input2x4b_2.value)
            t2bGC += parseInt(input2x4b_4.value)
            
            t4bP += 1
            t4bJ += 1
            t4bV += 0
            t4bE += 1
            t4bD += 0
            t4bS += parseInt(input2x4b_4.value)
            t4bS -= parseInt(input2x4b_2.value)
            t4bGP += parseInt(input2x4b_4.value)
            t4bGC += parseInt(input2x4b_2.value)
        }
    }
    if(input1x4b_1.value != "" && input1x4b_4.value != ""){
        if(input1x4b_1.value > input1x4b_4.value){
            t1bP += 3
            t1bJ += 1
            t1bV += 1
            t1bE += 0
            t1bD += 0
            t1bS += parseInt(input1x4b_1.value)
            t1bS -= parseInt(input1x4b_4.value)
            t1bGP += parseInt(input1x4b_1.value)
            t1bGC += parseInt(input1x4b_4.value)
            
            t4bP += 0
            t4bJ += 1
            t4bV += 0
            t4bE += 0
            t4bD += 1
            t4bS += parseInt(input1x4b_4.value)
            t4bS -= parseInt(input1x4b_1.value)
            t4bGP += parseInt(input1x4b_4.value)
            t4bGC += parseInt(input1x4b_1.value)
        }
        else if(input1x4b_1.value < input1x4b_4.value){
            t1bP += 0
            t1bJ += 1
            t1bV += 0
            t1bE += 0
            t1bD += 1
            t1bS += parseInt(input1x4b_1.value)
            t1bS -= parseInt(input1x4b_4.value)
            t1bGP += parseInt(input1x4b_1.value)
            t1bGC += parseInt(input1x4b_4.value)
            
            t4bP += 3
            t4bJ += 1
            t4bV += 1
            t4bE += 0
            t4bD += 0
            t4bS += parseInt(input1x4b_4.value)
            t4bS -= parseInt(input1x4b_1.value)
            t4bGP += parseInt(input1x4b_4.value)
            t4bGC += parseInt(input1x4b_1.value)
        }
        else if(input1x4b_1.value == input1x4b_4.value){
            t1bP += 1
            t1bJ += 1
            t1bV += 0
            t1bE += 1
            t1bD += 0
            t1bS += parseInt(input1x4b_1.value)
            t1bS -= parseInt(input1x4b_4.value)
            t1bGP += parseInt(input1x4b_1.value)
            t1bGC += parseInt(input1x4b_4.value)
            
            t4bP += 1
            t4bJ += 1
            t4bV += 0
            t4bE += 1
            t4bD += 0
            t4bS += parseInt(input1x4b_4.value)
            t4bS -= parseInt(input1x4b_1.value)
            t4bGP += parseInt(input1x4b_4.value)
            t4bGC += parseInt(input1x4b_1.value)
        }
    }
    if(input2x3b_2.value != "" && input2x3b_3.value != ""){
        if(input2x3b_2.value > input2x3b_3.value){
            t2bP += 3
            t2bJ += 1
            t2bV += 1
            t2bE += 0
            t2bD += 0
            t2bS += parseInt(input2x3b_2.value)
            t2bS -= parseInt(input2x3b_3.value)
            t2bGP += parseInt(input2x3b_2.value)
            t2bGC += parseInt(input2x3b_3.value)
            
            t3bP += 0
            t3bJ += 1
            t3bV += 0
            t3bE += 0
            t3bD += 1
            t3bS += parseInt(input2x3b_3.value)
            t3bS -= parseInt(input2x3b_2.value)
            t3bGP += parseInt(input2x3b_3.value)
            t3bGC += parseInt(input2x3b_2.value)
        }
        else if(input2x3b_2.value < input2x3b_3.value){
            t2bP += 0
            t2bJ += 1
            t2bV += 0
            t2bE += 0
            t2bD += 1
            t2bS += parseInt(input2x3b_2.value)
            t2bS -= parseInt(input2x3b_3.value)
            t2bGP += parseInt(input2x3b_2.value)
            t2bGC += parseInt(input2x3b_3.value)
            
            t3bP += 3
            t3bJ += 1
            t3bV += 1
            t3bE += 0
            t3bD += 0
            t3bS += parseInt(input2x3b_3.value)
            t3bS -= parseInt(input2x3b_2.value)
            t3bGP += parseInt(input2x3b_3.value)
            t3bGC += parseInt(input2x3b_2.value)
        }
        else if(input2x3b_2.value == input2x3b_3.value){
            t2bP += 1
            t2bJ += 1
            t2bV += 0
            t2bE += 1
            t2bD += 0
            t2bS += parseInt(input2x3b_2.value)
            t2bS -= parseInt(input2x3b_3.value)
            t2bGP += parseInt(input2x3b_2.value)
            t2bGC += parseInt(input2x3b_3.value)
            
            t3bP += 1
            t3bJ += 1
            t3bV += 0
            t3bE += 1
            t3bD += 0
            t3bS += parseInt(input2x3b_3.value)
            t3bS -= parseInt(input2x3b_2.value)
            t3bGP += parseInt(input2x3b_3.value)
            t3bGC += parseInt(input2x3b_2.value)
        }
    }
    if(input3x2b_3.value != "" && input3x2b_2.value != ""){
        if(input3x2b_3.value > input3x2b_2.value){
            t3bP += 3
            t3bJ += 1
            t3bV += 1
            t3bE += 0
            t3bD += 0
            t3bS += parseInt(input3x2b_3.value)
            t3bS -= parseInt(input3x2b_2.value)
            t3bGP += parseInt(input3x2b_3.value)
            t3bGC += parseInt(input3x2b_2.value)
            
            t2bP += 0
            t2bJ += 1
            t2bV += 0
            t2bE += 0
            t2bD += 1
            t2bS += parseInt(input3x2b_2.value)
            t2bS -= parseInt(input3x2b_3.value)
            t2bGP += parseInt(input3x2b_2.value)
            t2bGC += parseInt(input3x2b_3.value)
        }
        else if(input3x2b_3.value < input3x2b_2.value){
            t3bP += 0
            t3bJ += 1
            t3bV += 0
            t3bE += 0
            t3bD += 1
            t3bS += parseInt(input3x2b_3.value)
            t3bS -= parseInt(input3x2b_2.value)
            t3bGP += parseInt(input3x2b_3.value)
            t3bGC += parseInt(input3x2b_2.value)
        
            t2bP += 3
            t2bJ += 1
            t2bV += 1
            t2bE += 0
            t2bD += 0
            t2bS += parseInt(input3x2b_2.value)
            t2bS -= parseInt(input3x2b_3.value)
            t2bGP += parseInt(input3x2b_2.value)
            t2bGC += parseInt(input3x2b_3.value)
        }
        else if(input3x2b_3.value == input3x2b_2.value){
            t3bP += 1
            t3bJ += 1
            t3bV += 0
            t3bE += 1
            t3bD += 0
            t3bS += parseInt(input3x2b_3.value)
            t3bS -= parseInt(input3x2b_2.value)
            t3bGP += parseInt(input3x2b_3.value)
            t3bGC += parseInt(input3x2b_2.value)
            
            t2bP += 1
            t2bJ += 1
            t2bV += 0
            t2bE += 1
            t2bD += 0
            t2bS += parseInt(input3x2b_2.value)
            t2bS -= parseInt(input3x2b_3.value)
            t2bGP += parseInt(input3x2b_2.value)
            t2bGC += parseInt(input3x2b_3.value)
        }
    }
    if(input4x1b_4.value != "" && input4x1b_1.value != ""){
        if(input4x1b_4.value > input4x1b_1.value){
            t4bP += 3
            t4bJ += 1
            t4bV += 1
            t4bE += 0
            t4bD += 0
            t4bS += parseInt(input4x1b_4.value)
            t4bS -= parseInt(input4x1b_1.value)
            t4bGP += parseInt(input4x1b_4.value)
            t4bGC += parseInt(input4x1b_1.value)
            
            t1bP += 0
            t1bJ += 1
            t1bV += 0
            t1bE += 0
            t1bD += 1
            t1bS += parseInt(input4x1b_1.value)
            t1bS -= parseInt(input4x1b_4.value)
            t1bGP += parseInt(input4x1b_1.value)
            t1bGC += parseInt(input4x1b_4.value)
        }
        else if(input4x1b_4.value < input4x1b_1.value){
            t4bP += 0
            t4bJ += 1
            t4bV += 0
            t4bE += 0
            t4bD += 1
            t4bS += parseInt(input4x1b_4.value)
            t4bS -= parseInt(input4x1b_1.value)
            t4bGP += parseInt(input4x1b_4.value)
            t4bGC += parseInt(input4x1b_1.value)
            
            t1bP += 3
            t1bJ += 1
            t1bV += 1
            t1bE += 0
            t1bD += 0
            t1bS += parseInt(input4x1b_1.value)
            t1bS -= parseInt(input4x1b_4.value)
            t1bGP += parseInt(input4x1b_1.value)
            t1bGC += parseInt(input4x1b_4.value)
        }
        else if(input4x1b_4.value == input4x1b_1.value){
            t4bP += 1
            t4bJ += 1
            t4bV += 0
            t4bE += 1
            t4bD += 0
            t4bS += parseInt(input4x1b_4.value)
            t4bS -= parseInt(input4x1b_1.value)
            t4bGP += parseInt(input4x1b_4.value)
            t4bGC += parseInt(input4x1b_1.value)
            
            t1bP += 1
            t1bJ += 1
            t1bV += 0
            t1bE += 1
            t1bD += 0
            t1bS += parseInt(input4x1b_1.value)
            t1bS -= parseInt(input4x1b_4.value)
            t1bGP += parseInt(input4x1b_1.value)
            t1bGC += parseInt(input4x1b_4.value)
        }
    }
    if(input4x2b_4.value != "" && input4x2b_2.value != ""){
        if(input4x2b_4.value > input4x2b_2.value){
            t4bP += 3
            t4bJ += 1
            t4bV += 1
            t4bE += 0
            t4bD += 0
            t4bS += parseInt(input4x2b_4.value)
            t4bS -= parseInt(input4x2b_2.value)
            t4bGP += parseInt(input4x2b_4.value)
            t4bGC += parseInt(input4x2b_2.value)
            
            t2bP += 0
            t2bJ += 1
            t2bV += 0
            t2bE += 0
            t2bD += 1
            t2bS += parseInt(input4x2b_2.value)
            t2bS -= parseInt(input4x2b_4.value)
            t2bGP += parseInt(input4x2b_2.value)
            t2bGC += parseInt(input4x2b_4.value)
        }
        else if(input4x2b_4.value < input4x2b_2.value){
            t4bP += 0
            t4bJ += 1
            t4bV += 0
            t4bE += 0
            t4bD += 1
            t4bS += parseInt(input4x2b_4.value)
            t4bS -= parseInt(input4x2b_2.value)
            t4bGP += parseInt(input4x2b_4.value)
            t4bGC += parseInt(input4x2b_2.value)
            
            t2bP += 3
            t2bJ += 1
            t2bV += 1
            t2bE += 0
            t2bD += 0
            t2bS += parseInt(input4x2b_2.value)
            t2bS -= parseInt(input4x2b_4.value)
            t2bGP += parseInt(input4x2b_2.value)
            t2bGC += parseInt(input4x2b_4.value)
        }
        else if(input4x2b_4.value == input4x2b_2.value){
            t4bP += 1
            t4bJ += 1
            t4bV += 0
            t4bE += 1
            t4bD += 0
            t4bS += parseInt(input4x2b_4.value)
            t4bS -= parseInt(input4x2b_2.value)
            t4bGP += parseInt(input4x2b_4.value)
            t4bGC += parseInt(input4x2b_2.value)
            
            t2bP += 1
            t2bJ += 1
            t2bV += 0
            t2bE += 1
            t2bD += 0
            t2bS += parseInt(input4x2b_2.value)
            t2bS -= parseInt(input4x2b_4.value)
            t2bGP += parseInt(input4x2b_2.value)
            t2bGC += parseInt(input4x2b_4.value)
        }
    }
    if(input1x3b_1.value != "" && input1x3b_3.value != ""){
        if(input1x3b_1.value > input1x3b_3.value){
            t1bP += 3
            t1bJ += 1
            t1bV += 1
            t1bE += 0
            t1bD += 0
            t1bS += parseInt(input1x3b_1.value)
            t1bS -= parseInt(input1x3b_3.value)
            t1bGP += parseInt(input1x3b_1.value)
            t1bGC += parseInt(input1x3b_3.value)
            
            t3bP += 0
            t3bJ += 1
            t3bV += 0
            t3bE += 0
            t3bD += 1
            t3bS += parseInt(input1x3b_3.value)
            t3bS -= parseInt(input1x3b_1.value)
            t3bGP += parseInt(input1x3b_3.value)
            t3bGC += parseInt(input1x3b_1.value)
        }
        else if(input1x3b_1.value < input1x3b_3.value){
            t1bP += 0
            t1bJ += 1
            t1bV += 0
            t1bE += 0
            t1bD += 1
            t1bS += parseInt(input1x3b_1.value)
            t1bS -= parseInt(input1x3b_3.value)
            t1bGP += parseInt(input1x3b_1.value)
            t1bGC += parseInt(input1x3b_3.value)
            
            t3bP += 3
            t3bJ += 1
            t3bV += 1
            t3bE += 0
            t3bD += 0
            t3bS += parseInt(input1x3b_3.value)
            t3bS -= parseInt(input1x3b_1.value)
            t3bGP += parseInt(input1x3b_3.value)
            t3bGC += parseInt(input1x3b_1.value)
        }
        else if(input1x3b_1.value == input1x3b_3.value){
            t1bP += 1
            t1bJ += 1
            t1bV += 0
            t1bE += 1
            t1bD += 0
            t1bS += parseInt(input1x3b_1.value)
            t1bS -= parseInt(input1x3b_3.value)
            t1bGP += parseInt(input1x3b_1.value)
            t1bGC += parseInt(input1x3b_3.value)
            
            t3bP += 1
            t3bJ += 1
            t3bV += 0
            t3bE += 1
            t3bD += 0
            t3bS += parseInt(input1x3b_3.value)
            t3bS -= parseInt(input1x3b_1.value)
            t3bGP += parseInt(input1x3b_3.value)
            t3bGC += parseInt(input1x3b_1.value)
        }
    }
    if(input3x4b_3.value != "" && input3x4b_4.value != ""){
        if(input3x4b_3.value > input3x4b_4.value){
            t3bP += 3
            t3bJ += 1
            t3bV += 1
            t3bE += 0
            t3bD += 0
            t3bS += parseInt(input3x4b_3.value)
            t3bS -= parseInt(input3x4b_4.value)
            t3bGP += parseInt(input3x4b_3.value)
            t3bGC += parseInt(input3x4b_4.value)
            
            t4bP += 0
            t4bJ += 1
            t4bV += 0
            t4bE += 0
            t4bD += 1
            t4bS += parseInt(input3x4b_4.value)
            t4bS -= parseInt(input3x4b_3.value)
            t4bGP += parseInt(input3x4b_4.value)
            t4bGC += parseInt(input3x4b_3.value)
        }
        else if(input3x4b_3.value < input3x4b_4.value){
            t3bP += 0
            t3bJ += 1
            t3bV += 0
            t3bE += 0
            t3bD += 1
            t3bS += parseInt(input3x4b_3.value)
            t3bS -= parseInt(input3x4b_4.value)
            t3bGP += parseInt(input3x4b_3.value)
            t3bGC += parseInt(input3x4b_4.value)
            
            t4bP += 3
            t4bJ += 1
            t4bV += 1
            t4bE += 0
            t4bD += 0
            t4bS += parseInt(input3x4b_4.value)
            t4bS -= parseInt(input3x4b_3.value)
            t4bGP += parseInt(input3x4b_4.value)
            t4bGC += parseInt(input3x4b_3.value)
        }
        else if(input3x4b_3.value == input3x4b_4.value){
            t3bP += 1
            t3bJ += 1
            t3bV += 0
            t3bE += 1
            t3bD += 0
            t3bS += parseInt(input3x4b_3.value)
            t3bS -= parseInt(input3x4b_4.value)
            t3bGP += parseInt(input3x4b_3.value)
            t3bGC += parseInt(input3x4b_4.value)
            
            t4bP += 1
            t4bJ += 1
            t4bV += 0
            t4bE += 1
            t4bD += 0
            t4bS += parseInt(input3x4b_4.value)
            t4bS -= parseInt(input3x4b_3.value)
            t4bGP += parseInt(input3x4b_4.value)
            t4bGC += parseInt(input3x4b_3.value)
        }
    }
    if(input2x1b_2.value != "" && input2x1b_1.value != ""){
        if(input2x1b_2.value > input2x1b_1.value){
            t2bP += 3
            t2bJ += 1
            t2bV += 1
            t2bE += 0
            t2bD += 0
            t2bS += parseInt(input2x1b_2.value)
            t2bS -= parseInt(input2x1b_1.value)
            t2bGP += parseInt(input2x1b_2.value)
            t2bGC += parseInt(input2x1b_1.value)
            
            t1bP += 0
            t1bJ += 1
            t1bV += 0
            t1bE += 0
            t1bD += 1
            t1bS += parseInt(input2x1b_1.value)
            t1bS -= parseInt(input2x1b_2.value)
            t1bGP += parseInt(input2x1b_1.value)
            t1bGC += parseInt(input2x1b_2.value)
        }
        else if(input2x1b_2.value < input2x1b_1.value){
            t2bP += 0
            t2bJ += 1
            t2bV += 0
            t2bE += 0
            t2bD += 1
            t2bS += parseInt(input2x1b_2.value)
            t2bS -= parseInt(input2x1b_1.value)
            t2bGP += parseInt(input2x1b_2.value)
            t2bGC += parseInt(input2x1b_1.value)
            
            t1bP += 3
            t1bJ += 1
            t1bV += 1
            t1bE += 0
            t1bD += 0
            t1bS += parseInt(input2x1b_1.value)
            t1bS -= parseInt(input2x1b_2.value)
            t1bGP += parseInt(input2x1b_1.value)
            t1bGC += parseInt(input2x1b_2.value)
        }
        else if(input2x1b_2.value == input2x1b_1.value){
            t2bP += 1
            t2bJ += 1
            t2bV += 0
            t2bE += 1
            t2bD += 0
            t2bS += parseInt(input2x1b_2.value)
            t2bS -= parseInt(input2x1b_1.value)
            t2bGP += parseInt(input2x1b_2.value)
            t2bGC += parseInt(input2x1b_1.value)
            
            t1bP += 1
            t1bJ += 1
            t1bV += 0
            t1bE += 1
            t1bD += 0
            t1bS += parseInt(input2x1b_1.value)
            t1bS -= parseInt(input2x1b_2.value)
            t1bGP += parseInt(input2x1b_1.value)
            t1bGC += parseInt(input2x1b_2.value)
        }
    }

    var brrby_time1 = [time1b[1],
                        t1bP,
                        t1bJ,
                        t1bV,
                        t1bE,
                        t1bD,
                        t1bS,
                        t1bGP,
                        t1bGC
                    ]
    var brrby_time2 = [time2b[1],
                        t2bP,
                        t2bJ,
                        t2bV,
                        t2bE,
                        t2bD,
                        t2bS,
                        t2bGP,
                        t2bGC
                    ]
    var brrby_time3 = [time3b[1],
                        t3bP,
                        t3bJ,
                        t3bV,
                        t3bE,
                        t3bD,
                        t3bS,
                        t3bGP,
                        t3bGC
                    ]
    var brrby_time4 = [time4b[1],
                        t4bP,
                        t4bJ,
                        t4bV,
                        t4bE,
                        t4bD,
                        t4bS,
                        t4bGP,
                        t4bGC
                    ]
    var mbtriz = [brrby_time1, brrby_time2, brrby_time3, brrby_time4]
    var mbtrizbjustbdb = ajuste(mbtriz)

    console.log(mbtrizbjustbdb)

    // CRIBNDO TIME 1 B
    var time1b_nome = document.querySelector("#time1b_nome")
    time1b_nome.textContent = " " + (mbtrizbjustbdb[0][0].toUpperCase())
    var time1b_img = document.querySelector("#time1b_img")
    time1b_img.src = mbtrizbjustbdb[0][0] + ".png"
    var time1b_P = document.querySelector("#time1b_P")
    time1b_P.textContent = mbtrizbjustbdb[0][1]
    var time1b_J = document.querySelector("#time1b_J")
    time1b_J.textContent = mbtrizbjustbdb[0][2]
    var time1b_V = document.querySelector("#time1b_V")
    time1b_V.textContent = mbtrizbjustbdb[0][3]
    var time1b_E = document.querySelector("#time1b_E")
    time1b_E.textContent = mbtrizbjustbdb[0][4]
    var time1b_D = document.querySelector("#time1b_D")
    time1b_D.textContent = mbtrizbjustbdb[0][5]
    var time1b_S = document.querySelector("#time1b_S")
    time1b_S.textContent = mbtrizbjustbdb[0][6]
    var time1b_GP = document.querySelector("#time1b_GP")
    time1b_GP.textContent = mbtrizbjustbdb[0][7]
    var time1b_GC = document.querySelector("#time1b_GC")
    time1b_GC.textContent = mbtrizbjustbdb[0][8]

    // CRIBNDO TIME 2 B

    var time2b_nome = document.querySelector("#time2b_nome")
    time2b_nome.textContent = " " + mbtrizbjustbdb[1][0].toUpperCase()
    var time2b_img = document.querySelector("#time2b_img")
    time2b_img.src = mbtrizbjustbdb[1][0] + ".png"
    var time2b_P = document.querySelector("#time2b_P")
    time2b_P.textContent = mbtrizbjustbdb[1][1]
    var time2b_J = document.querySelector("#time2b_J")
    time2b_J.textContent = mbtrizbjustbdb[1][2]
    var time2b_V = document.querySelector("#time2b_V")
    time2b_V.textContent = mbtrizbjustbdb[1][3]
    var time2b_E = document.querySelector("#time2b_E")
    time2b_E.textContent = mbtrizbjustbdb[1][4]
    var time2b_D = document.querySelector("#time2b_D")
    time2b_D.textContent = mbtrizbjustbdb[1][5]
    var time2b_S = document.querySelector("#time2b_S")
    time2b_S.textContent = mbtrizbjustbdb[1][6]
    var time2b_GP = document.querySelector("#time2b_GP")
    time2b_GP.textContent = mbtrizbjustbdb[1][7]
    var time2b_GC = document.querySelector("#time2b_GC")
    time2b_GC.textContent = mbtrizbjustbdb[1][8]

    // CRIBNDO TIME 3 B

    var time3b_nome = document.querySelector("#time3b_nome")
    time3b_nome.textContent = " " + mbtrizbjustbdb[2][0].toUpperCase()
    var time3b_img = document.querySelector("#time3b_img")
    time3b_img.src = mbtrizbjustbdb[2][0] + ".png"
    var time3b_P = document.querySelector("#time3b_P")
    time3b_P.textContent = mbtrizbjustbdb[2][1]
    var time3b_J = document.querySelector("#time3b_J")
    time3b_J.textContent = mbtrizbjustbdb[2][2]
    var time3b_V = document.querySelector("#time3b_V")
    time3b_V.textContent = mbtrizbjustbdb[2][3]
    var time3b_E = document.querySelector("#time3b_E")
    time3b_E.textContent = mbtrizbjustbdb[2][4]
    var time3b_D = document.querySelector("#time3b_D")
    time3b_D.textContent = mbtrizbjustbdb[2][5]
    var time3b_S = document.querySelector("#time3b_S")
    time3b_S.textContent = mbtrizbjustbdb[2][6]
    var time3b_GP = document.querySelector("#time3b_GP")
    time3b_GP.textContent = mbtrizbjustbdb[2][7]
    var time3b_GC = document.querySelector("#time3b_GC")
    time3b_GC.textContent = mbtrizbjustbdb[2][8]

    // CRIBNDO TIME 4 B

    var time4b_nome = document.querySelector("#time4b_nome")
    time4b_nome.textContent = " " + mbtrizbjustbdb[3][0].toUpperCase()
    var time4b_img = document.querySelector("#time4b_img")
    time4b_img.src = mbtrizbjustbdb[3][0] + ".png"
    var time4b_P = document.querySelector("#time4b_P")
    time4b_P.textContent = mbtrizbjustbdb[3][1]
    var time4b_J = document.querySelector("#time4b_J")
    time4b_J.textContent = mbtrizbjustbdb[3][2]
    var time4b_V = document.querySelector("#time4b_V")
    time4b_V.textContent = mbtrizbjustbdb[3][3]
    var time4b_E = document.querySelector("#time4b_E")
    time4b_E.textContent = mbtrizbjustbdb[3][4]
    var time4b_D = document.querySelector("#time4b_D")
    time4b_D.textContent = mbtrizbjustbdb[3][5]
    var time4b_S = document.querySelector("#time4b_S")
    time4b_S.textContent = mbtrizbjustbdb[3][6]
    var time4b_GP = document.querySelector("#time4b_GP")
    time4b_GP.textContent = mbtrizbjustbdb[3][7]
    var time4b_GC = document.querySelector("#time4b_GC")
    time4b_GC.textContent = mbtrizbjustbdb[3][8]

    var t1cP = 0
    var t1cJ = 0
    var t1cV = 0
    var t1cE = 0
    var t1cD = 0
    var t1cS = 0
    var t1cGP = 0
    var t1cGC = 0
    
    var t2cP = 0
    var t2cJ = 0
    var t2cV = 0
    var t2cE = 0
    var t2cD = 0
    var t2cS = 0
    var t2cGP = 0
    var t2cGC = 0

    var t3cP = 0
    var t3cJ = 0
    var t3cV = 0
    var t3cE = 0
    var t3cD = 0
    var t3cS = 0
    var t3cGP = 0
    var t3cGC = 0

    var t4cP = 0
    var t4cJ = 0
    var t4cV = 0
    var t4cE = 0
    var t4cD = 0
    var t4cS = 0
    var t4cGP = 0
    var t4cGC = 0

    if(input1x2c_1.value != "" && input1x2c_2.value != ""){
        if(input1x2c_1.value > input1x2c_2.value){
            t1cP += 3
            t1cJ += 1
            t1cV += 1
            t1cE += 0
            t1cD += 0
            t1cS += parseInt(input1x2c_1.value)
            t1cS -= parseInt(input1x2c_2.value)
            t1cGP += parseInt(input1x2c_1.value)
            t1cGC += parseInt(input1x2c_2.value)
            
            t2cP += 0
            t2cJ += 1
            t2cV += 0
            t2cE += 0
            t2cD += 1
            t2cS += parseInt(input1x2c_2.value)
            t2cS -= parseInt(input1x2c_1.value)
            t2cGP += parseInt(input1x2c_2.value)
            t2cGC += parseInt(input1x2c_1.value)
        }
        else if(input1x2c_1.value < input1x2c_2.value){
            t1cP += 0
            t1cJ += 1
            t1cV += 0
            t1cE += 0
            t1cD += 1
            t1cS += parseInt(input1x2c_1.value)
            t1cS -= parseInt(input1x2c_2.value)
            t1cGP += parseInt(input1x2c_1.value)
            t1cGC += parseInt(input1x2c_2.value)
            
            t2cP += 3
            t2cJ += 1
            t2cV += 1
            t2cE += 0
            t2cD += 0
            t2cS += parseInt(input1x2c_2.value)
            t2cS -= parseInt(input1x2c_1.value)
            t2cGP += parseInt(input1x2c_2.value)
            t2cGC += parseInt(input1x2c_1.value)
        }
        else if(input1x2c_1.value == input1x2c_2.value){
            t1cP += 1
            t1cJ += 1
            t1cV += 0
            t1cE += 1
            t1cD += 0
            t1cS += parseInt(input1x2c_1.value)
            t1cS -= parseInt(input1x2c_2.value)
            t1cGP += parseInt(input1x2c_1.value)
            t1cGC += parseInt(input1x2c_2.value)
            
            t2cP += 1
            t2cJ += 1
            t2cV += 0
            t2cE += 1
            t2cD += 0
            t2cS += parseInt(input1x2c_2.value)
            t2cS -= parseInt(input1x2c_1.value)
            t2cGP += parseInt(input1x2c_2.value)
            t2cGC += parseInt(input1x2c_1.value)
        }
    }
    if(input4x3c_4.value != "" && input4x3c_3.value != ""){
        if(input4x3c_4.value > input4x3c_3.value){
            t4cP += 3
            t4cJ += 1
            t4cV += 1
            t4cE += 0
            t4cD += 0
            t4cS += parseInt(input4x3c_4.value)
            t4cS -= parseInt(input4x3c_3.value)
            t4cGP += parseInt(input4x3c_4.value)
            t4cGC += parseInt(input4x3c_3.value)
            
            t3cP += 0
            t3cJ += 1
            t3cV += 0
            t3cE += 0
            t3cD += 1
            t3cS += parseInt(input4x3c_3.value)
            t3cS -= parseInt(input4x3c_4.value)
            t3cGP += parseInt(input4x3c_3.value)
            t3cGC += parseInt(input4x3c_4.value)
        }
        else if(input4x3c_4.value < input4x3c_3.value){
            t4cP += 0
            t4cJ += 1
            t4cV += 0
            t4cE += 0
            t4cD += 1
            t4cS += parseInt(input4x3c_4.value)
            t4cS -= parseInt(input4x3c_3.value)
            t4cGP += parseInt(input4x3c_4.value)
            t4cGC += parseInt(input4x3c_3.value)
            
            t3cP += 3
            t3cJ += 1
            t3cV += 1
            t3cE += 0
            t3cD += 0
            t3cS += parseInt(input4x3c_3.value)
            t3cS -= parseInt(input4x3c_4.value)
            t3cGP += parseInt(input4x3c_3.value)
            t3cGC += parseInt(input4x3c_4.value)
        }
        else if(input4x3c_4.value == input4x3c_3.value){
            t4cP += 1
            t4cJ += 1
            t4cV += 0
            t4cE += 1
            t4cD += 0
            t4cS += parseInt(input4x3c_4.value)
            t4cS -= parseInt(input4x3c_3.value)
            t4cGP += parseInt(input4x3c_4.value)
            t4cGC += parseInt(input4x3c_3.value)
            
            t3cP += 1
            t3cJ += 1
            t3cV += 0
            t3cE += 1
            t3cD += 0
            t3cS += parseInt(input4x3c_3.value)
            t3cS -= parseInt(input4x3c_4.value)
            t3cGP += parseInt(input4x3c_3.value)
            t3cGC += parseInt(input4x3c_4.value)
        }
    }
    if(input3x1c_3.value != "" && input3x1c_1.value != ""){
        if(input3x1c_3.value > input3x1c_1.value){
            t3cP += 3
            t3cJ += 1
            t3cV += 1
            t3cE += 0
            t3cD += 0
            t3cS += parseInt(input3x1c_3.value)
            t3cS -= parseInt(input3x1c_1.value)
            t3cGP += parseInt(input3x1c_3.value)
            t3cGC += parseInt(input3x1c_1.value)
            
            t1cP += 0
            t1cJ += 1
            t1cV += 0
            t1cE += 0
            t1cD += 1
            t1cS += parseInt(input3x1c_1.value)
            t1cS -= parseInt(input3x1c_3.value)
            t1cGP += parseInt(input3x1c_1.value)
            t1cGC += parseInt(input3x1c_3.value)
        }
        else if(input3x1c_3.value < input3x1c_1.value){
            t3cP += 0
            t3cJ += 1
            t3cV += 0
            t3cE += 0
            t3cD += 1
            t3cS += parseInt(input3x1c_3.value)
            t3cS -= parseInt(input3x1c_1.value)
            t3cGP += parseInt(input3x1c_3.value)
            t3cGC += parseInt(input3x1c_1.value)
            
            t1cP += 3
            t1cJ += 1
            t1cV += 1
            t1cE += 0
            t1cD += 0
            t1cS += parseInt(input3x1c_1.value)
            t1cS -= parseInt(input3x1c_3.value)
            t1cGP += parseInt(input3x1c_1.value)
            t1cGC += parseInt(input3x1c_3.value)
        }
        else if(input3x1c_3.value == input3x1c_1.value){
            t3cP += 1
            t3cJ += 1
            t3cV += 0
            t3cE += 1
            t3cD += 0
            t3cS += parseInt(input3x1c_3.value)
            t3cS -= parseInt(input3x1c_1.value)
            t3cGP += parseInt(input3x1c_3.value)
            t3cGC += parseInt(input3x1c_1.value)
            
            t1cP += 1
            t1cJ += 1
            t1cV += 0
            t1cE += 1
            t1cD += 0
            t1cS += parseInt(input3x1c_1.value)
            t1cS -= parseInt(input3x1c_3.value)
            t1cGP += parseInt(input3x1c_1.value)
            t1cGC += parseInt(input3x1c_3.value)
        }
    }
    if(input2x4c_2.value != "" && input2x4c_4.value != ""){
        if(input2x4c_2.value > input2x4c_4.value){
            t2cP += 3
            t2cJ += 1
            t2cV += 1
            t2cE += 0
            t2cD += 0
            t2cS += parseInt(input2x4c_2.value)
            t2cS -= parseInt(input2x4c_4.value)
            t2cGP += parseInt(input2x4c_2.value)
            t2cGC += parseInt(input2x4c_4.value)
            
            t4cP += 0
            t4cJ += 1
            t4cV += 0
            t4cE += 0
            t4cD += 1
            t4cS += parseInt(input2x4c_4.value)
            t4cS -= parseInt(input2x4c_2.value)
            t4cGP += parseInt(input2x4c_4.value)
            t4cGC += parseInt(input2x4c_2.value)
        }
        else if(input2x4c_2.value < input2x4c_4.value){
            t2cP += 0
            t2cJ += 1
            t2cV += 0
            t2cE += 0
            t2cD += 1
            t2cS += parseInt(input2x4c_2.value)
            t2cS -= parseInt(input2x4c_4.value)
            t2cGP += parseInt(input2x4c_2.value)
            t2cGC += parseInt(input2x4c_4.value)
            
            t4cP += 3
            t4cJ += 1
            t4cV += 1
            t4cE += 0
            t4cD += 0
            t4cS += parseInt(input2x4c_4.value)
            t4cS -= parseInt(input2x4c_2.value)
            t4cGP += parseInt(input2x4c_4.value)
            t4cGC += parseInt(input2x4c_2.value)
        }
        else if(input2x4c_2.value == input2x4c_4.value){
            t2cP += 1
            t2cJ += 1
            t2cV += 0
            t2cE += 1
            t2cD += 0
            t2cS += parseInt(input2x4c_2.value)
            t2cS -= parseInt(input2x4c_4.value)
            t2cGP += parseInt(input2x4c_2.value)
            t2cGC += parseInt(input2x4c_4.value)
            
            t4cP += 1
            t4cJ += 1
            t4cV += 0
            t4cE += 1
            t4cD += 0
            t4cS += parseInt(input2x4c_4.value)
            t4cS -= parseInt(input2x4c_2.value)
            t4cGP += parseInt(input2x4c_4.value)
            t4cGC += parseInt(input2x4c_2.value)
        }
    }
    if(input1x4c_1.value != "" && input1x4c_4.value != ""){
        if(input1x4c_1.value > input1x4c_4.value){
            t1cP += 3
            t1cJ += 1
            t1cV += 1
            t1cE += 0
            t1cD += 0
            t1cS += parseInt(input1x4c_1.value)
            t1cS -= parseInt(input1x4c_4.value)
            t1cGP += parseInt(input1x4c_1.value)
            t1cGC += parseInt(input1x4c_4.value)
            
            t4cP += 0
            t4cJ += 1
            t4cV += 0
            t4cE += 0
            t4cD += 1
            t4cS += parseInt(input1x4c_4.value)
            t4cS -= parseInt(input1x4c_1.value)
            t4cGP += parseInt(input1x4c_4.value)
            t4cGC += parseInt(input1x4c_1.value)
        }
        else if(input1x4c_1.value < input1x4c_4.value){
            t1cP += 0
            t1cJ += 1
            t1cV += 0
            t1cE += 0
            t1cD += 1
            t1cS += parseInt(input1x4c_1.value)
            t1cS -= parseInt(input1x4c_4.value)
            t1cGP += parseInt(input1x4c_1.value)
            t1cGC += parseInt(input1x4c_4.value)
            
            t4cP += 3
            t4cJ += 1
            t4cV += 1
            t4cE += 0
            t4cD += 0
            t4cS += parseInt(input1x4c_4.value)
            t4cS -= parseInt(input1x4c_1.value)
            t4cGP += parseInt(input1x4c_4.value)
            t4cGC += parseInt(input1x4c_1.value)
        }
        else if(input1x4c_1.value == input1x4c_4.value){
            t1cP += 1
            t1cJ += 1
            t1cV += 0
            t1cE += 1
            t1cD += 0
            t1cS += parseInt(input1x4c_1.value)
            t1cS -= parseInt(input1x4c_4.value)
            t1cGP += parseInt(input1x4c_1.value)
            t1cGC += parseInt(input1x4c_4.value)
            
            t4cP += 1
            t4cJ += 1
            t4cV += 0
            t4cE += 1
            t4cD += 0
            t4cS += parseInt(input1x4c_4.value)
            t4cS -= parseInt(input1x4c_1.value)
            t4cGP += parseInt(input1x4c_4.value)
            t4cGC += parseInt(input1x4c_1.value)
        }
    }
    if(input2x3c_2.value != "" && input2x3c_3.value != ""){
        if(input2x3c_2.value > input2x3c_3.value){
            t2cP += 3
            t2cJ += 1
            t2cV += 1
            t2cE += 0
            t2cD += 0
            t2cS += parseInt(input2x3c_2.value)
            t2cS -= parseInt(input2x3c_3.value)
            t2cGP += parseInt(input2x3c_2.value)
            t2cGC += parseInt(input2x3c_3.value)
            
            t3cP += 0
            t3cJ += 1
            t3cV += 0
            t3cE += 0
            t3cD += 1
            t3cS += parseInt(input2x3c_3.value)
            t3cS -= parseInt(input2x3c_2.value)
            t3cGP += parseInt(input2x3c_3.value)
            t3cGC += parseInt(input2x3c_2.value)
        }
        else if(input2x3c_2.value < input2x3c_3.value){
            t2cP += 0
            t2cJ += 1
            t2cV += 0
            t2cE += 0
            t2cD += 1
            t2cS += parseInt(input2x3c_2.value)
            t2cS -= parseInt(input2x3c_3.value)
            t2cGP += parseInt(input2x3c_2.value)
            t2cGC += parseInt(input2x3c_3.value)
            
            t3cP += 3
            t3cJ += 1
            t3cV += 1
            t3cE += 0
            t3cD += 0
            t3cS += parseInt(input2x3c_3.value)
            t3cS -= parseInt(input2x3c_2.value)
            t3cGP += parseInt(input2x3c_3.value)
            t3cGC += parseInt(input2x3c_2.value)
        }
        else if(input2x3c_2.value == input2x3c_3.value){
            t2cP += 1
            t2cJ += 1
            t2cV += 0
            t2cE += 1
            t2cD += 0
            t2cS += parseInt(input2x3c_2.value)
            t2cS -= parseInt(input2x3c_3.value)
            t2cGP += parseInt(input2x3c_2.value)
            t2cGC += parseInt(input2x3c_3.value)
            
            t3cP += 1
            t3cJ += 1
            t3cV += 0
            t3cE += 1
            t3cD += 0
            t3cS += parseInt(input2x3c_3.value)
            t3cS -= parseInt(input2x3c_2.value)
            t3cGP += parseInt(input2x3c_3.value)
            t3cGC += parseInt(input2x3c_2.value)
        }
    }
    if(input3x2c_3.value != "" && input3x2c_2.value != ""){
        if(input3x2c_3.value > input3x2c_2.value){
            t3cP += 3
            t3cJ += 1
            t3cV += 1
            t3cE += 0
            t3cD += 0
            t3cS += parseInt(input3x2c_3.value)
            t3cS -= parseInt(input3x2c_2.value)
            t3cGP += parseInt(input3x2c_3.value)
            t3cGC += parseInt(input3x2c_2.value)
            
            t2cP += 0
            t2cJ += 1
            t2cV += 0
            t2cE += 0
            t2cD += 1
            t2cS += parseInt(input3x2c_2.value)
            t2cS -= parseInt(input3x2c_3.value)
            t2cGP += parseInt(input3x2c_2.value)
            t2cGC += parseInt(input3x2c_3.value)
        }
        else if(input3x2c_3.value < input3x2c_2.value){
            t3cP += 0
            t3cJ += 1
            t3cV += 0
            t3cE += 0
            t3cD += 1
            t3cS += parseInt(input3x2c_3.value)
            t3cS -= parseInt(input3x2c_2.value)
            t3cGP += parseInt(input3x2c_3.value)
            t3cGC += parseInt(input3x2c_2.value)
        
            t2cP += 3
            t2cJ += 1
            t2cV += 1
            t2cE += 0
            t2cD += 0
            t2cS += parseInt(input3x2c_2.value)
            t2cS -= parseInt(input3x2c_3.value)
            t2cGP += parseInt(input3x2c_2.value)
            t2cGC += parseInt(input3x2c_3.value)
        }
        else if(input3x2c_3.value == input3x2c_2.value){
            t3cP += 1
            t3cJ += 1
            t3cV += 0
            t3cE += 1
            t3cD += 0
            t3cS += parseInt(input3x2c_3.value)
            t3cS -= parseInt(input3x2c_2.value)
            t3cGP += parseInt(input3x2c_3.value)
            t3cGC += parseInt(input3x2c_2.value)
            
            t2cP += 1
            t2cJ += 1
            t2cV += 0
            t2cE += 1
            t2cD += 0
            t2cS += parseInt(input3x2c_2.value)
            t2cS -= parseInt(input3x2c_3.value)
            t2cGP += parseInt(input3x2c_2.value)
            t2cGC += parseInt(input3x2c_3.value)
        }
    }
    if(input4x1c_4.value != "" && input4x1c_1.value != ""){
        if(input4x1c_4.value > input4x1c_1.value){
            t4cP += 3
            t4cJ += 1
            t4cV += 1
            t4cE += 0
            t4cD += 0
            t4cS += parseInt(input4x1c_4.value)
            t4cS -= parseInt(input4x1c_1.value)
            t4cGP += parseInt(input4x1c_4.value)
            t4cGC += parseInt(input4x1c_1.value)
            
            t1cP += 0
            t1cJ += 1
            t1cV += 0
            t1cE += 0
            t1cD += 1
            t1cS += parseInt(input4x1c_1.value)
            t1cS -= parseInt(input4x1c_4.value)
            t1cGP += parseInt(input4x1c_1.value)
            t1cGC += parseInt(input4x1c_4.value)
        }
        else if(input4x1c_4.value < input4x1c_1.value){
            t4cP += 0
            t4cJ += 1
            t4cV += 0
            t4cE += 0
            t4cD += 1
            t4cS += parseInt(input4x1c_4.value)
            t4cS -= parseInt(input4x1c_1.value)
            t4cGP += parseInt(input4x1c_4.value)
            t4cGC += parseInt(input4x1c_1.value)
            
            t1cP += 3
            t1cJ += 1
            t1cV += 1
            t1cE += 0
            t1cD += 0
            t1cS += parseInt(input4x1c_1.value)
            t1cS -= parseInt(input4x1c_4.value)
            t1cGP += parseInt(input4x1c_1.value)
            t1cGC += parseInt(input4x1c_4.value)
        }
        else if(input4x1c_4.value == input4x1c_1.value){
            t4cP += 1
            t4cJ += 1
            t4cV += 0
            t4cE += 1
            t4cD += 0
            t4cS += parseInt(input4x1c_4.value)
            t4cS -= parseInt(input4x1c_1.value)
            t4cGP += parseInt(input4x1c_4.value)
            t4cGC += parseInt(input4x1c_1.value)
            
            t1cP += 1
            t1cJ += 1
            t1cV += 0
            t1cE += 1
            t1cD += 0
            t1cS += parseInt(input4x1c_1.value)
            t1cS -= parseInt(input4x1c_4.value)
            t1cGP += parseInt(input4x1c_1.value)
            t1cGC += parseInt(input4x1c_4.value)
        }
    }
    if(input4x2c_4.value != "" && input4x2c_2.value != ""){
        if(input4x2c_4.value > input4x2c_2.value){
            t4cP += 3
            t4cJ += 1
            t4cV += 1
            t4cE += 0
            t4cD += 0
            t4cS += parseInt(input4x2c_4.value)
            t4cS -= parseInt(input4x2c_2.value)
            t4cGP += parseInt(input4x2c_4.value)
            t4cGC += parseInt(input4x2c_2.value)
            
            t2cP += 0
            t2cJ += 1
            t2cV += 0
            t2cE += 0
            t2cD += 1
            t2cS += parseInt(input4x2c_2.value)
            t2cS -= parseInt(input4x2c_4.value)
            t2cGP += parseInt(input4x2c_2.value)
            t2cGC += parseInt(input4x2c_4.value)
        }
        else if(input4x2c_4.value < input4x2c_2.value){
            t4cP += 0
            t4cJ += 1
            t4cV += 0
            t4cE += 0
            t4cD += 1
            t4cS += parseInt(input4x2c_4.value)
            t4cS -= parseInt(input4x2c_2.value)
            t4cGP += parseInt(input4x2c_4.value)
            t4cGC += parseInt(input4x2c_2.value)
            
            t2cP += 3
            t2cJ += 1
            t2cV += 1
            t2cE += 0
            t2cD += 0
            t2cS += parseInt(input4x2c_2.value)
            t2cS -= parseInt(input4x2c_4.value)
            t2cGP += parseInt(input4x2c_2.value)
            t2cGC += parseInt(input4x2c_4.value)
        }
        else if(input4x2c_4.value == input4x2c_2.value){
            t4cP += 1
            t4cJ += 1
            t4cV += 0
            t4cE += 1
            t4cD += 0
            t4cS += parseInt(input4x2c_4.value)
            t4cS -= parseInt(input4x2c_2.value)
            t4cGP += parseInt(input4x2c_4.value)
            t4cGC += parseInt(input4x2c_2.value)
            
            t2cP += 1
            t2cJ += 1
            t2cV += 0
            t2cE += 1
            t2cD += 0
            t2cS += parseInt(input4x2c_2.value)
            t2cS -= parseInt(input4x2c_4.value)
            t2cGP += parseInt(input4x2c_2.value)
            t2cGC += parseInt(input4x2c_4.value)
        }
    }
    if(input1x3c_1.value != "" && input1x3c_3.value != ""){
        if(input1x3c_1.value > input1x3c_3.value){
            t1cP += 3
            t1cJ += 1
            t1cV += 1
            t1cE += 0
            t1cD += 0
            t1cS += parseInt(input1x3c_1.value)
            t1cS -= parseInt(input1x3c_3.value)
            t1cGP += parseInt(input1x3c_1.value)
            t1cGC += parseInt(input1x3c_3.value)
            
            t3cP += 0
            t3cJ += 1
            t3cV += 0
            t3cE += 0
            t3cD += 1
            t3cS += parseInt(input1x3c_3.value)
            t3cS -= parseInt(input1x3c_1.value)
            t3cGP += parseInt(input1x3c_3.value)
            t3cGC += parseInt(input1x3c_1.value)
        }
        else if(input1x3c_1.value < input1x3c_3.value){
            t1cP += 0
            t1cJ += 1
            t1cV += 0
            t1cE += 0
            t1cD += 1
            t1cS += parseInt(input1x3c_1.value)
            t1cS -= parseInt(input1x3c_3.value)
            t1cGP += parseInt(input1x3c_1.value)
            t1cGC += parseInt(input1x3c_3.value)
            
            t3cP += 3
            t3cJ += 1
            t3cV += 1
            t3cE += 0
            t3cD += 0
            t3cS += parseInt(input1x3c_3.value)
            t3cS -= parseInt(input1x3c_1.value)
            t3cGP += parseInt(input1x3c_3.value)
            t3cGC += parseInt(input1x3c_1.value)
        }
        else if(input1x3c_1.value == input1x3c_3.value){
            t1cP += 1
            t1cJ += 1
            t1cV += 0
            t1cE += 1
            t1cD += 0
            t1cS += parseInt(input1x3c_1.value)
            t1cS -= parseInt(input1x3c_3.value)
            t1cGP += parseInt(input1x3c_1.value)
            t1cGC += parseInt(input1x3c_3.value)
            
            t3cP += 1
            t3cJ += 1
            t3cV += 0
            t3cE += 1
            t3cD += 0
            t3cS += parseInt(input1x3c_3.value)
            t3cS -= parseInt(input1x3c_1.value)
            t3cGP += parseInt(input1x3c_3.value)
            t3cGC += parseInt(input1x3c_1.value)
        }
    }
    if(input3x4c_3.value != "" && input3x4c_4.value != ""){
        if(input3x4c_3.value > input3x4c_4.value){
            t3cP += 3
            t3cJ += 1
            t3cV += 1
            t3cE += 0
            t3cD += 0
            t3cS += parseInt(input3x4c_3.value)
            t3cS -= parseInt(input3x4c_4.value)
            t3cGP += parseInt(input3x4c_3.value)
            t3cGC += parseInt(input3x4c_4.value)
            
            t4cP += 0
            t4cJ += 1
            t4cV += 0
            t4cE += 0
            t4cD += 1
            t4cS += parseInt(input3x4c_4.value)
            t4cS -= parseInt(input3x4c_3.value)
            t4cGP += parseInt(input3x4c_4.value)
            t4cGC += parseInt(input3x4c_3.value)
        }
        else if(input3x4c_3.value < input3x4c_4.value){
            t3cP += 0
            t3cJ += 1
            t3cV += 0
            t3cE += 0
            t3cD += 1
            t3cS += parseInt(input3x4c_3.value)
            t3cS -= parseInt(input3x4c_4.value)
            t3cGP += parseInt(input3x4c_3.value)
            t3cGC += parseInt(input3x4c_4.value)
            
            t4cP += 3
            t4cJ += 1
            t4cV += 1
            t4cE += 0
            t4cD += 0
            t4cS += parseInt(input3x4c_4.value)
            t4cS -= parseInt(input3x4c_3.value)
            t4cGP += parseInt(input3x4c_4.value)
            t4cGC += parseInt(input3x4c_3.value)
        }
        else if(input3x4c_3.value == input3x4c_4.value){
            t3cP += 1
            t3cJ += 1
            t3cV += 0
            t3cE += 1
            t3cD += 0
            t3cS += parseInt(input3x4c_3.value)
            t3cS -= parseInt(input3x4c_4.value)
            t3cGP += parseInt(input3x4c_3.value)
            t3cGC += parseInt(input3x4c_4.value)
            
            t4cP += 1
            t4cJ += 1
            t4cV += 0
            t4cE += 1
            t4cD += 0
            t4cS += parseInt(input3x4c_4.value)
            t4cS -= parseInt(input3x4c_3.value)
            t4cGP += parseInt(input3x4c_4.value)
            t4cGC += parseInt(input3x4c_3.value)
        }
    }
    if(input2x1c_2.value != "" && input2x1c_1.value != ""){
        if(input2x1c_2.value > input2x1c_1.value){
            t2cP += 3
            t2cJ += 1
            t2cV += 1
            t2cE += 0
            t2cD += 0
            t2cS += parseInt(input2x1c_2.value)
            t2cS -= parseInt(input2x1c_1.value)
            t2cGP += parseInt(input2x1c_2.value)
            t2cGC += parseInt(input2x1c_1.value)
            
            t1cP += 0
            t1cJ += 1
            t1cV += 0
            t1cE += 0
            t1cD += 1
            t1cS += parseInt(input2x1c_1.value)
            t1cS -= parseInt(input2x1c_2.value)
            t1cGP += parseInt(input2x1c_1.value)
            t1cGC += parseInt(input2x1c_2.value)
        }
        else if(input2x1c_2.value < input2x1c_1.value){
            t2cP += 0
            t2cJ += 1
            t2cV += 0
            t2cE += 0
            t2cD += 1
            t2cS += parseInt(input2x1c_2.value)
            t2cS -= parseInt(input2x1c_1.value)
            t2cGP += parseInt(input2x1c_2.value)
            t2cGC += parseInt(input2x1c_1.value)
            
            t1cP += 3
            t1cJ += 1
            t1cV += 1
            t1cE += 0
            t1cD += 0
            t1cS += parseInt(input2x1c_1.value)
            t1cS -= parseInt(input2x1c_2.value)
            t1cGP += parseInt(input2x1c_1.value)
            t1cGC += parseInt(input2x1c_2.value)
        }
        else if(input2x1c_2.value == input2x1c_1.value){
            t2cP += 1
            t2cJ += 1
            t2cV += 0
            t2cE += 1
            t2cD += 0
            t2cS += parseInt(input2x1c_2.value)
            t2cS -= parseInt(input2x1c_1.value)
            t2cGP += parseInt(input2x1c_2.value)
            t2cGC += parseInt(input2x1c_1.value)
            
            t1cP += 1
            t1cJ += 1
            t1cV += 0
            t1cE += 1
            t1cD += 0
            t1cS += parseInt(input2x1c_1.value)
            t1cS -= parseInt(input2x1c_2.value)
            t1cGP += parseInt(input2x1c_1.value)
            t1cGC += parseInt(input2x1c_2.value)
        }
    }

    var crrcy_time1 = [time1c[1],
                        t1cP,
                        t1cJ,
                        t1cV,
                        t1cE,
                        t1cD,
                        t1cS,
                        t1cGP,
                        t1cGC
                    ]
    var crrcy_time2 = [time2c[1],
                        t2cP,
                        t2cJ,
                        t2cV,
                        t2cE,
                        t2cD,
                        t2cS,
                        t2cGP,
                        t2cGC
                    ]
    var crrcy_time3 = [time3c[1],
                        t3cP,
                        t3cJ,
                        t3cV,
                        t3cE,
                        t3cD,
                        t3cS,
                        t3cGP,
                        t3cGC
                    ]
    var crrcy_time4 = [time4c[1],
                        t4cP,
                        t4cJ,
                        t4cV,
                        t4cE,
                        t4cD,
                        t4cS,
                        t4cGP,
                        t4cGC
                    ]
    var mctriz = [crrcy_time1, crrcy_time2, crrcy_time3, crrcy_time4]
    var mctrizcjustcdc = ajuste(mctriz)

    console.log(mctrizcjustcdc)

    // CRIcNDO TIME 1 c
    var time1c_nome = document.querySelector("#time1c_nome")
    time1c_nome.textContent = " " + (mctrizcjustcdc[0][0].toUpperCase())
    var time1c_img = document.querySelector("#time1c_img")
    time1c_img.src = mctrizcjustcdc[0][0] + ".png"
    var time1c_P = document.querySelector("#time1c_P")
    time1c_P.textContent = mctrizcjustcdc[0][1]
    var time1c_J = document.querySelector("#time1c_J")
    time1c_J.textContent = mctrizcjustcdc[0][2]
    var time1c_V = document.querySelector("#time1c_V")
    time1c_V.textContent = mctrizcjustcdc[0][3]
    var time1c_E = document.querySelector("#time1c_E")
    time1c_E.textContent = mctrizcjustcdc[0][4]
    var time1c_D = document.querySelector("#time1c_D")
    time1c_D.textContent = mctrizcjustcdc[0][5]
    var time1c_S = document.querySelector("#time1c_S")
    time1c_S.textContent = mctrizcjustcdc[0][6]
    var time1c_GP = document.querySelector("#time1c_GP")
    time1c_GP.textContent = mctrizcjustcdc[0][7]
    var time1c_GC = document.querySelector("#time1c_GC")
    time1c_GC.textContent = mctrizcjustcdc[0][8]

    // CRIcNDO TIME 2 c

    var time2c_nome = document.querySelector("#time2c_nome")
    time2c_nome.textContent = " " + mctrizcjustcdc[1][0].toUpperCase()
    var time2c_img = document.querySelector("#time2c_img")
    time2c_img.src = mctrizcjustcdc[1][0] + ".png"
    var time2c_P = document.querySelector("#time2c_P")
    time2c_P.textContent = mctrizcjustcdc[1][1]
    var time2c_J = document.querySelector("#time2c_J")
    time2c_J.textContent = mctrizcjustcdc[1][2]
    var time2c_V = document.querySelector("#time2c_V")
    time2c_V.textContent = mctrizcjustcdc[1][3]
    var time2c_E = document.querySelector("#time2c_E")
    time2c_E.textContent = mctrizcjustcdc[1][4]
    var time2c_D = document.querySelector("#time2c_D")
    time2c_D.textContent = mctrizcjustcdc[1][5]
    var time2c_S = document.querySelector("#time2c_S")
    time2c_S.textContent = mctrizcjustcdc[1][6]
    var time2c_GP = document.querySelector("#time2c_GP")
    time2c_GP.textContent = mctrizcjustcdc[1][7]
    var time2c_GC = document.querySelector("#time2c_GC")
    time2c_GC.textContent = mctrizcjustcdc[1][8]

    // CRIcNDO TIME 3 c

    var time3c_nome = document.querySelector("#time3c_nome")
    time3c_nome.textContent = " " + mctrizcjustcdc[2][0].toUpperCase()
    var time3c_img = document.querySelector("#time3c_img")
    time3c_img.src = mctrizcjustcdc[2][0] + ".png"
    var time3c_P = document.querySelector("#time3c_P")
    time3c_P.textContent = mctrizcjustcdc[2][1]
    var time3c_J = document.querySelector("#time3c_J")
    time3c_J.textContent = mctrizcjustcdc[2][2]
    var time3c_V = document.querySelector("#time3c_V")
    time3c_V.textContent = mctrizcjustcdc[2][3]
    var time3c_E = document.querySelector("#time3c_E")
    time3c_E.textContent = mctrizcjustcdc[2][4]
    var time3c_D = document.querySelector("#time3c_D")
    time3c_D.textContent = mctrizcjustcdc[2][5]
    var time3c_S = document.querySelector("#time3c_S")
    time3c_S.textContent = mctrizcjustcdc[2][6]
    var time3c_GP = document.querySelector("#time3c_GP")
    time3c_GP.textContent = mctrizcjustcdc[2][7]
    var time3c_GC = document.querySelector("#time3c_GC")
    time3c_GC.textContent = mctrizcjustcdc[2][8]

    // CRIcNDO TIME 4 c

    var time4c_nome = document.querySelector("#time4c_nome")
    time4c_nome.textContent = " " + mctrizcjustcdc[3][0].toUpperCase()
    var time4c_img = document.querySelector("#time4c_img")
    time4c_img.src = mctrizcjustcdc[3][0] + ".png"
    var time4c_P = document.querySelector("#time4c_P")
    time4c_P.textContent = mctrizcjustcdc[3][1]
    var time4c_J = document.querySelector("#time4c_J")
    time4c_J.textContent = mctrizcjustcdc[3][2]
    var time4c_V = document.querySelector("#time4c_V")
    time4c_V.textContent = mctrizcjustcdc[3][3]
    var time4c_E = document.querySelector("#time4c_E")
    time4c_E.textContent = mctrizcjustcdc[3][4]
    var time4c_D = document.querySelector("#time4c_D")
    time4c_D.textContent = mctrizcjustcdc[3][5]
    var time4c_S = document.querySelector("#time4c_S")
    time4c_S.textContent = mctrizcjustcdc[3][6]
    var time4c_GP = document.querySelector("#time4c_GP")
    time4c_GP.textContent = mctrizcjustcdc[3][7]
    var time4c_GC = document.querySelector("#time4c_GC")
    time4c_GC.textContent = mctrizcjustcdc[3][8]

    var t1dP = 0
    var t1dJ = 0
    var t1dV = 0
    var t1dE = 0
    var t1dD = 0
    var t1dS = 0
    var t1dGP = 0
    var t1dGC = 0
    
    var t2dP = 0
    var t2dJ = 0
    var t2dV = 0
    var t2dE = 0
    var t2dD = 0
    var t2dS = 0
    var t2dGP = 0
    var t2dGC = 0

    var t3dP = 0
    var t3dJ = 0
    var t3dV = 0
    var t3dE = 0
    var t3dD = 0
    var t3dS = 0
    var t3dGP = 0
    var t3dGC = 0

    var t4dP = 0
    var t4dJ = 0
    var t4dV = 0
    var t4dE = 0
    var t4dD = 0
    var t4dS = 0
    var t4dGP = 0
    var t4dGC = 0

    if(input1x2d_1.value != "" && input1x2d_2.value != ""){
        if(input1x2d_1.value > input1x2d_2.value){
            t1dP += 3
            t1dJ += 1
            t1dV += 1
            t1dE += 0
            t1dD += 0
            t1dS += parseInt(input1x2d_1.value)
            t1dS -= parseInt(input1x2d_2.value)
            t1dGP += parseInt(input1x2d_1.value)
            t1dGC += parseInt(input1x2d_2.value)
            
            t2dP += 0
            t2dJ += 1
            t2dV += 0
            t2dE += 0
            t2dD += 1
            t2dS += parseInt(input1x2d_2.value)
            t2dS -= parseInt(input1x2d_1.value)
            t2dGP += parseInt(input1x2d_2.value)
            t2dGC += parseInt(input1x2d_1.value)
        }
        else if(input1x2d_1.value < input1x2d_2.value){
            t1dP += 0
            t1dJ += 1
            t1dV += 0
            t1dE += 0
            t1dD += 1
            t1dS += parseInt(input1x2d_1.value)
            t1dS -= parseInt(input1x2d_2.value)
            t1dGP += parseInt(input1x2d_1.value)
            t1dGC += parseInt(input1x2d_2.value)
            
            t2dP += 3
            t2dJ += 1
            t2dV += 1
            t2dE += 0
            t2dD += 0
            t2dS += parseInt(input1x2d_2.value)
            t2dS -= parseInt(input1x2d_1.value)
            t2dGP += parseInt(input1x2d_2.value)
            t2dGC += parseInt(input1x2d_1.value)
        }
        else if(input1x2d_1.value == input1x2d_2.value){
            t1dP += 1
            t1dJ += 1
            t1dV += 0
            t1dE += 1
            t1dD += 0
            t1dS += parseInt(input1x2d_1.value)
            t1dS -= parseInt(input1x2d_2.value)
            t1dGP += parseInt(input1x2d_1.value)
            t1dGC += parseInt(input1x2d_2.value)
            
            t2dP += 1
            t2dJ += 1
            t2dV += 0
            t2dE += 1
            t2dD += 0
            t2dS += parseInt(input1x2d_2.value)
            t2dS -= parseInt(input1x2d_1.value)
            t2dGP += parseInt(input1x2d_2.value)
            t2dGC += parseInt(input1x2d_1.value)
        }
    }
    if(input4x3d_4.value != "" && input4x3d_3.value != ""){
        if(input4x3d_4.value > input4x3d_3.value){
            t4dP += 3
            t4dJ += 1
            t4dV += 1
            t4dE += 0
            t4dD += 0
            t4dS += parseInt(input4x3d_4.value)
            t4dS -= parseInt(input4x3d_3.value)
            t4dGP += parseInt(input4x3d_4.value)
            t4dGC += parseInt(input4x3d_3.value)
            
            t3dP += 0
            t3dJ += 1
            t3dV += 0
            t3dE += 0
            t3dD += 1
            t3dS += parseInt(input4x3d_3.value)
            t3dS -= parseInt(input4x3d_4.value)
            t3dGP += parseInt(input4x3d_3.value)
            t3dGC += parseInt(input4x3d_4.value)
        }
        else if(input4x3d_4.value < input4x3d_3.value){
            t4dP += 0
            t4dJ += 1
            t4dV += 0
            t4dE += 0
            t4dD += 1
            t4dS += parseInt(input4x3d_4.value)
            t4dS -= parseInt(input4x3d_3.value)
            t4dGP += parseInt(input4x3d_4.value)
            t4dGC += parseInt(input4x3d_3.value)
            
            t3dP += 3
            t3dJ += 1
            t3dV += 1
            t3dE += 0
            t3dD += 0
            t3dS += parseInt(input4x3d_3.value)
            t3dS -= parseInt(input4x3d_4.value)
            t3dGP += parseInt(input4x3d_3.value)
            t3dGC += parseInt(input4x3d_4.value)
        }
        else if(input4x3d_4.value == input4x3d_3.value){
            t4dP += 1
            t4dJ += 1
            t4dV += 0
            t4dE += 1
            t4dD += 0
            t4dS += parseInt(input4x3d_4.value)
            t4dS -= parseInt(input4x3d_3.value)
            t4dGP += parseInt(input4x3d_4.value)
            t4dGC += parseInt(input4x3d_3.value)
            
            t3dP += 1
            t3dJ += 1
            t3dV += 0
            t3dE += 1
            t3dD += 0
            t3dS += parseInt(input4x3d_3.value)
            t3dS -= parseInt(input4x3d_4.value)
            t3dGP += parseInt(input4x3d_3.value)
            t3dGC += parseInt(input4x3d_4.value)
        }
    }
    if(input3x1d_3.value != "" && input3x1d_1.value != ""){
        if(input3x1d_3.value > input3x1d_1.value){
            t3dP += 3
            t3dJ += 1
            t3dV += 1
            t3dE += 0
            t3dD += 0
            t3dS += parseInt(input3x1d_3.value)
            t3dS -= parseInt(input3x1d_1.value)
            t3dGP += parseInt(input3x1d_3.value)
            t3dGC += parseInt(input3x1d_1.value)
            
            t1dP += 0
            t1dJ += 1
            t1dV += 0
            t1dE += 0
            t1dD += 1
            t1dS += parseInt(input3x1d_1.value)
            t1dS -= parseInt(input3x1d_3.value)
            t1dGP += parseInt(input3x1d_1.value)
            t1dGC += parseInt(input3x1d_3.value)
        }
        else if(input3x1d_3.value < input3x1d_1.value){
            t3dP += 0
            t3dJ += 1
            t3dV += 0
            t3dE += 0
            t3dD += 1
            t3dS += parseInt(input3x1d_3.value)
            t3dS -= parseInt(input3x1d_1.value)
            t3dGP += parseInt(input3x1d_3.value)
            t3dGC += parseInt(input3x1d_1.value)
            
            t1dP += 3
            t1dJ += 1
            t1dV += 1
            t1dE += 0
            t1dD += 0
            t1dS += parseInt(input3x1d_1.value)
            t1dS -= parseInt(input3x1d_3.value)
            t1dGP += parseInt(input3x1d_1.value)
            t1dGC += parseInt(input3x1d_3.value)
        }
        else if(input3x1d_3.value == input3x1d_1.value){
            t3dP += 1
            t3dJ += 1
            t3dV += 0
            t3dE += 1
            t3dD += 0
            t3dS += parseInt(input3x1d_3.value)
            t3dS -= parseInt(input3x1d_1.value)
            t3dGP += parseInt(input3x1d_3.value)
            t3dGC += parseInt(input3x1d_1.value)
            
            t1dP += 1
            t1dJ += 1
            t1dV += 0
            t1dE += 1
            t1dD += 0
            t1dS += parseInt(input3x1d_1.value)
            t1dS -= parseInt(input3x1d_3.value)
            t1dGP += parseInt(input3x1d_1.value)
            t1dGC += parseInt(input3x1d_3.value)
        }
    }
    if(input2x4d_2.value != "" && input2x4d_4.value != ""){
        if(input2x4d_2.value > input2x4d_4.value){
            t2dP += 3
            t2dJ += 1
            t2dV += 1
            t2dE += 0
            t2dD += 0
            t2dS += parseInt(input2x4d_2.value)
            t2dS -= parseInt(input2x4d_4.value)
            t2dGP += parseInt(input2x4d_2.value)
            t2dGC += parseInt(input2x4d_4.value)
            
            t4dP += 0
            t4dJ += 1
            t4dV += 0
            t4dE += 0
            t4dD += 1
            t4dS += parseInt(input2x4d_4.value)
            t4dS -= parseInt(input2x4d_2.value)
            t4dGP += parseInt(input2x4d_4.value)
            t4dGC += parseInt(input2x4d_2.value)
        }
        else if(input2x4d_2.value < input2x4d_4.value){
            t2dP += 0
            t2dJ += 1
            t2dV += 0
            t2dE += 0
            t2dD += 1
            t2dS += parseInt(input2x4d_2.value)
            t2dS -= parseInt(input2x4d_4.value)
            t2dGP += parseInt(input2x4d_2.value)
            t2dGC += parseInt(input2x4d_4.value)
            
            t4dP += 3
            t4dJ += 1
            t4dV += 1
            t4dE += 0
            t4dD += 0
            t4dS += parseInt(input2x4d_4.value)
            t4dS -= parseInt(input2x4d_2.value)
            t4dGP += parseInt(input2x4d_4.value)
            t4dGC += parseInt(input2x4d_2.value)
        }
        else if(input2x4d_2.value == input2x4d_4.value){
            t2dP += 1
            t2dJ += 1
            t2dV += 0
            t2dE += 1
            t2dD += 0
            t2dS += parseInt(input2x4d_2.value)
            t2dS -= parseInt(input2x4d_4.value)
            t2dGP += parseInt(input2x4d_2.value)
            t2dGC += parseInt(input2x4d_4.value)
            
            t4dP += 1
            t4dJ += 1
            t4dV += 0
            t4dE += 1
            t4dD += 0
            t4dS += parseInt(input2x4d_4.value)
            t4dS -= parseInt(input2x4d_2.value)
            t4dGP += parseInt(input2x4d_4.value)
            t4dGC += parseInt(input2x4d_2.value)
        }
    }
    if(input1x4d_1.value != "" && input1x4d_4.value != ""){
        if(input1x4d_1.value > input1x4d_4.value){
            t1dP += 3
            t1dJ += 1
            t1dV += 1
            t1dE += 0
            t1dD += 0
            t1dS += parseInt(input1x4d_1.value)
            t1dS -= parseInt(input1x4d_4.value)
            t1dGP += parseInt(input1x4d_1.value)
            t1dGC += parseInt(input1x4d_4.value)
            
            t4dP += 0
            t4dJ += 1
            t4dV += 0
            t4dE += 0
            t4dD += 1
            t4dS += parseInt(input1x4d_4.value)
            t4dS -= parseInt(input1x4d_1.value)
            t4dGP += parseInt(input1x4d_4.value)
            t4dGC += parseInt(input1x4d_1.value)
        }
        else if(input1x4d_1.value < input1x4d_4.value){
            t1dP += 0
            t1dJ += 1
            t1dV += 0
            t1dE += 0
            t1dD += 1
            t1dS += parseInt(input1x4d_1.value)
            t1dS -= parseInt(input1x4d_4.value)
            t1dGP += parseInt(input1x4d_1.value)
            t1dGC += parseInt(input1x4d_4.value)
            
            t4dP += 3
            t4dJ += 1
            t4dV += 1
            t4dE += 0
            t4dD += 0
            t4dS += parseInt(input1x4d_4.value)
            t4dS -= parseInt(input1x4d_1.value)
            t4dGP += parseInt(input1x4d_4.value)
            t4dGC += parseInt(input1x4d_1.value)
        }
        else if(input1x4d_1.value == input1x4d_4.value){
            t1dP += 1
            t1dJ += 1
            t1dV += 0
            t1dE += 1
            t1dD += 0
            t1dS += parseInt(input1x4d_1.value)
            t1dS -= parseInt(input1x4d_4.value)
            t1dGP += parseInt(input1x4d_1.value)
            t1dGC += parseInt(input1x4d_4.value)
            
            t4dP += 1
            t4dJ += 1
            t4dV += 0
            t4dE += 1
            t4dD += 0
            t4dS += parseInt(input1x4d_4.value)
            t4dS -= parseInt(input1x4d_1.value)
            t4dGP += parseInt(input1x4d_4.value)
            t4dGC += parseInt(input1x4d_1.value)
        }
    }
    if(input2x3d_2.value != "" && input2x3d_3.value != ""){
        if(input2x3d_2.value > input2x3d_3.value){
            t2dP += 3
            t2dJ += 1
            t2dV += 1
            t2dE += 0
            t2dD += 0
            t2dS += parseInt(input2x3d_2.value)
            t2dS -= parseInt(input2x3d_3.value)
            t2dGP += parseInt(input2x3d_2.value)
            t2dGC += parseInt(input2x3d_3.value)
            
            t3dP += 0
            t3dJ += 1
            t3dV += 0
            t3dE += 0
            t3dD += 1
            t3dS += parseInt(input2x3d_3.value)
            t3dS -= parseInt(input2x3d_2.value)
            t3dGP += parseInt(input2x3d_3.value)
            t3dGC += parseInt(input2x3d_2.value)
        }
        else if(input2x3d_2.value < input2x3d_3.value){
            t2dP += 0
            t2dJ += 1
            t2dV += 0
            t2dE += 0
            t2dD += 1
            t2dS += parseInt(input2x3d_2.value)
            t2dS -= parseInt(input2x3d_3.value)
            t2dGP += parseInt(input2x3d_2.value)
            t2dGC += parseInt(input2x3d_3.value)
            
            t3dP += 3
            t3dJ += 1
            t3dV += 1
            t3dE += 0
            t3dD += 0
            t3dS += parseInt(input2x3d_3.value)
            t3dS -= parseInt(input2x3d_2.value)
            t3dGP += parseInt(input2x3d_3.value)
            t3dGC += parseInt(input2x3d_2.value)
        }
        else if(input2x3d_2.value == input2x3d_3.value){
            t2dP += 1
            t2dJ += 1
            t2dV += 0
            t2dE += 1
            t2dD += 0
            t2dS += parseInt(input2x3d_2.value)
            t2dS -= parseInt(input2x3d_3.value)
            t2dGP += parseInt(input2x3d_2.value)
            t2dGC += parseInt(input2x3d_3.value)
            
            t3dP += 1
            t3dJ += 1
            t3dV += 0
            t3dE += 1
            t3dD += 0
            t3dS += parseInt(input2x3d_3.value)
            t3dS -= parseInt(input2x3d_2.value)
            t3dGP += parseInt(input2x3d_3.value)
            t3dGC += parseInt(input2x3d_2.value)
        }
    }
    if(input3x2d_3.value != "" && input3x2d_2.value != ""){
        if(input3x2d_3.value > input3x2d_2.value){
            t3dP += 3
            t3dJ += 1
            t3dV += 1
            t3dE += 0
            t3dD += 0
            t3dS += parseInt(input3x2d_3.value)
            t3dS -= parseInt(input3x2d_2.value)
            t3dGP += parseInt(input3x2d_3.value)
            t3dGC += parseInt(input3x2d_2.value)
            
            t2dP += 0
            t2dJ += 1
            t2dV += 0
            t2dE += 0
            t2dD += 1
            t2dS += parseInt(input3x2d_2.value)
            t2dS -= parseInt(input3x2d_3.value)
            t2dGP += parseInt(input3x2d_2.value)
            t2dGC += parseInt(input3x2d_3.value)
        }
        else if(input3x2d_3.value < input3x2d_2.value){
            t3dP += 0
            t3dJ += 1
            t3dV += 0
            t3dE += 0
            t3dD += 1
            t3dS += parseInt(input3x2d_3.value)
            t3dS -= parseInt(input3x2d_2.value)
            t3dGP += parseInt(input3x2d_3.value)
            t3dGC += parseInt(input3x2d_2.value)
        
            t2dP += 3
            t2dJ += 1
            t2dV += 1
            t2dE += 0
            t2dD += 0
            t2dS += parseInt(input3x2d_2.value)
            t2dS -= parseInt(input3x2d_3.value)
            t2dGP += parseInt(input3x2d_2.value)
            t2dGC += parseInt(input3x2d_3.value)
        }
        else if(input3x2d_3.value == input3x2d_2.value){
            t3dP += 1
            t3dJ += 1
            t3dV += 0
            t3dE += 1
            t3dD += 0
            t3dS += parseInt(input3x2d_3.value)
            t3dS -= parseInt(input3x2d_2.value)
            t3dGP += parseInt(input3x2d_3.value)
            t3dGC += parseInt(input3x2d_2.value)
            
            t2dP += 1
            t2dJ += 1
            t2dV += 0
            t2dE += 1
            t2dD += 0
            t2dS += parseInt(input3x2d_2.value)
            t2dS -= parseInt(input3x2d_3.value)
            t2dGP += parseInt(input3x2d_2.value)
            t2dGC += parseInt(input3x2d_3.value)
        }
    }
    if(input4x1d_4.value != "" && input4x1d_1.value != ""){
        if(input4x1d_4.value > input4x1d_1.value){
            t4dP += 3
            t4dJ += 1
            t4dV += 1
            t4dE += 0
            t4dD += 0
            t4dS += parseInt(input4x1d_4.value)
            t4dS -= parseInt(input4x1d_1.value)
            t4dGP += parseInt(input4x1d_4.value)
            t4dGC += parseInt(input4x1d_1.value)
            
            t1dP += 0
            t1dJ += 1
            t1dV += 0
            t1dE += 0
            t1dD += 1
            t1dS += parseInt(input4x1d_1.value)
            t1dS -= parseInt(input4x1d_4.value)
            t1dGP += parseInt(input4x1d_1.value)
            t1dGC += parseInt(input4x1d_4.value)
        }
        else if(input4x1d_4.value < input4x1d_1.value){
            t4dP += 0
            t4dJ += 1
            t4dV += 0
            t4dE += 0
            t4dD += 1
            t4dS += parseInt(input4x1d_4.value)
            t4dS -= parseInt(input4x1d_1.value)
            t4dGP += parseInt(input4x1d_4.value)
            t4dGC += parseInt(input4x1d_1.value)
            
            t1dP += 3
            t1dJ += 1
            t1dV += 1
            t1dE += 0
            t1dD += 0
            t1dS += parseInt(input4x1d_1.value)
            t1dS -= parseInt(input4x1d_4.value)
            t1dGP += parseInt(input4x1d_1.value)
            t1dGC += parseInt(input4x1d_4.value)
        }
        else if(input4x1d_4.value == input4x1d_1.value){
            t4dP += 1
            t4dJ += 1
            t4dV += 0
            t4dE += 1
            t4dD += 0
            t4dS += parseInt(input4x1d_4.value)
            t4dS -= parseInt(input4x1d_1.value)
            t4dGP += parseInt(input4x1d_4.value)
            t4dGC += parseInt(input4x1d_1.value)
            
            t1dP += 1
            t1dJ += 1
            t1dV += 0
            t1dE += 1
            t1dD += 0
            t1dS += parseInt(input4x1d_1.value)
            t1dS -= parseInt(input4x1d_4.value)
            t1dGP += parseInt(input4x1d_1.value)
            t1dGC += parseInt(input4x1d_4.value)
        }
    }
    if(input4x2d_4.value != "" && input4x2d_2.value != ""){
        if(input4x2d_4.value > input4x2d_2.value){
            t4dP += 3
            t4dJ += 1
            t4dV += 1
            t4dE += 0
            t4dD += 0
            t4dS += parseInt(input4x2d_4.value)
            t4dS -= parseInt(input4x2d_2.value)
            t4dGP += parseInt(input4x2d_4.value)
            t4dGC += parseInt(input4x2d_2.value)
            
            t2dP += 0
            t2dJ += 1
            t2dV += 0
            t2dE += 0
            t2dD += 1
            t2dS += parseInt(input4x2d_2.value)
            t2dS -= parseInt(input4x2d_4.value)
            t2dGP += parseInt(input4x2d_2.value)
            t2dGC += parseInt(input4x2d_4.value)
        }
        else if(input4x2d_4.value < input4x2d_2.value){
            t4dP += 0
            t4dJ += 1
            t4dV += 0
            t4dE += 0
            t4dD += 1
            t4dS += parseInt(input4x2d_4.value)
            t4dS -= parseInt(input4x2d_2.value)
            t4dGP += parseInt(input4x2d_4.value)
            t4dGC += parseInt(input4x2d_2.value)
            
            t2dP += 3
            t2dJ += 1
            t2dV += 1
            t2dE += 0
            t2dD += 0
            t2dS += parseInt(input4x2d_2.value)
            t2dS -= parseInt(input4x2d_4.value)
            t2dGP += parseInt(input4x2d_2.value)
            t2dGC += parseInt(input4x2d_4.value)
        }
        else if(input4x2d_4.value == input4x2d_2.value){
            t4dP += 1
            t4dJ += 1
            t4dV += 0
            t4dE += 1
            t4dD += 0
            t4dS += parseInt(input4x2d_4.value)
            t4dS -= parseInt(input4x2d_2.value)
            t4dGP += parseInt(input4x2d_4.value)
            t4dGC += parseInt(input4x2d_2.value)
            
            t2dP += 1
            t2dJ += 1
            t2dV += 0
            t2dE += 1
            t2dD += 0
            t2dS += parseInt(input4x2d_2.value)
            t2dS -= parseInt(input4x2d_4.value)
            t2dGP += parseInt(input4x2d_2.value)
            t2dGC += parseInt(input4x2d_4.value)
        }
    }
    if(input1x3d_1.value != "" && input1x3d_3.value != ""){
        if(input1x3d_1.value > input1x3d_3.value){
            t1dP += 3
            t1dJ += 1
            t1dV += 1
            t1dE += 0
            t1dD += 0
            t1dS += parseInt(input1x3d_1.value)
            t1dS -= parseInt(input1x3d_3.value)
            t1dGP += parseInt(input1x3d_1.value)
            t1dGC += parseInt(input1x3d_3.value)
            
            t3dP += 0
            t3dJ += 1
            t3dV += 0
            t3dE += 0
            t3dD += 1
            t3dS += parseInt(input1x3d_3.value)
            t3dS -= parseInt(input1x3d_1.value)
            t3dGP += parseInt(input1x3d_3.value)
            t3dGC += parseInt(input1x3d_1.value)
        }
        else if(input1x3d_1.value < input1x3d_3.value){
            t1dP += 0
            t1dJ += 1
            t1dV += 0
            t1dE += 0
            t1dD += 1
            t1dS += parseInt(input1x3d_1.value)
            t1dS -= parseInt(input1x3d_3.value)
            t1dGP += parseInt(input1x3d_1.value)
            t1dGC += parseInt(input1x3d_3.value)
            
            t3dP += 3
            t3dJ += 1
            t3dV += 1
            t3dE += 0
            t3dD += 0
            t3dS += parseInt(input1x3d_3.value)
            t3dS -= parseInt(input1x3d_1.value)
            t3dGP += parseInt(input1x3d_3.value)
            t3dGC += parseInt(input1x3d_1.value)
        }
        else if(input1x3d_1.value == input1x3d_3.value){
            t1dP += 1
            t1dJ += 1
            t1dV += 0
            t1dE += 1
            t1dD += 0
            t1dS += parseInt(input1x3d_1.value)
            t1dS -= parseInt(input1x3d_3.value)
            t1dGP += parseInt(input1x3d_1.value)
            t1dGC += parseInt(input1x3d_3.value)
            
            t3dP += 1
            t3dJ += 1
            t3dV += 0
            t3dE += 1
            t3dD += 0
            t3dS += parseInt(input1x3d_3.value)
            t3dS -= parseInt(input1x3d_1.value)
            t3dGP += parseInt(input1x3d_3.value)
            t3dGC += parseInt(input1x3d_1.value)
        }
    }
    if(input3x4d_3.value != "" && input3x4d_4.value != ""){
        if(input3x4d_3.value > input3x4d_4.value){
            t3dP += 3
            t3dJ += 1
            t3dV += 1
            t3dE += 0
            t3dD += 0
            t3dS += parseInt(input3x4d_3.value)
            t3dS -= parseInt(input3x4d_4.value)
            t3dGP += parseInt(input3x4d_3.value)
            t3dGC += parseInt(input3x4d_4.value)
            
            t4dP += 0
            t4dJ += 1
            t4dV += 0
            t4dE += 0
            t4dD += 1
            t4dS += parseInt(input3x4d_4.value)
            t4dS -= parseInt(input3x4d_3.value)
            t4dGP += parseInt(input3x4d_4.value)
            t4dGC += parseInt(input3x4d_3.value)
        }
        else if(input3x4d_3.value < input3x4d_4.value){
            t3dP += 0
            t3dJ += 1
            t3dV += 0
            t3dE += 0
            t3dD += 1
            t3dS += parseInt(input3x4d_3.value)
            t3dS -= parseInt(input3x4d_4.value)
            t3dGP += parseInt(input3x4d_3.value)
            t3dGC += parseInt(input3x4d_4.value)
            
            t4dP += 3
            t4dJ += 1
            t4dV += 1
            t4dE += 0
            t4dD += 0
            t4dS += parseInt(input3x4d_4.value)
            t4dS -= parseInt(input3x4d_3.value)
            t4dGP += parseInt(input3x4d_4.value)
            t4dGC += parseInt(input3x4d_3.value)
        }
        else if(input3x4d_3.value == input3x4d_4.value){
            t3dP += 1
            t3dJ += 1
            t3dV += 0
            t3dE += 1
            t3dD += 0
            t3dS += parseInt(input3x4d_3.value)
            t3dS -= parseInt(input3x4d_4.value)
            t3dGP += parseInt(input3x4d_3.value)
            t3dGC += parseInt(input3x4d_4.value)
            
            t4dP += 1
            t4dJ += 1
            t4dV += 0
            t4dE += 1
            t4dD += 0
            t4dS += parseInt(input3x4d_4.value)
            t4dS -= parseInt(input3x4d_3.value)
            t4dGP += parseInt(input3x4d_4.value)
            t4dGC += parseInt(input3x4d_3.value)
        }
    }
    if(input2x1d_2.value != "" && input2x1d_1.value != ""){
        if(input2x1d_2.value > input2x1d_1.value){
            t2dP += 3
            t2dJ += 1
            t2dV += 1
            t2dE += 0
            t2dD += 0
            t2dS += parseInt(input2x1d_2.value)
            t2dS -= parseInt(input2x1d_1.value)
            t2dGP += parseInt(input2x1d_2.value)
            t2dGC += parseInt(input2x1d_1.value)
            
            t1dP += 0
            t1dJ += 1
            t1dV += 0
            t1dE += 0
            t1dD += 1
            t1dS += parseInt(input2x1d_1.value)
            t1dS -= parseInt(input2x1d_2.value)
            t1dGP += parseInt(input2x1d_1.value)
            t1dGC += parseInt(input2x1d_2.value)
        }
        else if(input2x1d_2.value < input2x1d_1.value){
            t2dP += 0
            t2dJ += 1
            t2dV += 0
            t2dE += 0
            t2dD += 1
            t2dS += parseInt(input2x1d_2.value)
            t2dS -= parseInt(input2x1d_1.value)
            t2dGP += parseInt(input2x1d_2.value)
            t2dGC += parseInt(input2x1d_1.value)
            
            t1dP += 3
            t1dJ += 1
            t1dV += 1
            t1dE += 0
            t1dD += 0
            t1dS += parseInt(input2x1d_1.value)
            t1dS -= parseInt(input2x1d_2.value)
            t1dGP += parseInt(input2x1d_1.value)
            t1dGC += parseInt(input2x1d_2.value)
        }
        else if(input2x1d_2.value == input2x1d_1.value){
            t2dP += 1
            t2dJ += 1
            t2dV += 0
            t2dE += 1
            t2dD += 0
            t2dS += parseInt(input2x1d_2.value)
            t2dS -= parseInt(input2x1d_1.value)
            t2dGP += parseInt(input2x1d_2.value)
            t2dGC += parseInt(input2x1d_1.value)
            
            t1dP += 1
            t1dJ += 1
            t1dV += 0
            t1dE += 1
            t1dD += 0
            t1dS += parseInt(input2x1d_1.value)
            t1dS -= parseInt(input2x1d_2.value)
            t1dGP += parseInt(input2x1d_1.value)
            t1dGC += parseInt(input2x1d_2.value)
        }
    }

    var drrdy_time1 = [time1d[1],
                        t1dP,
                        t1dJ,
                        t1dV,
                        t1dE,
                        t1dD,
                        t1dS,
                        t1dGP,
                        t1dGC
                    ]
    var drrdy_time2 = [time2d[1],
                        t2dP,
                        t2dJ,
                        t2dV,
                        t2dE,
                        t2dD,
                        t2dS,
                        t2dGP,
                        t2dGC
                    ]
    var drrdy_time3 = [time3d[1],
                        t3dP,
                        t3dJ,
                        t3dV,
                        t3dE,
                        t3dD,
                        t3dS,
                        t3dGP,
                        t3dGC
                    ]
    var drrdy_time4 = [time4d[1],
                        t4dP,
                        t4dJ,
                        t4dV,
                        t4dE,
                        t4dD,
                        t4dS,
                        t4dGP,
                        t4dGC
                    ]
    var mdtriz = [drrdy_time1, drrdy_time2, drrdy_time3, drrdy_time4]
    var mdtrizdjustddd = ajuste(mdtriz)

    console.log(mdtrizdjustddd)

    // CRIDNDO TIME 1 D
    var time1d_nome = document.querySelector("#time1d_nome")
    time1d_nome.textContent = " " + (mdtrizdjustddd[0][0].toUpperCase())
    var time1d_img = document.querySelector("#time1d_img")
    time1d_img.src = mdtrizdjustddd[0][0] + ".png"
    var time1d_P = document.querySelector("#time1d_P")
    time1d_P.textContent = mdtrizdjustddd[0][1]
    var time1d_J = document.querySelector("#time1d_J")
    time1d_J.textContent = mdtrizdjustddd[0][2]
    var time1d_V = document.querySelector("#time1d_V")
    time1d_V.textContent = mdtrizdjustddd[0][3]
    var time1d_E = document.querySelector("#time1d_E")
    time1d_E.textContent = mdtrizdjustddd[0][4]
    var time1d_D = document.querySelector("#time1d_D")
    time1d_D.textContent = mdtrizdjustddd[0][5]
    var time1d_S = document.querySelector("#time1d_S")
    time1d_S.textContent = mdtrizdjustddd[0][6]
    var time1d_GP = document.querySelector("#time1d_GP")
    time1d_GP.textContent = mdtrizdjustddd[0][7]
    var time1d_GC = document.querySelector("#time1d_GC")
    time1d_GC.textContent = mdtrizdjustddd[0][8]

    // CRIDNDO TIME 2 D

    var time2d_nome = document.querySelector("#time2d_nome")
    time2d_nome.textContent = " " + mdtrizdjustddd[1][0].toUpperCase()
    var time2d_img = document.querySelector("#time2d_img")
    time2d_img.src = mdtrizdjustddd[1][0] + ".png"
    var time2d_P = document.querySelector("#time2d_P")
    time2d_P.textContent = mdtrizdjustddd[1][1]
    var time2d_J = document.querySelector("#time2d_J")
    time2d_J.textContent = mdtrizdjustddd[1][2]
    var time2d_V = document.querySelector("#time2d_V")
    time2d_V.textContent = mdtrizdjustddd[1][3]
    var time2d_E = document.querySelector("#time2d_E")
    time2d_E.textContent = mdtrizdjustddd[1][4]
    var time2d_D = document.querySelector("#time2d_D")
    time2d_D.textContent = mdtrizdjustddd[1][5]
    var time2d_S = document.querySelector("#time2d_S")
    time2d_S.textContent = mdtrizdjustddd[1][6]
    var time2d_GP = document.querySelector("#time2d_GP")
    time2d_GP.textContent = mdtrizdjustddd[1][7]
    var time2d_GC = document.querySelector("#time2d_GC")
    time2d_GC.textContent = mdtrizdjustddd[1][8]

    // CRIDNDO TIME 3 D

    var time3d_nome = document.querySelector("#time3d_nome")
    time3d_nome.textContent = " " + mdtrizdjustddd[2][0].toUpperCase()
    var time3d_img = document.querySelector("#time3d_img")
    time3d_img.src = mdtrizdjustddd[2][0] + ".png"
    var time3d_P = document.querySelector("#time3d_P")
    time3d_P.textContent = mdtrizdjustddd[2][1]
    var time3d_J = document.querySelector("#time3d_J")
    time3d_J.textContent = mdtrizdjustddd[2][2]
    var time3d_V = document.querySelector("#time3d_V")
    time3d_V.textContent = mdtrizdjustddd[2][3]
    var time3d_E = document.querySelector("#time3d_E")
    time3d_E.textContent = mdtrizdjustddd[2][4]
    var time3d_D = document.querySelector("#time3d_D")
    time3d_D.textContent = mdtrizdjustddd[2][5]
    var time3d_S = document.querySelector("#time3d_S")
    time3d_S.textContent = mdtrizdjustddd[2][6]
    var time3d_GP = document.querySelector("#time3d_GP")
    time3d_GP.textContent = mdtrizdjustddd[2][7]
    var time3d_GC = document.querySelector("#time3d_GC")
    time3d_GC.textContent = mdtrizdjustddd[2][8]

    // CRIDNDO TIME 4 D

    var time4d_nome = document.querySelector("#time4d_nome")
    time4d_nome.textContent = " " + mdtrizdjustddd[3][0].toUpperCase()
    var time4d_img = document.querySelector("#time4d_img")
    time4d_img.src = mdtrizdjustddd[3][0] + ".png"
    var time4d_P = document.querySelector("#time4d_P")
    time4d_P.textContent = mdtrizdjustddd[3][1]
    var time4d_J = document.querySelector("#time4d_J")
    time4d_J.textContent = mdtrizdjustddd[3][2]
    var time4d_V = document.querySelector("#time4d_V")
    time4d_V.textContent = mdtrizdjustddd[3][3]
    var time4d_E = document.querySelector("#time4d_E")
    time4d_E.textContent = mdtrizdjustddd[3][4]
    var time4d_D = document.querySelector("#time4d_D")
    time4d_D.textContent = mdtrizdjustddd[3][5]
    var time4d_S = document.querySelector("#time4d_S")
    time4d_S.textContent = mdtrizdjustddd[3][6]
    var time4d_GP = document.querySelector("#time4d_GP")
    time4d_GP.textContent = mdtrizdjustddd[3][7]
    var time4d_GC = document.querySelector("#time4d_GC")
    time4d_GC.textContent = mdtrizdjustddd[3][8]

    var t1eP = 0
    var t1eJ = 0
    var t1eV = 0
    var t1eE = 0
    var t1eD = 0
    var t1eS = 0
    var t1eGP = 0
    var t1eGC = 0
    
    var t2eP = 0
    var t2eJ = 0
    var t2eV = 0
    var t2eE = 0
    var t2eD = 0
    var t2eS = 0
    var t2eGP = 0
    var t2eGC = 0

    var t3eP = 0
    var t3eJ = 0
    var t3eV = 0
    var t3eE = 0
    var t3eD = 0
    var t3eS = 0
    var t3eGP = 0
    var t3eGC = 0

    var t4eP = 0
    var t4eJ = 0
    var t4eV = 0
    var t4eE = 0
    var t4eD = 0
    var t4eS = 0
    var t4eGP = 0
    var t4eGC = 0

    if(input1x2e_1.value != "" && input1x2e_2.value != ""){
        if(input1x2e_1.value > input1x2e_2.value){
            t1eP += 3
            t1eJ += 1
            t1eV += 1
            t1eE += 0
            t1eD += 0
            t1eS += parseInt(input1x2e_1.value)
            t1eS -= parseInt(input1x2e_2.value)
            t1eGP += parseInt(input1x2e_1.value)
            t1eGC += parseInt(input1x2e_2.value)
            
            t2eP += 0
            t2eJ += 1
            t2eV += 0
            t2eE += 0
            t2eD += 1
            t2eS += parseInt(input1x2e_2.value)
            t2eS -= parseInt(input1x2e_1.value)
            t2eGP += parseInt(input1x2e_2.value)
            t2eGC += parseInt(input1x2e_1.value)
        }
        else if(input1x2e_1.value < input1x2e_2.value){
            t1eP += 0
            t1eJ += 1
            t1eV += 0
            t1eE += 0
            t1eD += 1
            t1eS += parseInt(input1x2e_1.value)
            t1eS -= parseInt(input1x2e_2.value)
            t1eGP += parseInt(input1x2e_1.value)
            t1eGC += parseInt(input1x2e_2.value)
            
            t2eP += 3
            t2eJ += 1
            t2eV += 1
            t2eE += 0
            t2eD += 0
            t2eS += parseInt(input1x2e_2.value)
            t2eS -= parseInt(input1x2e_1.value)
            t2eGP += parseInt(input1x2e_2.value)
            t2eGC += parseInt(input1x2e_1.value)
        }
        else if(input1x2e_1.value == input1x2e_2.value){
            t1eP += 1
            t1eJ += 1
            t1eV += 0
            t1eE += 1
            t1eD += 0
            t1eS += parseInt(input1x2e_1.value)
            t1eS -= parseInt(input1x2e_2.value)
            t1eGP += parseInt(input1x2e_1.value)
            t1eGC += parseInt(input1x2e_2.value)
            
            t2eP += 1
            t2eJ += 1
            t2eV += 0
            t2eE += 1
            t2eD += 0
            t2eS += parseInt(input1x2e_2.value)
            t2eS -= parseInt(input1x2e_1.value)
            t2eGP += parseInt(input1x2e_2.value)
            t2eGC += parseInt(input1x2e_1.value)
        }
    }
    if(input4x3e_4.value != "" && input4x3e_3.value != ""){
        if(input4x3e_4.value > input4x3e_3.value){
            t4eP += 3
            t4eJ += 1
            t4eV += 1
            t4eE += 0
            t4eD += 0
            t4eS += parseInt(input4x3e_4.value)
            t4eS -= parseInt(input4x3e_3.value)
            t4eGP += parseInt(input4x3e_4.value)
            t4eGC += parseInt(input4x3e_3.value)
            
            t3eP += 0
            t3eJ += 1
            t3eV += 0
            t3eE += 0
            t3eD += 1
            t3eS += parseInt(input4x3e_3.value)
            t3eS -= parseInt(input4x3e_4.value)
            t3eGP += parseInt(input4x3e_3.value)
            t3eGC += parseInt(input4x3e_4.value)
        }
        else if(input4x3e_4.value < input4x3e_3.value){
            t4eP += 0
            t4eJ += 1
            t4eV += 0
            t4eE += 0
            t4eD += 1
            t4eS += parseInt(input4x3e_4.value)
            t4eS -= parseInt(input4x3e_3.value)
            t4eGP += parseInt(input4x3e_4.value)
            t4eGC += parseInt(input4x3e_3.value)
            
            t3eP += 3
            t3eJ += 1
            t3eV += 1
            t3eE += 0
            t3eD += 0
            t3eS += parseInt(input4x3e_3.value)
            t3eS -= parseInt(input4x3e_4.value)
            t3eGP += parseInt(input4x3e_3.value)
            t3eGC += parseInt(input4x3e_4.value)
        }
        else if(input4x3e_4.value == input4x3e_3.value){
            t4eP += 1
            t4eJ += 1
            t4eV += 0
            t4eE += 1
            t4eD += 0
            t4eS += parseInt(input4x3e_4.value)
            t4eS -= parseInt(input4x3e_3.value)
            t4eGP += parseInt(input4x3e_4.value)
            t4eGC += parseInt(input4x3e_3.value)
            
            t3eP += 1
            t3eJ += 1
            t3eV += 0
            t3eE += 1
            t3eD += 0
            t3eS += parseInt(input4x3e_3.value)
            t3eS -= parseInt(input4x3e_4.value)
            t3eGP += parseInt(input4x3e_3.value)
            t3eGC += parseInt(input4x3e_4.value)
        }
    }
    if(input3x1e_3.value != "" && input3x1e_1.value != ""){
        if(input3x1e_3.value > input3x1e_1.value){
            t3eP += 3
            t3eJ += 1
            t3eV += 1
            t3eE += 0
            t3eD += 0
            t3eS += parseInt(input3x1e_3.value)
            t3eS -= parseInt(input3x1e_1.value)
            t3eGP += parseInt(input3x1e_3.value)
            t3eGC += parseInt(input3x1e_1.value)
            
            t1eP += 0
            t1eJ += 1
            t1eV += 0
            t1eE += 0
            t1eD += 1
            t1eS += parseInt(input3x1e_1.value)
            t1eS -= parseInt(input3x1e_3.value)
            t1eGP += parseInt(input3x1e_1.value)
            t1eGC += parseInt(input3x1e_3.value)
        }
        else if(input3x1e_3.value < input3x1e_1.value){
            t3eP += 0
            t3eJ += 1
            t3eV += 0
            t3eE += 0
            t3eD += 1
            t3eS += parseInt(input3x1e_3.value)
            t3eS -= parseInt(input3x1e_1.value)
            t3eGP += parseInt(input3x1e_3.value)
            t3eGC += parseInt(input3x1e_1.value)
            
            t1eP += 3
            t1eJ += 1
            t1eV += 1
            t1eE += 0
            t1eD += 0
            t1eS += parseInt(input3x1e_1.value)
            t1eS -= parseInt(input3x1e_3.value)
            t1eGP += parseInt(input3x1e_1.value)
            t1eGC += parseInt(input3x1e_3.value)
        }
        else if(input3x1e_3.value == input3x1e_1.value){
            t3eP += 1
            t3eJ += 1
            t3eV += 0
            t3eE += 1
            t3eD += 0
            t3eS += parseInt(input3x1e_3.value)
            t3eS -= parseInt(input3x1e_1.value)
            t3eGP += parseInt(input3x1e_3.value)
            t3eGC += parseInt(input3x1e_1.value)
            
            t1eP += 1
            t1eJ += 1
            t1eV += 0
            t1eE += 1
            t1eD += 0
            t1eS += parseInt(input3x1e_1.value)
            t1eS -= parseInt(input3x1e_3.value)
            t1eGP += parseInt(input3x1e_1.value)
            t1eGC += parseInt(input3x1e_3.value)
        }
    }
    if(input2x4e_2.value != "" && input2x4e_4.value != ""){
        if(input2x4e_2.value > input2x4e_4.value){
            t2eP += 3
            t2eJ += 1
            t2eV += 1
            t2eE += 0
            t2eD += 0
            t2eS += parseInt(input2x4e_2.value)
            t2eS -= parseInt(input2x4e_4.value)
            t2eGP += parseInt(input2x4e_2.value)
            t2eGC += parseInt(input2x4e_4.value)
            
            t4eP += 0
            t4eJ += 1
            t4eV += 0
            t4eE += 0
            t4eD += 1
            t4eS += parseInt(input2x4e_4.value)
            t4eS -= parseInt(input2x4e_2.value)
            t4eGP += parseInt(input2x4e_4.value)
            t4eGC += parseInt(input2x4e_2.value)
        }
        else if(input2x4e_2.value < input2x4e_4.value){
            t2eP += 0
            t2eJ += 1
            t2eV += 0
            t2eE += 0
            t2eD += 1
            t2eS += parseInt(input2x4e_2.value)
            t2eS -= parseInt(input2x4e_4.value)
            t2eGP += parseInt(input2x4e_2.value)
            t2eGC += parseInt(input2x4e_4.value)
            
            t4eP += 3
            t4eJ += 1
            t4eV += 1
            t4eE += 0
            t4eD += 0
            t4eS += parseInt(input2x4e_4.value)
            t4eS -= parseInt(input2x4e_2.value)
            t4eGP += parseInt(input2x4e_4.value)
            t4eGC += parseInt(input2x4e_2.value)
        }
        else if(input2x4e_2.value == input2x4e_4.value){
            t2eP += 1
            t2eJ += 1
            t2eV += 0
            t2eE += 1
            t2eD += 0
            t2eS += parseInt(input2x4e_2.value)
            t2eS -= parseInt(input2x4e_4.value)
            t2eGP += parseInt(input2x4e_2.value)
            t2eGC += parseInt(input2x4e_4.value)
            
            t4eP += 1
            t4eJ += 1
            t4eV += 0
            t4eE += 1
            t4eD += 0
            t4eS += parseInt(input2x4e_4.value)
            t4eS -= parseInt(input2x4e_2.value)
            t4eGP += parseInt(input2x4e_4.value)
            t4eGC += parseInt(input2x4e_2.value)
        }
    }
    if(input1x4e_1.value != "" && input1x4e_4.value != ""){
        if(input1x4e_1.value > input1x4e_4.value){
            t1eP += 3
            t1eJ += 1
            t1eV += 1
            t1eE += 0
            t1eD += 0
            t1eS += parseInt(input1x4e_1.value)
            t1eS -= parseInt(input1x4e_4.value)
            t1eGP += parseInt(input1x4e_1.value)
            t1eGC += parseInt(input1x4e_4.value)
            
            t4eP += 0
            t4eJ += 1
            t4eV += 0
            t4eE += 0
            t4eD += 1
            t4eS += parseInt(input1x4e_4.value)
            t4eS -= parseInt(input1x4e_1.value)
            t4eGP += parseInt(input1x4e_4.value)
            t4eGC += parseInt(input1x4e_1.value)
        }
        else if(input1x4e_1.value < input1x4e_4.value){
            t1eP += 0
            t1eJ += 1
            t1eV += 0
            t1eE += 0
            t1eD += 1
            t1eS += parseInt(input1x4e_1.value)
            t1eS -= parseInt(input1x4e_4.value)
            t1eGP += parseInt(input1x4e_1.value)
            t1eGC += parseInt(input1x4e_4.value)
            
            t4eP += 3
            t4eJ += 1
            t4eV += 1
            t4eE += 0
            t4eD += 0
            t4eS += parseInt(input1x4e_4.value)
            t4eS -= parseInt(input1x4e_1.value)
            t4eGP += parseInt(input1x4e_4.value)
            t4eGC += parseInt(input1x4e_1.value)
        }
        else if(input1x4e_1.value == input1x4e_4.value){
            t1eP += 1
            t1eJ += 1
            t1eV += 0
            t1eE += 1
            t1eD += 0
            t1eS += parseInt(input1x4e_1.value)
            t1eS -= parseInt(input1x4e_4.value)
            t1eGP += parseInt(input1x4e_1.value)
            t1eGC += parseInt(input1x4e_4.value)
            
            t4eP += 1
            t4eJ += 1
            t4eV += 0
            t4eE += 1
            t4eD += 0
            t4eS += parseInt(input1x4e_4.value)
            t4eS -= parseInt(input1x4e_1.value)
            t4eGP += parseInt(input1x4e_4.value)
            t4eGC += parseInt(input1x4e_1.value)
        }
    }
    if(input2x3e_2.value != "" && input2x3e_3.value != ""){
        if(input2x3e_2.value > input2x3e_3.value){
            t2eP += 3
            t2eJ += 1
            t2eV += 1
            t2eE += 0
            t2eD += 0
            t2eS += parseInt(input2x3e_2.value)
            t2eS -= parseInt(input2x3e_3.value)
            t2eGP += parseInt(input2x3e_2.value)
            t2eGC += parseInt(input2x3e_3.value)
            
            t3eP += 0
            t3eJ += 1
            t3eV += 0
            t3eE += 0
            t3eD += 1
            t3eS += parseInt(input2x3e_3.value)
            t3eS -= parseInt(input2x3e_2.value)
            t3eGP += parseInt(input2x3e_3.value)
            t3eGC += parseInt(input2x3e_2.value)
        }
        else if(input2x3e_2.value < input2x3e_3.value){
            t2eP += 0
            t2eJ += 1
            t2eV += 0
            t2eE += 0
            t2eD += 1
            t2eS += parseInt(input2x3e_2.value)
            t2eS -= parseInt(input2x3e_3.value)
            t2eGP += parseInt(input2x3e_2.value)
            t2eGC += parseInt(input2x3e_3.value)
            
            t3eP += 3
            t3eJ += 1
            t3eV += 1
            t3eE += 0
            t3eD += 0
            t3eS += parseInt(input2x3e_3.value)
            t3eS -= parseInt(input2x3e_2.value)
            t3eGP += parseInt(input2x3e_3.value)
            t3eGC += parseInt(input2x3e_2.value)
        }
        else if(input2x3e_2.value == input2x3e_3.value){
            t2eP += 1
            t2eJ += 1
            t2eV += 0
            t2eE += 1
            t2eD += 0
            t2eS += parseInt(input2x3e_2.value)
            t2eS -= parseInt(input2x3e_3.value)
            t2eGP += parseInt(input2x3e_2.value)
            t2eGC += parseInt(input2x3e_3.value)
            
            t3eP += 1
            t3eJ += 1
            t3eV += 0
            t3eE += 1
            t3eD += 0
            t3eS += parseInt(input2x3e_3.value)
            t3eS -= parseInt(input2x3e_2.value)
            t3eGP += parseInt(input2x3e_3.value)
            t3eGC += parseInt(input2x3e_2.value)
        }
    }
    if(input3x2e_3.value != "" && input3x2e_2.value != ""){
        if(input3x2e_3.value > input3x2e_2.value){
            t3eP += 3
            t3eJ += 1
            t3eV += 1
            t3eE += 0
            t3eD += 0
            t3eS += parseInt(input3x2e_3.value)
            t3eS -= parseInt(input3x2e_2.value)
            t3eGP += parseInt(input3x2e_3.value)
            t3eGC += parseInt(input3x2e_2.value)
            
            t2eP += 0
            t2eJ += 1
            t2eV += 0
            t2eE += 0
            t2eD += 1
            t2eS += parseInt(input3x2e_2.value)
            t2eS -= parseInt(input3x2e_3.value)
            t2eGP += parseInt(input3x2e_2.value)
            t2eGC += parseInt(input3x2e_3.value)
        }
        else if(input3x2e_3.value < input3x2e_2.value){
            t3eP += 0
            t3eJ += 1
            t3eV += 0
            t3eE += 0
            t3eD += 1
            t3eS += parseInt(input3x2e_3.value)
            t3eS -= parseInt(input3x2e_2.value)
            t3eGP += parseInt(input3x2e_3.value)
            t3eGC += parseInt(input3x2e_2.value)
        
            t2eP += 3
            t2eJ += 1
            t2eV += 1
            t2eE += 0
            t2eD += 0
            t2eS += parseInt(input3x2e_2.value)
            t2eS -= parseInt(input3x2e_3.value)
            t2eGP += parseInt(input3x2e_2.value)
            t2eGC += parseInt(input3x2e_3.value)
        }
        else if(input3x2e_3.value == input3x2e_2.value){
            t3eP += 1
            t3eJ += 1
            t3eV += 0
            t3eE += 1
            t3eD += 0
            t3eS += parseInt(input3x2e_3.value)
            t3eS -= parseInt(input3x2e_2.value)
            t3eGP += parseInt(input3x2e_3.value)
            t3eGC += parseInt(input3x2e_2.value)
            
            t2eP += 1
            t2eJ += 1
            t2eV += 0
            t2eE += 1
            t2eD += 0
            t2eS += parseInt(input3x2e_2.value)
            t2eS -= parseInt(input3x2e_3.value)
            t2eGP += parseInt(input3x2e_2.value)
            t2eGC += parseInt(input3x2e_3.value)
        }
    }
    if(input4x1e_4.value != "" && input4x1e_1.value != ""){
        if(input4x1e_4.value > input4x1e_1.value){
            t4eP += 3
            t4eJ += 1
            t4eV += 1
            t4eE += 0
            t4eD += 0
            t4eS += parseInt(input4x1e_4.value)
            t4eS -= parseInt(input4x1e_1.value)
            t4eGP += parseInt(input4x1e_4.value)
            t4eGC += parseInt(input4x1e_1.value)
            
            t1eP += 0
            t1eJ += 1
            t1eV += 0
            t1eE += 0
            t1eD += 1
            t1eS += parseInt(input4x1e_1.value)
            t1eS -= parseInt(input4x1e_4.value)
            t1eGP += parseInt(input4x1e_1.value)
            t1eGC += parseInt(input4x1e_4.value)
        }
        else if(input4x1e_4.value < input4x1e_1.value){
            t4eP += 0
            t4eJ += 1
            t4eV += 0
            t4eE += 0
            t4eD += 1
            t4eS += parseInt(input4x1e_4.value)
            t4eS -= parseInt(input4x1e_1.value)
            t4eGP += parseInt(input4x1e_4.value)
            t4eGC += parseInt(input4x1e_1.value)
            
            t1eP += 3
            t1eJ += 1
            t1eV += 1
            t1eE += 0
            t1eD += 0
            t1eS += parseInt(input4x1e_1.value)
            t1eS -= parseInt(input4x1e_4.value)
            t1eGP += parseInt(input4x1e_1.value)
            t1eGC += parseInt(input4x1e_4.value)
        }
        else if(input4x1e_4.value == input4x1e_1.value){
            t4eP += 1
            t4eJ += 1
            t4eV += 0
            t4eE += 1
            t4eD += 0
            t4eS += parseInt(input4x1e_4.value)
            t4eS -= parseInt(input4x1e_1.value)
            t4eGP += parseInt(input4x1e_4.value)
            t4eGC += parseInt(input4x1e_1.value)
            
            t1eP += 1
            t1eJ += 1
            t1eV += 0
            t1eE += 1
            t1eD += 0
            t1eS += parseInt(input4x1e_1.value)
            t1eS -= parseInt(input4x1e_4.value)
            t1eGP += parseInt(input4x1e_1.value)
            t1eGC += parseInt(input4x1e_4.value)
        }
    }
    if(input4x2e_4.value != "" && input4x2e_2.value != ""){
        if(input4x2e_4.value > input4x2e_2.value){
            t4eP += 3
            t4eJ += 1
            t4eV += 1
            t4eE += 0
            t4eD += 0
            t4eS += parseInt(input4x2e_4.value)
            t4eS -= parseInt(input4x2e_2.value)
            t4eGP += parseInt(input4x2e_4.value)
            t4eGC += parseInt(input4x2e_2.value)
            
            t2eP += 0
            t2eJ += 1
            t2eV += 0
            t2eE += 0
            t2eD += 1
            t2eS += parseInt(input4x2e_2.value)
            t2eS -= parseInt(input4x2e_4.value)
            t2eGP += parseInt(input4x2e_2.value)
            t2eGC += parseInt(input4x2e_4.value)
        }
        else if(input4x2e_4.value < input4x2e_2.value){
            t4eP += 0
            t4eJ += 1
            t4eV += 0
            t4eE += 0
            t4eD += 1
            t4eS += parseInt(input4x2e_4.value)
            t4eS -= parseInt(input4x2e_2.value)
            t4eGP += parseInt(input4x2e_4.value)
            t4eGC += parseInt(input4x2e_2.value)
            
            t2eP += 3
            t2eJ += 1
            t2eV += 1
            t2eE += 0
            t2eD += 0
            t2eS += parseInt(input4x2e_2.value)
            t2eS -= parseInt(input4x2e_4.value)
            t2eGP += parseInt(input4x2e_2.value)
            t2eGC += parseInt(input4x2e_4.value)
        }
        else if(input4x2e_4.value == input4x2e_2.value){
            t4eP += 1
            t4eJ += 1
            t4eV += 0
            t4eE += 1
            t4eD += 0
            t4eS += parseInt(input4x2e_4.value)
            t4eS -= parseInt(input4x2e_2.value)
            t4eGP += parseInt(input4x2e_4.value)
            t4eGC += parseInt(input4x2e_2.value)
            
            t2eP += 1
            t2eJ += 1
            t2eV += 0
            t2eE += 1
            t2eD += 0
            t2eS += parseInt(input4x2e_2.value)
            t2eS -= parseInt(input4x2e_4.value)
            t2eGP += parseInt(input4x2e_2.value)
            t2eGC += parseInt(input4x2e_4.value)
        }
    }
    if(input1x3e_1.value != "" && input1x3e_3.value != ""){
        if(input1x3e_1.value > input1x3e_3.value){
            t1eP += 3
            t1eJ += 1
            t1eV += 1
            t1eE += 0
            t1eD += 0
            t1eS += parseInt(input1x3e_1.value)
            t1eS -= parseInt(input1x3e_3.value)
            t1eGP += parseInt(input1x3e_1.value)
            t1eGC += parseInt(input1x3e_3.value)
            
            t3eP += 0
            t3eJ += 1
            t3eV += 0
            t3eE += 0
            t3eD += 1
            t3eS += parseInt(input1x3e_3.value)
            t3eS -= parseInt(input1x3e_1.value)
            t3eGP += parseInt(input1x3e_3.value)
            t3eGC += parseInt(input1x3e_1.value)
        }
        else if(input1x3e_1.value < input1x3e_3.value){
            t1eP += 0
            t1eJ += 1
            t1eV += 0
            t1eE += 0
            t1eD += 1
            t1eS += parseInt(input1x3e_1.value)
            t1eS -= parseInt(input1x3e_3.value)
            t1eGP += parseInt(input1x3e_1.value)
            t1eGC += parseInt(input1x3e_3.value)
            
            t3eP += 3
            t3eJ += 1
            t3eV += 1
            t3eE += 0
            t3eD += 0
            t3eS += parseInt(input1x3e_3.value)
            t3eS -= parseInt(input1x3e_1.value)
            t3eGP += parseInt(input1x3e_3.value)
            t3eGC += parseInt(input1x3e_1.value)
        }
        else if(input1x3e_1.value == input1x3e_3.value){
            t1eP += 1
            t1eJ += 1
            t1eV += 0
            t1eE += 1
            t1eD += 0
            t1eS += parseInt(input1x3e_1.value)
            t1eS -= parseInt(input1x3e_3.value)
            t1eGP += parseInt(input1x3e_1.value)
            t1eGC += parseInt(input1x3e_3.value)
            
            t3eP += 1
            t3eJ += 1
            t3eV += 0
            t3eE += 1
            t3eD += 0
            t3eS += parseInt(input1x3e_3.value)
            t3eS -= parseInt(input1x3e_1.value)
            t3eGP += parseInt(input1x3e_3.value)
            t3eGC += parseInt(input1x3e_1.value)
        }
    }
    if(input3x4e_3.value != "" && input3x4e_4.value != ""){
        if(input3x4e_3.value > input3x4e_4.value){
            t3eP += 3
            t3eJ += 1
            t3eV += 1
            t3eE += 0
            t3eD += 0
            t3eS += parseInt(input3x4e_3.value)
            t3eS -= parseInt(input3x4e_4.value)
            t3eGP += parseInt(input3x4e_3.value)
            t3eGC += parseInt(input3x4e_4.value)
            
            t4eP += 0
            t4eJ += 1
            t4eV += 0
            t4eE += 0
            t4eD += 1
            t4eS += parseInt(input3x4e_4.value)
            t4eS -= parseInt(input3x4e_3.value)
            t4eGP += parseInt(input3x4e_4.value)
            t4eGC += parseInt(input3x4e_3.value)
        }
        else if(input3x4e_3.value < input3x4e_4.value){
            t3eP += 0
            t3eJ += 1
            t3eV += 0
            t3eE += 0
            t3eD += 1
            t3eS += parseInt(input3x4e_3.value)
            t3eS -= parseInt(input3x4e_4.value)
            t3eGP += parseInt(input3x4e_3.value)
            t3eGC += parseInt(input3x4e_4.value)
            
            t4eP += 3
            t4eJ += 1
            t4eV += 1
            t4eE += 0
            t4eD += 0
            t4eS += parseInt(input3x4e_4.value)
            t4eS -= parseInt(input3x4e_3.value)
            t4eGP += parseInt(input3x4e_4.value)
            t4eGC += parseInt(input3x4e_3.value)
        }
        else if(input3x4e_3.value == input3x4e_4.value){
            t3eP += 1
            t3eJ += 1
            t3eV += 0
            t3eE += 1
            t3eD += 0
            t3eS += parseInt(input3x4e_3.value)
            t3eS -= parseInt(input3x4e_4.value)
            t3eGP += parseInt(input3x4e_3.value)
            t3eGC += parseInt(input3x4e_4.value)
            
            t4eP += 1
            t4eJ += 1
            t4eV += 0
            t4eE += 1
            t4eD += 0
            t4eS += parseInt(input3x4e_4.value)
            t4eS -= parseInt(input3x4e_3.value)
            t4eGP += parseInt(input3x4e_4.value)
            t4eGC += parseInt(input3x4e_3.value)
        }
    }
    if(input2x1e_2.value != "" && input2x1e_1.value != ""){
        if(input2x1e_2.value > input2x1e_1.value){
            t2eP += 3
            t2eJ += 1
            t2eV += 1
            t2eE += 0
            t2eD += 0
            t2eS += parseInt(input2x1e_2.value)
            t2eS -= parseInt(input2x1e_1.value)
            t2eGP += parseInt(input2x1e_2.value)
            t2eGC += parseInt(input2x1e_1.value)
            
            t1eP += 0
            t1eJ += 1
            t1eV += 0
            t1eE += 0
            t1eD += 1
            t1eS += parseInt(input2x1e_1.value)
            t1eS -= parseInt(input2x1e_2.value)
            t1eGP += parseInt(input2x1e_1.value)
            t1eGC += parseInt(input2x1e_2.value)
        }
        else if(input2x1e_2.value < input2x1e_1.value){
            t2eP += 0
            t2eJ += 1
            t2eV += 0
            t2eE += 0
            t2eD += 1
            t2eS += parseInt(input2x1e_2.value)
            t2eS -= parseInt(input2x1e_1.value)
            t2eGP += parseInt(input2x1e_2.value)
            t2eGC += parseInt(input2x1e_1.value)
            
            t1eP += 3
            t1eJ += 1
            t1eV += 1
            t1eE += 0
            t1eD += 0
            t1eS += parseInt(input2x1e_1.value)
            t1eS -= parseInt(input2x1e_2.value)
            t1eGP += parseInt(input2x1e_1.value)
            t1eGC += parseInt(input2x1e_2.value)
        }
        else if(input2x1e_2.value == input2x1e_1.value){
            t2eP += 1
            t2eJ += 1
            t2eV += 0
            t2eE += 1
            t2eD += 0
            t2eS += parseInt(input2x1e_2.value)
            t2eS -= parseInt(input2x1e_1.value)
            t2eGP += parseInt(input2x1e_2.value)
            t2eGC += parseInt(input2x1e_1.value)
            
            t1eP += 1
            t1eJ += 1
            t1eV += 0
            t1eE += 1
            t1eD += 0
            t1eS += parseInt(input2x1e_1.value)
            t1eS -= parseInt(input2x1e_2.value)
            t1eGP += parseInt(input2x1e_1.value)
            t1eGC += parseInt(input2x1e_2.value)
        }
    }

    var errey_time1 = [time1e[1],
                        t1eP,
                        t1eJ,
                        t1eV,
                        t1eE,
                        t1eD,
                        t1eS,
                        t1eGP,
                        t1eGC
                    ]
    var errey_time2 = [time2e[1],
                        t2eP,
                        t2eJ,
                        t2eV,
                        t2eE,
                        t2eD,
                        t2eS,
                        t2eGP,
                        t2eGC
                    ]
    var errey_time3 = [time3e[1],
                        t3eP,
                        t3eJ,
                        t3eV,
                        t3eE,
                        t3eD,
                        t3eS,
                        t3eGP,
                        t3eGC
                    ]
    var errey_time4 = [time4e[1],
                        t4eP,
                        t4eJ,
                        t4eV,
                        t4eE,
                        t4eD,
                        t4eS,
                        t4eGP,
                        t4eGC
                    ]
    var metriz = [errey_time1, errey_time2, errey_time3, errey_time4]
    var metrizajustede = ajuste(metriz)

    console.log(metrizajustede)

    // CRIENDO TIME 1 E
    var time1e_nome = document.querySelector("#time1e_nome")
    time1e_nome.textContent = " " + (metrizajustede[0][0].toUpperCase())
    var time1e_img = document.querySelector("#time1e_img")
    time1e_img.src = metrizajustede[0][0] + ".png"
    var time1e_P = document.querySelector("#time1e_P")
    time1e_P.textContent = metrizajustede[0][1]
    var time1e_J = document.querySelector("#time1e_J")
    time1e_J.textContent = metrizajustede[0][2]
    var time1e_V = document.querySelector("#time1e_V")
    time1e_V.textContent = metrizajustede[0][3]
    var time1e_E = document.querySelector("#time1e_E")
    time1e_E.textContent = metrizajustede[0][4]
    var time1e_D = document.querySelector("#time1e_D")
    time1e_D.textContent = metrizajustede[0][5]
    var time1e_S = document.querySelector("#time1e_S")
    time1e_S.textContent = metrizajustede[0][6]
    var time1e_GP = document.querySelector("#time1e_GP")
    time1e_GP.textContent = metrizajustede[0][7]
    var time1e_GC = document.querySelector("#time1e_GC")
    time1e_GC.textContent = metrizajustede[0][8]

    // CRIENDO TIME 2 E

    var time2e_nome = document.querySelector("#time2e_nome")
    time2e_nome.textContent = " " + metrizajustede[1][0].toUpperCase()
    var time2e_img = document.querySelector("#time2e_img")
    time2e_img.src = metrizajustede[1][0] + ".png"
    var time2e_P = document.querySelector("#time2e_P")
    time2e_P.textContent = metrizajustede[1][1]
    var time2e_J = document.querySelector("#time2e_J")
    time2e_J.textContent = metrizajustede[1][2]
    var time2e_V = document.querySelector("#time2e_V")
    time2e_V.textContent = metrizajustede[1][3]
    var time2e_E = document.querySelector("#time2e_E")
    time2e_E.textContent = metrizajustede[1][4]
    var time2e_D = document.querySelector("#time2e_D")
    time2e_D.textContent = metrizajustede[1][5]
    var time2e_S = document.querySelector("#time2e_S")
    time2e_S.textContent = metrizajustede[1][6]
    var time2e_GP = document.querySelector("#time2e_GP")
    time2e_GP.textContent = metrizajustede[1][7]
    var time2e_GC = document.querySelector("#time2e_GC")
    time2e_GC.textContent = metrizajustede[1][8]

    // CRIENDO TIME 3 E

    var time3e_nome = document.querySelector("#time3e_nome")
    time3e_nome.textContent = " " + metrizajustede[2][0].toUpperCase()
    var time3e_img = document.querySelector("#time3e_img")
    time3e_img.src = metrizajustede[2][0] + ".png"
    var time3e_P = document.querySelector("#time3e_P")
    time3e_P.textContent = metrizajustede[2][1]
    var time3e_J = document.querySelector("#time3e_J")
    time3e_J.textContent = metrizajustede[2][2]
    var time3e_V = document.querySelector("#time3e_V")
    time3e_V.textContent = metrizajustede[2][3]
    var time3e_E = document.querySelector("#time3e_E")
    time3e_E.textContent = metrizajustede[2][4]
    var time3e_D = document.querySelector("#time3e_D")
    time3e_D.textContent = metrizajustede[2][5]
    var time3e_S = document.querySelector("#time3e_S")
    time3e_S.textContent = metrizajustede[2][6]
    var time3e_GP = document.querySelector("#time3e_GP")
    time3e_GP.textContent = metrizajustede[2][7]
    var time3e_GC = document.querySelector("#time3e_GC")
    time3e_GC.textContent = metrizajustede[2][8]

    // CRIENDO TIME 4 E

    var time4e_nome = document.querySelector("#time4e_nome")
    time4e_nome.textContent = " " + metrizajustede[3][0].toUpperCase()
    var time4e_img = document.querySelector("#time4e_img")
    time4e_img.src = metrizajustede[3][0] + ".png"
    var time4e_P = document.querySelector("#time4e_P")
    time4e_P.textContent = metrizajustede[3][1]
    var time4e_J = document.querySelector("#time4e_J")
    time4e_J.textContent = metrizajustede[3][2]
    var time4e_V = document.querySelector("#time4e_V")
    time4e_V.textContent = metrizajustede[3][3]
    var time4e_E = document.querySelector("#time4e_E")
    time4e_E.textContent = metrizajustede[3][4]
    var time4e_D = document.querySelector("#time4e_D")
    time4e_D.textContent = metrizajustede[3][5]
    var time4e_S = document.querySelector("#time4e_S")
    time4e_S.textContent = metrizajustede[3][6]
    var time4e_GP = document.querySelector("#time4e_GP")
    time4e_GP.textContent = metrizajustede[3][7]
    var time4e_GC = document.querySelector("#time4e_GC")
    time4e_GC.textContent = metrizajustede[3][8]

    var t1fP = 0
    var t1fJ = 0
    var t1fV = 0
    var t1fE = 0
    var t1fD = 0
    var t1fS = 0
    var t1fGP = 0
    var t1fGC = 0
    
    var t2fP = 0
    var t2fJ = 0
    var t2fV = 0
    var t2fE = 0
    var t2fD = 0
    var t2fS = 0
    var t2fGP = 0
    var t2fGC = 0

    var t3fP = 0
    var t3fJ = 0
    var t3fV = 0
    var t3fE = 0
    var t3fD = 0
    var t3fS = 0
    var t3fGP = 0
    var t3fGC = 0

    var t4fP = 0
    var t4fJ = 0
    var t4fV = 0
    var t4fE = 0
    var t4fD = 0
    var t4fS = 0
    var t4fGP = 0
    var t4fGC = 0

    if(input1x2f_1.value != "" && input1x2f_2.value != ""){
        if(input1x2f_1.value > input1x2f_2.value){
            t1fP += 3
            t1fJ += 1
            t1fV += 1
            t1fE += 0
            t1fD += 0
            t1fS += parseInt(input1x2f_1.value)
            t1fS -= parseInt(input1x2f_2.value)
            t1fGP += parseInt(input1x2f_1.value)
            t1fGC += parseInt(input1x2f_2.value)
            
            t2fP += 0
            t2fJ += 1
            t2fV += 0
            t2fE += 0
            t2fD += 1
            t2fS += parseInt(input1x2f_2.value)
            t2fS -= parseInt(input1x2f_1.value)
            t2fGP += parseInt(input1x2f_2.value)
            t2fGC += parseInt(input1x2f_1.value)
        }
        else if(input1x2f_1.value < input1x2f_2.value){
            t1fP += 0
            t1fJ += 1
            t1fV += 0
            t1fE += 0
            t1fD += 1
            t1fS += parseInt(input1x2f_1.value)
            t1fS -= parseInt(input1x2f_2.value)
            t1fGP += parseInt(input1x2f_1.value)
            t1fGC += parseInt(input1x2f_2.value)
            
            t2fP += 3
            t2fJ += 1
            t2fV += 1
            t2fE += 0
            t2fD += 0
            t2fS += parseInt(input1x2f_2.value)
            t2fS -= parseInt(input1x2f_1.value)
            t2fGP += parseInt(input1x2f_2.value)
            t2fGC += parseInt(input1x2f_1.value)
        }
        else if(input1x2f_1.value == input1x2f_2.value){
            t1fP += 1
            t1fJ += 1
            t1fV += 0
            t1fE += 1
            t1fD += 0
            t1fS += parseInt(input1x2f_1.value)
            t1fS -= parseInt(input1x2f_2.value)
            t1fGP += parseInt(input1x2f_1.value)
            t1fGC += parseInt(input1x2f_2.value)
            
            t2fP += 1
            t2fJ += 1
            t2fV += 0
            t2fE += 1
            t2fD += 0
            t2fS += parseInt(input1x2f_2.value)
            t2fS -= parseInt(input1x2f_1.value)
            t2fGP += parseInt(input1x2f_2.value)
            t2fGC += parseInt(input1x2f_1.value)
        }
    }
    if(input4x3f_4.value != "" && input4x3f_3.value != ""){
        if(input4x3f_4.value > input4x3f_3.value){
            t4fP += 3
            t4fJ += 1
            t4fV += 1
            t4fE += 0
            t4fD += 0
            t4fS += parseInt(input4x3f_4.value)
            t4fS -= parseInt(input4x3f_3.value)
            t4fGP += parseInt(input4x3f_4.value)
            t4fGC += parseInt(input4x3f_3.value)
            
            t3fP += 0
            t3fJ += 1
            t3fV += 0
            t3fE += 0
            t3fD += 1
            t3fS += parseInt(input4x3f_3.value)
            t3fS -= parseInt(input4x3f_4.value)
            t3fGP += parseInt(input4x3f_3.value)
            t3fGC += parseInt(input4x3f_4.value)
        }
        else if(input4x3f_4.value < input4x3f_3.value){
            t4fP += 0
            t4fJ += 1
            t4fV += 0
            t4fE += 0
            t4fD += 1
            t4fS += parseInt(input4x3f_4.value)
            t4fS -= parseInt(input4x3f_3.value)
            t4fGP += parseInt(input4x3f_4.value)
            t4fGC += parseInt(input4x3f_3.value)
            
            t3fP += 3
            t3fJ += 1
            t3fV += 1
            t3fE += 0
            t3fD += 0
            t3fS += parseInt(input4x3f_3.value)
            t3fS -= parseInt(input4x3f_4.value)
            t3fGP += parseInt(input4x3f_3.value)
            t3fGC += parseInt(input4x3f_4.value)
        }
        else if(input4x3f_4.value == input4x3f_3.value){
            t4fP += 1
            t4fJ += 1
            t4fV += 0
            t4fE += 1
            t4fD += 0
            t4fS += parseInt(input4x3f_4.value)
            t4fS -= parseInt(input4x3f_3.value)
            t4fGP += parseInt(input4x3f_4.value)
            t4fGC += parseInt(input4x3f_3.value)
            
            t3fP += 1
            t3fJ += 1
            t3fV += 0
            t3fE += 1
            t3fD += 0
            t3fS += parseInt(input4x3f_3.value)
            t3fS -= parseInt(input4x3f_4.value)
            t3fGP += parseInt(input4x3f_3.value)
            t3fGC += parseInt(input4x3f_4.value)
        }
    }
    if(input3x1f_3.value != "" && input3x1f_1.value != ""){
        if(input3x1f_3.value > input3x1f_1.value){
            t3fP += 3
            t3fJ += 1
            t3fV += 1
            t3fE += 0
            t3fD += 0
            t3fS += parseInt(input3x1f_3.value)
            t3fS -= parseInt(input3x1f_1.value)
            t3fGP += parseInt(input3x1f_3.value)
            t3fGC += parseInt(input3x1f_1.value)
            
            t1fP += 0
            t1fJ += 1
            t1fV += 0
            t1fE += 0
            t1fD += 1
            t1fS += parseInt(input3x1f_1.value)
            t1fS -= parseInt(input3x1f_3.value)
            t1fGP += parseInt(input3x1f_1.value)
            t1fGC += parseInt(input3x1f_3.value)
        }
        else if(input3x1f_3.value < input3x1f_1.value){
            t3fP += 0
            t3fJ += 1
            t3fV += 0
            t3fE += 0
            t3fD += 1
            t3fS += parseInt(input3x1f_3.value)
            t3fS -= parseInt(input3x1f_1.value)
            t3fGP += parseInt(input3x1f_3.value)
            t3fGC += parseInt(input3x1f_1.value)
            
            t1fP += 3
            t1fJ += 1
            t1fV += 1
            t1fE += 0
            t1fD += 0
            t1fS += parseInt(input3x1f_1.value)
            t1fS -= parseInt(input3x1f_3.value)
            t1fGP += parseInt(input3x1f_1.value)
            t1fGC += parseInt(input3x1f_3.value)
        }
        else if(input3x1f_3.value == input3x1f_1.value){
            t3fP += 1
            t3fJ += 1
            t3fV += 0
            t3fE += 1
            t3fD += 0
            t3fS += parseInt(input3x1f_3.value)
            t3fS -= parseInt(input3x1f_1.value)
            t3fGP += parseInt(input3x1f_3.value)
            t3fGC += parseInt(input3x1f_1.value)
            
            t1fP += 1
            t1fJ += 1
            t1fV += 0
            t1fE += 1
            t1fD += 0
            t1fS += parseInt(input3x1f_1.value)
            t1fS -= parseInt(input3x1f_3.value)
            t1fGP += parseInt(input3x1f_1.value)
            t1fGC += parseInt(input3x1f_3.value)
        }
    }
    if(input2x4f_2.value != "" && input2x4f_4.value != ""){
        if(input2x4f_2.value > input2x4f_4.value){
            t2fP += 3
            t2fJ += 1
            t2fV += 1
            t2fE += 0
            t2fD += 0
            t2fS += parseInt(input2x4f_2.value)
            t2fS -= parseInt(input2x4f_4.value)
            t2fGP += parseInt(input2x4f_2.value)
            t2fGC += parseInt(input2x4f_4.value)
            
            t4fP += 0
            t4fJ += 1
            t4fV += 0
            t4fE += 0
            t4fD += 1
            t4fS += parseInt(input2x4f_4.value)
            t4fS -= parseInt(input2x4f_2.value)
            t4fGP += parseInt(input2x4f_4.value)
            t4fGC += parseInt(input2x4f_2.value)
        }
        else if(input2x4f_2.value < input2x4f_4.value){
            t2fP += 0
            t2fJ += 1
            t2fV += 0
            t2fE += 0
            t2fD += 1
            t2fS += parseInt(input2x4f_2.value)
            t2fS -= parseInt(input2x4f_4.value)
            t2fGP += parseInt(input2x4f_2.value)
            t2fGC += parseInt(input2x4f_4.value)
            
            t4fP += 3
            t4fJ += 1
            t4fV += 1
            t4fE += 0
            t4fD += 0
            t4fS += parseInt(input2x4f_4.value)
            t4fS -= parseInt(input2x4f_2.value)
            t4fGP += parseInt(input2x4f_4.value)
            t4fGC += parseInt(input2x4f_2.value)
        }
        else if(input2x4f_2.value == input2x4f_4.value){
            t2fP += 1
            t2fJ += 1
            t2fV += 0
            t2fE += 1
            t2fD += 0
            t2fS += parseInt(input2x4f_2.value)
            t2fS -= parseInt(input2x4f_4.value)
            t2fGP += parseInt(input2x4f_2.value)
            t2fGC += parseInt(input2x4f_4.value)
            
            t4fP += 1
            t4fJ += 1
            t4fV += 0
            t4fE += 1
            t4fD += 0
            t4fS += parseInt(input2x4f_4.value)
            t4fS -= parseInt(input2x4f_2.value)
            t4fGP += parseInt(input2x4f_4.value)
            t4fGC += parseInt(input2x4f_2.value)
        }
    }
    if(input1x4f_1.value != "" && input1x4f_4.value != ""){
        if(input1x4f_1.value > input1x4f_4.value){
            t1fP += 3
            t1fJ += 1
            t1fV += 1
            t1fE += 0
            t1fD += 0
            t1fS += parseInt(input1x4f_1.value)
            t1fS -= parseInt(input1x4f_4.value)
            t1fGP += parseInt(input1x4f_1.value)
            t1fGC += parseInt(input1x4f_4.value)
            
            t4fP += 0
            t4fJ += 1
            t4fV += 0
            t4fE += 0
            t4fD += 1
            t4fS += parseInt(input1x4f_4.value)
            t4fS -= parseInt(input1x4f_1.value)
            t4fGP += parseInt(input1x4f_4.value)
            t4fGC += parseInt(input1x4f_1.value)
        }
        else if(input1x4f_1.value < input1x4f_4.value){
            t1fP += 0
            t1fJ += 1
            t1fV += 0
            t1fE += 0
            t1fD += 1
            t1fS += parseInt(input1x4f_1.value)
            t1fS -= parseInt(input1x4f_4.value)
            t1fGP += parseInt(input1x4f_1.value)
            t1fGC += parseInt(input1x4f_4.value)
            
            t4fP += 3
            t4fJ += 1
            t4fV += 1
            t4fE += 0
            t4fD += 0
            t4fS += parseInt(input1x4f_4.value)
            t4fS -= parseInt(input1x4f_1.value)
            t4fGP += parseInt(input1x4f_4.value)
            t4fGC += parseInt(input1x4f_1.value)
        }
        else if(input1x4f_1.value == input1x4f_4.value){
            t1fP += 1
            t1fJ += 1
            t1fV += 0
            t1fE += 1
            t1fD += 0
            t1fS += parseInt(input1x4f_1.value)
            t1fS -= parseInt(input1x4f_4.value)
            t1fGP += parseInt(input1x4f_1.value)
            t1fGC += parseInt(input1x4f_4.value)
            
            t4fP += 1
            t4fJ += 1
            t4fV += 0
            t4fE += 1
            t4fD += 0
            t4fS += parseInt(input1x4f_4.value)
            t4fS -= parseInt(input1x4f_1.value)
            t4fGP += parseInt(input1x4f_4.value)
            t4fGC += parseInt(input1x4f_1.value)
        }
    }
    if(input2x3f_2.value != "" && input2x3f_3.value != ""){
        if(input2x3f_2.value > input2x3f_3.value){
            t2fP += 3
            t2fJ += 1
            t2fV += 1
            t2fE += 0
            t2fD += 0
            t2fS += parseInt(input2x3f_2.value)
            t2fS -= parseInt(input2x3f_3.value)
            t2fGP += parseInt(input2x3f_2.value)
            t2fGC += parseInt(input2x3f_3.value)
            
            t3fP += 0
            t3fJ += 1
            t3fV += 0
            t3fE += 0
            t3fD += 1
            t3fS += parseInt(input2x3f_3.value)
            t3fS -= parseInt(input2x3f_2.value)
            t3fGP += parseInt(input2x3f_3.value)
            t3fGC += parseInt(input2x3f_2.value)
        }
        else if(input2x3f_2.value < input2x3f_3.value){
            t2fP += 0
            t2fJ += 1
            t2fV += 0
            t2fE += 0
            t2fD += 1
            t2fS += parseInt(input2x3f_2.value)
            t2fS -= parseInt(input2x3f_3.value)
            t2fGP += parseInt(input2x3f_2.value)
            t2fGC += parseInt(input2x3f_3.value)
            
            t3fP += 3
            t3fJ += 1
            t3fV += 1
            t3fE += 0
            t3fD += 0
            t3fS += parseInt(input2x3f_3.value)
            t3fS -= parseInt(input2x3f_2.value)
            t3fGP += parseInt(input2x3f_3.value)
            t3fGC += parseInt(input2x3f_2.value)
        }
        else if(input2x3f_2.value == input2x3f_3.value){
            t2fP += 1
            t2fJ += 1
            t2fV += 0
            t2fE += 1
            t2fD += 0
            t2fS += parseInt(input2x3f_2.value)
            t2fS -= parseInt(input2x3f_3.value)
            t2fGP += parseInt(input2x3f_2.value)
            t2fGC += parseInt(input2x3f_3.value)
            
            t3fP += 1
            t3fJ += 1
            t3fV += 0
            t3fE += 1
            t3fD += 0
            t3fS += parseInt(input2x3f_3.value)
            t3fS -= parseInt(input2x3f_2.value)
            t3fGP += parseInt(input2x3f_3.value)
            t3fGC += parseInt(input2x3f_2.value)
        }
    }
    if(input3x2f_3.value != "" && input3x2f_2.value != ""){
        if(input3x2f_3.value > input3x2f_2.value){
            t3fP += 3
            t3fJ += 1
            t3fV += 1
            t3fE += 0
            t3fD += 0
            t3fS += parseInt(input3x2f_3.value)
            t3fS -= parseInt(input3x2f_2.value)
            t3fGP += parseInt(input3x2f_3.value)
            t3fGC += parseInt(input3x2f_2.value)
            
            t2fP += 0
            t2fJ += 1
            t2fV += 0
            t2fE += 0
            t2fD += 1
            t2fS += parseInt(input3x2f_2.value)
            t2fS -= parseInt(input3x2f_3.value)
            t2fGP += parseInt(input3x2f_2.value)
            t2fGC += parseInt(input3x2f_3.value)
        }
        else if(input3x2f_3.value < input3x2f_2.value){
            t3fP += 0
            t3fJ += 1
            t3fV += 0
            t3fE += 0
            t3fD += 1
            t3fS += parseInt(input3x2f_3.value)
            t3fS -= parseInt(input3x2f_2.value)
            t3fGP += parseInt(input3x2f_3.value)
            t3fGC += parseInt(input3x2f_2.value)
        
            t2fP += 3
            t2fJ += 1
            t2fV += 1
            t2fE += 0
            t2fD += 0
            t2fS += parseInt(input3x2f_2.value)
            t2fS -= parseInt(input3x2f_3.value)
            t2fGP += parseInt(input3x2f_2.value)
            t2fGC += parseInt(input3x2f_3.value)
        }
        else if(input3x2f_3.value == input3x2f_2.value){
            t3fP += 1
            t3fJ += 1
            t3fV += 0
            t3fE += 1
            t3fD += 0
            t3fS += parseInt(input3x2f_3.value)
            t3fS -= parseInt(input3x2f_2.value)
            t3fGP += parseInt(input3x2f_3.value)
            t3fGC += parseInt(input3x2f_2.value)
            
            t2fP += 1
            t2fJ += 1
            t2fV += 0
            t2fE += 1
            t2fD += 0
            t2fS += parseInt(input3x2f_2.value)
            t2fS -= parseInt(input3x2f_3.value)
            t2fGP += parseInt(input3x2f_2.value)
            t2fGC += parseInt(input3x2f_3.value)
        }
    }
    if(input4x1f_4.value != "" && input4x1f_1.value != ""){
        if(input4x1f_4.value > input4x1f_1.value){
            t4fP += 3
            t4fJ += 1
            t4fV += 1
            t4fE += 0
            t4fD += 0
            t4fS += parseInt(input4x1f_4.value)
            t4fS -= parseInt(input4x1f_1.value)
            t4fGP += parseInt(input4x1f_4.value)
            t4fGC += parseInt(input4x1f_1.value)
            
            t1fP += 0
            t1fJ += 1
            t1fV += 0
            t1fE += 0
            t1fD += 1
            t1fS += parseInt(input4x1f_1.value)
            t1fS -= parseInt(input4x1f_4.value)
            t1fGP += parseInt(input4x1f_1.value)
            t1fGC += parseInt(input4x1f_4.value)
        }
        else if(input4x1f_4.value < input4x1f_1.value){
            t4fP += 0
            t4fJ += 1
            t4fV += 0
            t4fE += 0
            t4fD += 1
            t4fS += parseInt(input4x1f_4.value)
            t4fS -= parseInt(input4x1f_1.value)
            t4fGP += parseInt(input4x1f_4.value)
            t4fGC += parseInt(input4x1f_1.value)
            
            t1fP += 3
            t1fJ += 1
            t1fV += 1
            t1fE += 0
            t1fD += 0
            t1fS += parseInt(input4x1f_1.value)
            t1fS -= parseInt(input4x1f_4.value)
            t1fGP += parseInt(input4x1f_1.value)
            t1fGC += parseInt(input4x1f_4.value)
        }
        else if(input4x1f_4.value == input4x1f_1.value){
            t4fP += 1
            t4fJ += 1
            t4fV += 0
            t4fE += 1
            t4fD += 0
            t4fS += parseInt(input4x1f_4.value)
            t4fS -= parseInt(input4x1f_1.value)
            t4fGP += parseInt(input4x1f_4.value)
            t4fGC += parseInt(input4x1f_1.value)
            
            t1fP += 1
            t1fJ += 1
            t1fV += 0
            t1fE += 1
            t1fD += 0
            t1fS += parseInt(input4x1f_1.value)
            t1fS -= parseInt(input4x1f_4.value)
            t1fGP += parseInt(input4x1f_1.value)
            t1fGC += parseInt(input4x1f_4.value)
        }
    }
    if(input4x2f_4.value != "" && input4x2f_2.value != ""){
        if(input4x2f_4.value > input4x2f_2.value){
            t4fP += 3
            t4fJ += 1
            t4fV += 1
            t4fE += 0
            t4fD += 0
            t4fS += parseInt(input4x2f_4.value)
            t4fS -= parseInt(input4x2f_2.value)
            t4fGP += parseInt(input4x2f_4.value)
            t4fGC += parseInt(input4x2f_2.value)
            
            t2fP += 0
            t2fJ += 1
            t2fV += 0
            t2fE += 0
            t2fD += 1
            t2fS += parseInt(input4x2f_2.value)
            t2fS -= parseInt(input4x2f_4.value)
            t2fGP += parseInt(input4x2f_2.value)
            t2fGC += parseInt(input4x2f_4.value)
        }
        else if(input4x2f_4.value < input4x2f_2.value){
            t4fP += 0
            t4fJ += 1
            t4fV += 0
            t4fE += 0
            t4fD += 1
            t4fS += parseInt(input4x2f_4.value)
            t4fS -= parseInt(input4x2f_2.value)
            t4fGP += parseInt(input4x2f_4.value)
            t4fGC += parseInt(input4x2f_2.value)
            
            t2fP += 3
            t2fJ += 1
            t2fV += 1
            t2fE += 0
            t2fD += 0
            t2fS += parseInt(input4x2f_2.value)
            t2fS -= parseInt(input4x2f_4.value)
            t2fGP += parseInt(input4x2f_2.value)
            t2fGC += parseInt(input4x2f_4.value)
        }
        else if(input4x2f_4.value == input4x2f_2.value){
            t4fP += 1
            t4fJ += 1
            t4fV += 0
            t4fE += 1
            t4fD += 0
            t4fS += parseInt(input4x2f_4.value)
            t4fS -= parseInt(input4x2f_2.value)
            t4fGP += parseInt(input4x2f_4.value)
            t4fGC += parseInt(input4x2f_2.value)
            
            t2fP += 1
            t2fJ += 1
            t2fV += 0
            t2fE += 1
            t2fD += 0
            t2fS += parseInt(input4x2f_2.value)
            t2fS -= parseInt(input4x2f_4.value)
            t2fGP += parseInt(input4x2f_2.value)
            t2fGC += parseInt(input4x2f_4.value)
        }
    }
    if(input1x3f_1.value != "" && input1x3f_3.value != ""){
        if(input1x3f_1.value > input1x3f_3.value){
            t1fP += 3
            t1fJ += 1
            t1fV += 1
            t1fE += 0
            t1fD += 0
            t1fS += parseInt(input1x3f_1.value)
            t1fS -= parseInt(input1x3f_3.value)
            t1fGP += parseInt(input1x3f_1.value)
            t1fGC += parseInt(input1x3f_3.value)
            
            t3fP += 0
            t3fJ += 1
            t3fV += 0
            t3fE += 0
            t3fD += 1
            t3fS += parseInt(input1x3f_3.value)
            t3fS -= parseInt(input1x3f_1.value)
            t3fGP += parseInt(input1x3f_3.value)
            t3fGC += parseInt(input1x3f_1.value)
        }
        else if(input1x3f_1.value < input1x3f_3.value){
            t1fP += 0
            t1fJ += 1
            t1fV += 0
            t1fE += 0
            t1fD += 1
            t1fS += parseInt(input1x3f_1.value)
            t1fS -= parseInt(input1x3f_3.value)
            t1fGP += parseInt(input1x3f_1.value)
            t1fGC += parseInt(input1x3f_3.value)
            
            t3fP += 3
            t3fJ += 1
            t3fV += 1
            t3fE += 0
            t3fD += 0
            t3fS += parseInt(input1x3f_3.value)
            t3fS -= parseInt(input1x3f_1.value)
            t3fGP += parseInt(input1x3f_3.value)
            t3fGC += parseInt(input1x3f_1.value)
        }
        else if(input1x3f_1.value == input1x3f_3.value){
            t1fP += 1
            t1fJ += 1
            t1fV += 0
            t1fE += 1
            t1fD += 0
            t1fS += parseInt(input1x3f_1.value)
            t1fS -= parseInt(input1x3f_3.value)
            t1fGP += parseInt(input1x3f_1.value)
            t1fGC += parseInt(input1x3f_3.value)
            
            t3fP += 1
            t3fJ += 1
            t3fV += 0
            t3fE += 1
            t3fD += 0
            t3fS += parseInt(input1x3f_3.value)
            t3fS -= parseInt(input1x3f_1.value)
            t3fGP += parseInt(input1x3f_3.value)
            t3fGC += parseInt(input1x3f_1.value)
        }
    }
    if(input3x4f_3.value != "" && input3x4f_4.value != ""){
        if(input3x4f_3.value > input3x4f_4.value){
            t3fP += 3
            t3fJ += 1
            t3fV += 1
            t3fE += 0
            t3fD += 0
            t3fS += parseInt(input3x4f_3.value)
            t3fS -= parseInt(input3x4f_4.value)
            t3fGP += parseInt(input3x4f_3.value)
            t3fGC += parseInt(input3x4f_4.value)
            
            t4fP += 0
            t4fJ += 1
            t4fV += 0
            t4fE += 0
            t4fD += 1
            t4fS += parseInt(input3x4f_4.value)
            t4fS -= parseInt(input3x4f_3.value)
            t4fGP += parseInt(input3x4f_4.value)
            t4fGC += parseInt(input3x4f_3.value)
        }
        else if(input3x4f_3.value < input3x4f_4.value){
            t3fP += 0
            t3fJ += 1
            t3fV += 0
            t3fE += 0
            t3fD += 1
            t3fS += parseInt(input3x4f_3.value)
            t3fS -= parseInt(input3x4f_4.value)
            t3fGP += parseInt(input3x4f_3.value)
            t3fGC += parseInt(input3x4f_4.value)
            
            t4fP += 3
            t4fJ += 1
            t4fV += 1
            t4fE += 0
            t4fD += 0
            t4fS += parseInt(input3x4f_4.value)
            t4fS -= parseInt(input3x4f_3.value)
            t4fGP += parseInt(input3x4f_4.value)
            t4fGC += parseInt(input3x4f_3.value)
        }
        else if(input3x4f_3.value == input3x4f_4.value){
            t3fP += 1
            t3fJ += 1
            t3fV += 0
            t3fE += 1
            t3fD += 0
            t3fS += parseInt(input3x4f_3.value)
            t3fS -= parseInt(input3x4f_4.value)
            t3fGP += parseInt(input3x4f_3.value)
            t3fGC += parseInt(input3x4f_4.value)
            
            t4fP += 1
            t4fJ += 1
            t4fV += 0
            t4fE += 1
            t4fD += 0
            t4fS += parseInt(input3x4f_4.value)
            t4fS -= parseInt(input3x4f_3.value)
            t4fGP += parseInt(input3x4f_4.value)
            t4fGC += parseInt(input3x4f_3.value)
        }
    }
    if(input2x1f_2.value != "" && input2x1f_1.value != ""){
        if(input2x1f_2.value > input2x1f_1.value){
            t2fP += 3
            t2fJ += 1
            t2fV += 1
            t2fE += 0
            t2fD += 0
            t2fS += parseInt(input2x1f_2.value)
            t2fS -= parseInt(input2x1f_1.value)
            t2fGP += parseInt(input2x1f_2.value)
            t2fGC += parseInt(input2x1f_1.value)
            
            t1fP += 0
            t1fJ += 1
            t1fV += 0
            t1fE += 0
            t1fD += 1
            t1fS += parseInt(input2x1f_1.value)
            t1fS -= parseInt(input2x1f_2.value)
            t1fGP += parseInt(input2x1f_1.value)
            t1fGC += parseInt(input2x1f_2.value)
        }
        else if(input2x1f_2.value < input2x1f_1.value){
            t2fP += 0
            t2fJ += 1
            t2fV += 0
            t2fE += 0
            t2fD += 1
            t2fS += parseInt(input2x1f_2.value)
            t2fS -= parseInt(input2x1f_1.value)
            t2fGP += parseInt(input2x1f_2.value)
            t2fGC += parseInt(input2x1f_1.value)
            
            t1fP += 3
            t1fJ += 1
            t1fV += 1
            t1fE += 0
            t1fD += 0
            t1fS += parseInt(input2x1f_1.value)
            t1fS -= parseInt(input2x1f_2.value)
            t1fGP += parseInt(input2x1f_1.value)
            t1fGC += parseInt(input2x1f_2.value)
        }
        else if(input2x1f_2.value == input2x1f_1.value){
            t2fP += 1
            t2fJ += 1
            t2fV += 0
            t2fE += 1
            t2fD += 0
            t2fS += parseInt(input2x1f_2.value)
            t2fS -= parseInt(input2x1f_1.value)
            t2fGP += parseInt(input2x1f_2.value)
            t2fGC += parseInt(input2x1f_1.value)
            
            t1fP += 1
            t1fJ += 1
            t1fV += 0
            t1fE += 1
            t1fD += 0
            t1fS += parseInt(input2x1f_1.value)
            t1fS -= parseInt(input2x1f_2.value)
            t1fGP += parseInt(input2x1f_1.value)
            t1fGC += parseInt(input2x1f_2.value)
        }
    }

    var frrfy_time1 = [time1f[1],
                        t1fP,
                        t1fJ,
                        t1fV,
                        t1fE,
                        t1fD,
                        t1fS,
                        t1fGP,
                        t1fGC
                    ]
    var frrfy_time2 = [time2f[1],
                        t2fP,
                        t2fJ,
                        t2fV,
                        t2fE,
                        t2fD,
                        t2fS,
                        t2fGP,
                        t2fGC
                    ]
    var frrfy_time3 = [time3f[1],
                        t3fP,
                        t3fJ,
                        t3fV,
                        t3fE,
                        t3fD,
                        t3fS,
                        t3fGP,
                        t3fGC
                    ]
    var frrfy_time4 = [time4f[1],
                        t4fP,
                        t4fJ,
                        t4fV,
                        t4fE,
                        t4fD,
                        t4fS,
                        t4fGP,
                        t4fGC
                    ]
    var mftriz = [frrfy_time1, frrfy_time2, frrfy_time3, frrfy_time4]
    var mftrizfjustfdf = ajuste(mftriz)

    console.log(mftrizfjustfdf)

    // CRIFNDO TIME 1 F
    var time1f_nome = document.querySelector("#time1f_nome")
    time1f_nome.textContent = " " + (mftrizfjustfdf[0][0].toUpperCase())
    var time1f_img = document.querySelector("#time1f_img")
    time1f_img.src = mftrizfjustfdf[0][0] + ".png"
    var time1f_P = document.querySelector("#time1f_P")
    time1f_P.textContent = mftrizfjustfdf[0][1]
    var time1f_J = document.querySelector("#time1f_J")
    time1f_J.textContent = mftrizfjustfdf[0][2]
    var time1f_V = document.querySelector("#time1f_V")
    time1f_V.textContent = mftrizfjustfdf[0][3]
    var time1f_E = document.querySelector("#time1f_E")
    time1f_E.textContent = mftrizfjustfdf[0][4]
    var time1f_D = document.querySelector("#time1f_D")
    time1f_D.textContent = mftrizfjustfdf[0][5]
    var time1f_S = document.querySelector("#time1f_S")
    time1f_S.textContent = mftrizfjustfdf[0][6]
    var time1f_GP = document.querySelector("#time1f_GP")
    time1f_GP.textContent = mftrizfjustfdf[0][7]
    var time1f_GC = document.querySelector("#time1f_GC")
    time1f_GC.textContent = mftrizfjustfdf[0][8]

    // CRIFNDO TIME 2 F

    var time2f_nome = document.querySelector("#time2f_nome")
    time2f_nome.textContent = " " + mftrizfjustfdf[1][0].toUpperCase()
    var time2f_img = document.querySelector("#time2f_img")
    time2f_img.src = mftrizfjustfdf[1][0] + ".png"
    var time2f_P = document.querySelector("#time2f_P")
    time2f_P.textContent = mftrizfjustfdf[1][1]
    var time2f_J = document.querySelector("#time2f_J")
    time2f_J.textContent = mftrizfjustfdf[1][2]
    var time2f_V = document.querySelector("#time2f_V")
    time2f_V.textContent = mftrizfjustfdf[1][3]
    var time2f_E = document.querySelector("#time2f_E")
    time2f_E.textContent = mftrizfjustfdf[1][4]
    var time2f_D = document.querySelector("#time2f_D")
    time2f_D.textContent = mftrizfjustfdf[1][5]
    var time2f_S = document.querySelector("#time2f_S")
    time2f_S.textContent = mftrizfjustfdf[1][6]
    var time2f_GP = document.querySelector("#time2f_GP")
    time2f_GP.textContent = mftrizfjustfdf[1][7]
    var time2f_GC = document.querySelector("#time2f_GC")
    time2f_GC.textContent = mftrizfjustfdf[1][8]

    // CRIFNDO TIME 3 F

    var time3f_nome = document.querySelector("#time3f_nome")
    time3f_nome.textContent = " " + mftrizfjustfdf[2][0].toUpperCase()
    var time3f_img = document.querySelector("#time3f_img")
    time3f_img.src = mftrizfjustfdf[2][0] + ".png"
    var time3f_P = document.querySelector("#time3f_P")
    time3f_P.textContent = mftrizfjustfdf[2][1]
    var time3f_J = document.querySelector("#time3f_J")
    time3f_J.textContent = mftrizfjustfdf[2][2]
    var time3f_V = document.querySelector("#time3f_V")
    time3f_V.textContent = mftrizfjustfdf[2][3]
    var time3f_E = document.querySelector("#time3f_E")
    time3f_E.textContent = mftrizfjustfdf[2][4]
    var time3f_D = document.querySelector("#time3f_D")
    time3f_D.textContent = mftrizfjustfdf[2][5]
    var time3f_S = document.querySelector("#time3f_S")
    time3f_S.textContent = mftrizfjustfdf[2][6]
    var time3f_GP = document.querySelector("#time3f_GP")
    time3f_GP.textContent = mftrizfjustfdf[2][7]
    var time3f_GC = document.querySelector("#time3f_GC")
    time3f_GC.textContent = mftrizfjustfdf[2][8]

    // CRIFNDO TIME 4 F

    var time4f_nome = document.querySelector("#time4f_nome")
    time4f_nome.textContent = " " + mftrizfjustfdf[3][0].toUpperCase()
    var time4f_img = document.querySelector("#time4f_img")
    time4f_img.src = mftrizfjustfdf[3][0] + ".png"
    var time4f_P = document.querySelector("#time4f_P")
    time4f_P.textContent = mftrizfjustfdf[3][1]
    var time4f_J = document.querySelector("#time4f_J")
    time4f_J.textContent = mftrizfjustfdf[3][2]
    var time4f_V = document.querySelector("#time4f_V")
    time4f_V.textContent = mftrizfjustfdf[3][3]
    var time4f_E = document.querySelector("#time4f_E")
    time4f_E.textContent = mftrizfjustfdf[3][4]
    var time4f_D = document.querySelector("#time4f_D")
    time4f_D.textContent = mftrizfjustfdf[3][5]
    var time4f_S = document.querySelector("#time4f_S")
    time4f_S.textContent = mftrizfjustfdf[3][6]
    var time4f_GP = document.querySelector("#time4f_GP")
    time4f_GP.textContent = mftrizfjustfdf[3][7]
    var time4f_GC = document.querySelector("#time4f_GC")
    time4f_GC.textContent = mftrizfjustfdf[3][8]

    var t1gP = 0
    var t1gJ = 0
    var t1gV = 0
    var t1gE = 0
    var t1gD = 0
    var t1gS = 0
    var t1gGP = 0
    var t1gGC = 0
    
    var t2gP = 0
    var t2gJ = 0
    var t2gV = 0
    var t2gE = 0
    var t2gD = 0
    var t2gS = 0
    var t2gGP = 0
    var t2gGC = 0

    var t3gP = 0
    var t3gJ = 0
    var t3gV = 0
    var t3gE = 0
    var t3gD = 0
    var t3gS = 0
    var t3gGP = 0
    var t3gGC = 0

    var t4gP = 0
    var t4gJ = 0
    var t4gV = 0
    var t4gE = 0
    var t4gD = 0
    var t4gS = 0
    var t4gGP = 0
    var t4gGC = 0

    if(input1x2g_1.value != "" && input1x2g_2.value != ""){
        if(input1x2g_1.value > input1x2g_2.value){
            t1gP += 3
            t1gJ += 1
            t1gV += 1
            t1gE += 0
            t1gD += 0
            t1gS += parseInt(input1x2g_1.value)
            t1gS -= parseInt(input1x2g_2.value)
            t1gGP += parseInt(input1x2g_1.value)
            t1gGC += parseInt(input1x2g_2.value)
            
            t2gP += 0
            t2gJ += 1
            t2gV += 0
            t2gE += 0
            t2gD += 1
            t2gS += parseInt(input1x2g_2.value)
            t2gS -= parseInt(input1x2g_1.value)
            t2gGP += parseInt(input1x2g_2.value)
            t2gGC += parseInt(input1x2g_1.value)
        }
        else if(input1x2g_1.value < input1x2g_2.value){
            t1gP += 0
            t1gJ += 1
            t1gV += 0
            t1gE += 0
            t1gD += 1
            t1gS += parseInt(input1x2g_1.value)
            t1gS -= parseInt(input1x2g_2.value)
            t1gGP += parseInt(input1x2g_1.value)
            t1gGC += parseInt(input1x2g_2.value)
            
            t2gP += 3
            t2gJ += 1
            t2gV += 1
            t2gE += 0
            t2gD += 0
            t2gS += parseInt(input1x2g_2.value)
            t2gS -= parseInt(input1x2g_1.value)
            t2gGP += parseInt(input1x2g_2.value)
            t2gGC += parseInt(input1x2g_1.value)
        }
        else if(input1x2g_1.value == input1x2g_2.value){
            t1gP += 1
            t1gJ += 1
            t1gV += 0
            t1gE += 1
            t1gD += 0
            t1gS += parseInt(input1x2g_1.value)
            t1gS -= parseInt(input1x2g_2.value)
            t1gGP += parseInt(input1x2g_1.value)
            t1gGC += parseInt(input1x2g_2.value)
            
            t2gP += 1
            t2gJ += 1
            t2gV += 0
            t2gE += 1
            t2gD += 0
            t2gS += parseInt(input1x2g_2.value)
            t2gS -= parseInt(input1x2g_1.value)
            t2gGP += parseInt(input1x2g_2.value)
            t2gGC += parseInt(input1x2g_1.value)
        }
    }
    if(input4x3g_4.value != "" && input4x3g_3.value != ""){
        if(input4x3g_4.value > input4x3g_3.value){
            t4gP += 3
            t4gJ += 1
            t4gV += 1
            t4gE += 0
            t4gD += 0
            t4gS += parseInt(input4x3g_4.value)
            t4gS -= parseInt(input4x3g_3.value)
            t4gGP += parseInt(input4x3g_4.value)
            t4gGC += parseInt(input4x3g_3.value)
            
            t3gP += 0
            t3gJ += 1
            t3gV += 0
            t3gE += 0
            t3gD += 1
            t3gS += parseInt(input4x3g_3.value)
            t3gS -= parseInt(input4x3g_4.value)
            t3gGP += parseInt(input4x3g_3.value)
            t3gGC += parseInt(input4x3g_4.value)
        }
        else if(input4x3g_4.value < input4x3g_3.value){
            t4gP += 0
            t4gJ += 1
            t4gV += 0
            t4gE += 0
            t4gD += 1
            t4gS += parseInt(input4x3g_4.value)
            t4gS -= parseInt(input4x3g_3.value)
            t4gGP += parseInt(input4x3g_4.value)
            t4gGC += parseInt(input4x3g_3.value)
            
            t3gP += 3
            t3gJ += 1
            t3gV += 1
            t3gE += 0
            t3gD += 0
            t3gS += parseInt(input4x3g_3.value)
            t3gS -= parseInt(input4x3g_4.value)
            t3gGP += parseInt(input4x3g_3.value)
            t3gGC += parseInt(input4x3g_4.value)
        }
        else if(input4x3g_4.value == input4x3g_3.value){
            t4gP += 1
            t4gJ += 1
            t4gV += 0
            t4gE += 1
            t4gD += 0
            t4gS += parseInt(input4x3g_4.value)
            t4gS -= parseInt(input4x3g_3.value)
            t4gGP += parseInt(input4x3g_4.value)
            t4gGC += parseInt(input4x3g_3.value)
            
            t3gP += 1
            t3gJ += 1
            t3gV += 0
            t3gE += 1
            t3gD += 0
            t3gS += parseInt(input4x3g_3.value)
            t3gS -= parseInt(input4x3g_4.value)
            t3gGP += parseInt(input4x3g_3.value)
            t3gGC += parseInt(input4x3g_4.value)
        }
    }
    if(input3x1g_3.value != "" && input3x1g_1.value != ""){
        if(input3x1g_3.value > input3x1g_1.value){
            t3gP += 3
            t3gJ += 1
            t3gV += 1
            t3gE += 0
            t3gD += 0
            t3gS += parseInt(input3x1g_3.value)
            t3gS -= parseInt(input3x1g_1.value)
            t3gGP += parseInt(input3x1g_3.value)
            t3gGC += parseInt(input3x1g_1.value)
            
            t1gP += 0
            t1gJ += 1
            t1gV += 0
            t1gE += 0
            t1gD += 1
            t1gS += parseInt(input3x1g_1.value)
            t1gS -= parseInt(input3x1g_3.value)
            t1gGP += parseInt(input3x1g_1.value)
            t1gGC += parseInt(input3x1g_3.value)
        }
        else if(input3x1g_3.value < input3x1g_1.value){
            t3gP += 0
            t3gJ += 1
            t3gV += 0
            t3gE += 0
            t3gD += 1
            t3gS += parseInt(input3x1g_3.value)
            t3gS -= parseInt(input3x1g_1.value)
            t3gGP += parseInt(input3x1g_3.value)
            t3gGC += parseInt(input3x1g_1.value)
            
            t1gP += 3
            t1gJ += 1
            t1gV += 1
            t1gE += 0
            t1gD += 0
            t1gS += parseInt(input3x1g_1.value)
            t1gS -= parseInt(input3x1g_3.value)
            t1gGP += parseInt(input3x1g_1.value)
            t1gGC += parseInt(input3x1g_3.value)
        }
        else if(input3x1g_3.value == input3x1g_1.value){
            t3gP += 1
            t3gJ += 1
            t3gV += 0
            t3gE += 1
            t3gD += 0
            t3gS += parseInt(input3x1g_3.value)
            t3gS -= parseInt(input3x1g_1.value)
            t3gGP += parseInt(input3x1g_3.value)
            t3gGC += parseInt(input3x1g_1.value)
            
            t1gP += 1
            t1gJ += 1
            t1gV += 0
            t1gE += 1
            t1gD += 0
            t1gS += parseInt(input3x1g_1.value)
            t1gS -= parseInt(input3x1g_3.value)
            t1gGP += parseInt(input3x1g_1.value)
            t1gGC += parseInt(input3x1g_3.value)
        }
    }
    if(input2x4g_2.value != "" && input2x4g_4.value != ""){
        if(input2x4g_2.value > input2x4g_4.value){
            t2gP += 3
            t2gJ += 1
            t2gV += 1
            t2gE += 0
            t2gD += 0
            t2gS += parseInt(input2x4g_2.value)
            t2gS -= parseInt(input2x4g_4.value)
            t2gGP += parseInt(input2x4g_2.value)
            t2gGC += parseInt(input2x4g_4.value)
            
            t4gP += 0
            t4gJ += 1
            t4gV += 0
            t4gE += 0
            t4gD += 1
            t4gS += parseInt(input2x4g_4.value)
            t4gS -= parseInt(input2x4g_2.value)
            t4gGP += parseInt(input2x4g_4.value)
            t4gGC += parseInt(input2x4g_2.value)
        }
        else if(input2x4g_2.value < input2x4g_4.value){
            t2gP += 0
            t2gJ += 1
            t2gV += 0
            t2gE += 0
            t2gD += 1
            t2gS += parseInt(input2x4g_2.value)
            t2gS -= parseInt(input2x4g_4.value)
            t2gGP += parseInt(input2x4g_2.value)
            t2gGC += parseInt(input2x4g_4.value)
            
            t4gP += 3
            t4gJ += 1
            t4gV += 1
            t4gE += 0
            t4gD += 0
            t4gS += parseInt(input2x4g_4.value)
            t4gS -= parseInt(input2x4g_2.value)
            t4gGP += parseInt(input2x4g_4.value)
            t4gGC += parseInt(input2x4g_2.value)
        }
        else if(input2x4g_2.value == input2x4g_4.value){
            t2gP += 1
            t2gJ += 1
            t2gV += 0
            t2gE += 1
            t2gD += 0
            t2gS += parseInt(input2x4g_2.value)
            t2gS -= parseInt(input2x4g_4.value)
            t2gGP += parseInt(input2x4g_2.value)
            t2gGC += parseInt(input2x4g_4.value)
            
            t4gP += 1
            t4gJ += 1
            t4gV += 0
            t4gE += 1
            t4gD += 0
            t4gS += parseInt(input2x4g_4.value)
            t4gS -= parseInt(input2x4g_2.value)
            t4gGP += parseInt(input2x4g_4.value)
            t4gGC += parseInt(input2x4g_2.value)
        }
    }
    if(input1x4g_1.value != "" && input1x4g_4.value != ""){
        if(input1x4g_1.value > input1x4g_4.value){
            t1gP += 3
            t1gJ += 1
            t1gV += 1
            t1gE += 0
            t1gD += 0
            t1gS += parseInt(input1x4g_1.value)
            t1gS -= parseInt(input1x4g_4.value)
            t1gGP += parseInt(input1x4g_1.value)
            t1gGC += parseInt(input1x4g_4.value)
            
            t4gP += 0
            t4gJ += 1
            t4gV += 0
            t4gE += 0
            t4gD += 1
            t4gS += parseInt(input1x4g_4.value)
            t4gS -= parseInt(input1x4g_1.value)
            t4gGP += parseInt(input1x4g_4.value)
            t4gGC += parseInt(input1x4g_1.value)
        }
        else if(input1x4g_1.value < input1x4g_4.value){
            t1gP += 0
            t1gJ += 1
            t1gV += 0
            t1gE += 0
            t1gD += 1
            t1gS += parseInt(input1x4g_1.value)
            t1gS -= parseInt(input1x4g_4.value)
            t1gGP += parseInt(input1x4g_1.value)
            t1gGC += parseInt(input1x4g_4.value)
            
            t4gP += 3
            t4gJ += 1
            t4gV += 1
            t4gE += 0
            t4gD += 0
            t4gS += parseInt(input1x4g_4.value)
            t4gS -= parseInt(input1x4g_1.value)
            t4gGP += parseInt(input1x4g_4.value)
            t4gGC += parseInt(input1x4g_1.value)
        }
        else if(input1x4g_1.value == input1x4g_4.value){
            t1gP += 1
            t1gJ += 1
            t1gV += 0
            t1gE += 1
            t1gD += 0
            t1gS += parseInt(input1x4g_1.value)
            t1gS -= parseInt(input1x4g_4.value)
            t1gGP += parseInt(input1x4g_1.value)
            t1gGC += parseInt(input1x4g_4.value)
            
            t4gP += 1
            t4gJ += 1
            t4gV += 0
            t4gE += 1
            t4gD += 0
            t4gS += parseInt(input1x4g_4.value)
            t4gS -= parseInt(input1x4g_1.value)
            t4gGP += parseInt(input1x4g_4.value)
            t4gGC += parseInt(input1x4g_1.value)
        }
    }
    if(input2x3g_2.value != "" && input2x3g_3.value != ""){
        if(input2x3g_2.value > input2x3g_3.value){
            t2gP += 3
            t2gJ += 1
            t2gV += 1
            t2gE += 0
            t2gD += 0
            t2gS += parseInt(input2x3g_2.value)
            t2gS -= parseInt(input2x3g_3.value)
            t2gGP += parseInt(input2x3g_2.value)
            t2gGC += parseInt(input2x3g_3.value)
            
            t3gP += 0
            t3gJ += 1
            t3gV += 0
            t3gE += 0
            t3gD += 1
            t3gS += parseInt(input2x3g_3.value)
            t3gS -= parseInt(input2x3g_2.value)
            t3gGP += parseInt(input2x3g_3.value)
            t3gGC += parseInt(input2x3g_2.value)
        }
        else if(input2x3g_2.value < input2x3g_3.value){
            t2gP += 0
            t2gJ += 1
            t2gV += 0
            t2gE += 0
            t2gD += 1
            t2gS += parseInt(input2x3g_2.value)
            t2gS -= parseInt(input2x3g_3.value)
            t2gGP += parseInt(input2x3g_2.value)
            t2gGC += parseInt(input2x3g_3.value)
            
            t3gP += 3
            t3gJ += 1
            t3gV += 1
            t3gE += 0
            t3gD += 0
            t3gS += parseInt(input2x3g_3.value)
            t3gS -= parseInt(input2x3g_2.value)
            t3gGP += parseInt(input2x3g_3.value)
            t3gGC += parseInt(input2x3g_2.value)
        }
        else if(input2x3g_2.value == input2x3g_3.value){
            t2gP += 1
            t2gJ += 1
            t2gV += 0
            t2gE += 1
            t2gD += 0
            t2gS += parseInt(input2x3g_2.value)
            t2gS -= parseInt(input2x3g_3.value)
            t2gGP += parseInt(input2x3g_2.value)
            t2gGC += parseInt(input2x3g_3.value)
            
            t3gP += 1
            t3gJ += 1
            t3gV += 0
            t3gE += 1
            t3gD += 0
            t3gS += parseInt(input2x3g_3.value)
            t3gS -= parseInt(input2x3g_2.value)
            t3gGP += parseInt(input2x3g_3.value)
            t3gGC += parseInt(input2x3g_2.value)
        }
    }
    if(input3x2g_3.value != "" && input3x2g_2.value != ""){
        if(input3x2g_3.value > input3x2g_2.value){
            t3gP += 3
            t3gJ += 1
            t3gV += 1
            t3gE += 0
            t3gD += 0
            t3gS += parseInt(input3x2g_3.value)
            t3gS -= parseInt(input3x2g_2.value)
            t3gGP += parseInt(input3x2g_3.value)
            t3gGC += parseInt(input3x2g_2.value)
            
            t2gP += 0
            t2gJ += 1
            t2gV += 0
            t2gE += 0
            t2gD += 1
            t2gS += parseInt(input3x2g_2.value)
            t2gS -= parseInt(input3x2g_3.value)
            t2gGP += parseInt(input3x2g_2.value)
            t2gGC += parseInt(input3x2g_3.value)
        }
        else if(input3x2g_3.value < input3x2g_2.value){
            t3gP += 0
            t3gJ += 1
            t3gV += 0
            t3gE += 0
            t3gD += 1
            t3gS += parseInt(input3x2g_3.value)
            t3gS -= parseInt(input3x2g_2.value)
            t3gGP += parseInt(input3x2g_3.value)
            t3gGC += parseInt(input3x2g_2.value)
        
            t2gP += 3
            t2gJ += 1
            t2gV += 1
            t2gE += 0
            t2gD += 0
            t2gS += parseInt(input3x2g_2.value)
            t2gS -= parseInt(input3x2g_3.value)
            t2gGP += parseInt(input3x2g_2.value)
            t2gGC += parseInt(input3x2g_3.value)
        }
        else if(input3x2g_3.value == input3x2g_2.value){
            t3gP += 1
            t3gJ += 1
            t3gV += 0
            t3gE += 1
            t3gD += 0
            t3gS += parseInt(input3x2g_3.value)
            t3gS -= parseInt(input3x2g_2.value)
            t3gGP += parseInt(input3x2g_3.value)
            t3gGC += parseInt(input3x2g_2.value)
            
            t2gP += 1
            t2gJ += 1
            t2gV += 0
            t2gE += 1
            t2gD += 0
            t2gS += parseInt(input3x2g_2.value)
            t2gS -= parseInt(input3x2g_3.value)
            t2gGP += parseInt(input3x2g_2.value)
            t2gGC += parseInt(input3x2g_3.value)
        }
    }
    if(input4x1g_4.value != "" && input4x1g_1.value != ""){
        if(input4x1g_4.value > input4x1g_1.value){
            t4gP += 3
            t4gJ += 1
            t4gV += 1
            t4gE += 0
            t4gD += 0
            t4gS += parseInt(input4x1g_4.value)
            t4gS -= parseInt(input4x1g_1.value)
            t4gGP += parseInt(input4x1g_4.value)
            t4gGC += parseInt(input4x1g_1.value)
            
            t1gP += 0
            t1gJ += 1
            t1gV += 0
            t1gE += 0
            t1gD += 1
            t1gS += parseInt(input4x1g_1.value)
            t1gS -= parseInt(input4x1g_4.value)
            t1gGP += parseInt(input4x1g_1.value)
            t1gGC += parseInt(input4x1g_4.value)
        }
        else if(input4x1g_4.value < input4x1g_1.value){
            t4gP += 0
            t4gJ += 1
            t4gV += 0
            t4gE += 0
            t4gD += 1
            t4gS += parseInt(input4x1g_4.value)
            t4gS -= parseInt(input4x1g_1.value)
            t4gGP += parseInt(input4x1g_4.value)
            t4gGC += parseInt(input4x1g_1.value)
            
            t1gP += 3
            t1gJ += 1
            t1gV += 1
            t1gE += 0
            t1gD += 0
            t1gS += parseInt(input4x1g_1.value)
            t1gS -= parseInt(input4x1g_4.value)
            t1gGP += parseInt(input4x1g_1.value)
            t1gGC += parseInt(input4x1g_4.value)
        }
        else if(input4x1g_4.value == input4x1g_1.value){
            t4gP += 1
            t4gJ += 1
            t4gV += 0
            t4gE += 1
            t4gD += 0
            t4gS += parseInt(input4x1g_4.value)
            t4gS -= parseInt(input4x1g_1.value)
            t4gGP += parseInt(input4x1g_4.value)
            t4gGC += parseInt(input4x1g_1.value)
            
            t1gP += 1
            t1gJ += 1
            t1gV += 0
            t1gE += 1
            t1gD += 0
            t1gS += parseInt(input4x1g_1.value)
            t1gS -= parseInt(input4x1g_4.value)
            t1gGP += parseInt(input4x1g_1.value)
            t1gGC += parseInt(input4x1g_4.value)
        }
    }
    if(input4x2g_4.value != "" && input4x2g_2.value != ""){
        if(input4x2g_4.value > input4x2g_2.value){
            t4gP += 3
            t4gJ += 1
            t4gV += 1
            t4gE += 0
            t4gD += 0
            t4gS += parseInt(input4x2g_4.value)
            t4gS -= parseInt(input4x2g_2.value)
            t4gGP += parseInt(input4x2g_4.value)
            t4gGC += parseInt(input4x2g_2.value)
            
            t2gP += 0
            t2gJ += 1
            t2gV += 0
            t2gE += 0
            t2gD += 1
            t2gS += parseInt(input4x2g_2.value)
            t2gS -= parseInt(input4x2g_4.value)
            t2gGP += parseInt(input4x2g_2.value)
            t2gGC += parseInt(input4x2g_4.value)
        }
        else if(input4x2g_4.value < input4x2g_2.value){
            t4gP += 0
            t4gJ += 1
            t4gV += 0
            t4gE += 0
            t4gD += 1
            t4gS += parseInt(input4x2g_4.value)
            t4gS -= parseInt(input4x2g_2.value)
            t4gGP += parseInt(input4x2g_4.value)
            t4gGC += parseInt(input4x2g_2.value)
            
            t2gP += 3
            t2gJ += 1
            t2gV += 1
            t2gE += 0
            t2gD += 0
            t2gS += parseInt(input4x2g_2.value)
            t2gS -= parseInt(input4x2g_4.value)
            t2gGP += parseInt(input4x2g_2.value)
            t2gGC += parseInt(input4x2g_4.value)
        }
        else if(input4x2g_4.value == input4x2g_2.value){
            t4gP += 1
            t4gJ += 1
            t4gV += 0
            t4gE += 1
            t4gD += 0
            t4gS += parseInt(input4x2g_4.value)
            t4gS -= parseInt(input4x2g_2.value)
            t4gGP += parseInt(input4x2g_4.value)
            t4gGC += parseInt(input4x2g_2.value)
            
            t2gP += 1
            t2gJ += 1
            t2gV += 0
            t2gE += 1
            t2gD += 0
            t2gS += parseInt(input4x2g_2.value)
            t2gS -= parseInt(input4x2g_4.value)
            t2gGP += parseInt(input4x2g_2.value)
            t2gGC += parseInt(input4x2g_4.value)
        }
    }
    if(input1x3g_1.value != "" && input1x3g_3.value != ""){
        if(input1x3g_1.value > input1x3g_3.value){
            t1gP += 3
            t1gJ += 1
            t1gV += 1
            t1gE += 0
            t1gD += 0
            t1gS += parseInt(input1x3g_1.value)
            t1gS -= parseInt(input1x3g_3.value)
            t1gGP += parseInt(input1x3g_1.value)
            t1gGC += parseInt(input1x3g_3.value)
            
            t3gP += 0
            t3gJ += 1
            t3gV += 0
            t3gE += 0
            t3gD += 1
            t3gS += parseInt(input1x3g_3.value)
            t3gS -= parseInt(input1x3g_1.value)
            t3gGP += parseInt(input1x3g_3.value)
            t3gGC += parseInt(input1x3g_1.value)
        }
        else if(input1x3g_1.value < input1x3g_3.value){
            t1gP += 0
            t1gJ += 1
            t1gV += 0
            t1gE += 0
            t1gD += 1
            t1gS += parseInt(input1x3g_1.value)
            t1gS -= parseInt(input1x3g_3.value)
            t1gGP += parseInt(input1x3g_1.value)
            t1gGC += parseInt(input1x3g_3.value)
            
            t3gP += 3
            t3gJ += 1
            t3gV += 1
            t3gE += 0
            t3gD += 0
            t3gS += parseInt(input1x3g_3.value)
            t3gS -= parseInt(input1x3g_1.value)
            t3gGP += parseInt(input1x3g_3.value)
            t3gGC += parseInt(input1x3g_1.value)
        }
        else if(input1x3g_1.value == input1x3g_3.value){
            t1gP += 1
            t1gJ += 1
            t1gV += 0
            t1gE += 1
            t1gD += 0
            t1gS += parseInt(input1x3g_1.value)
            t1gS -= parseInt(input1x3g_3.value)
            t1gGP += parseInt(input1x3g_1.value)
            t1gGC += parseInt(input1x3g_3.value)
            
            t3gP += 1
            t3gJ += 1
            t3gV += 0
            t3gE += 1
            t3gD += 0
            t3gS += parseInt(input1x3g_3.value)
            t3gS -= parseInt(input1x3g_1.value)
            t3gGP += parseInt(input1x3g_3.value)
            t3gGC += parseInt(input1x3g_1.value)
        }
    }
    if(input3x4g_3.value != "" && input3x4g_4.value != ""){
        if(input3x4g_3.value > input3x4g_4.value){
            t3gP += 3
            t3gJ += 1
            t3gV += 1
            t3gE += 0
            t3gD += 0
            t3gS += parseInt(input3x4g_3.value)
            t3gS -= parseInt(input3x4g_4.value)
            t3gGP += parseInt(input3x4g_3.value)
            t3gGC += parseInt(input3x4g_4.value)
            
            t4gP += 0
            t4gJ += 1
            t4gV += 0
            t4gE += 0
            t4gD += 1
            t4gS += parseInt(input3x4g_4.value)
            t4gS -= parseInt(input3x4g_3.value)
            t4gGP += parseInt(input3x4g_4.value)
            t4gGC += parseInt(input3x4g_3.value)
        }
        else if(input3x4g_3.value < input3x4g_4.value){
            t3gP += 0
            t3gJ += 1
            t3gV += 0
            t3gE += 0
            t3gD += 1
            t3gS += parseInt(input3x4g_3.value)
            t3gS -= parseInt(input3x4g_4.value)
            t3gGP += parseInt(input3x4g_3.value)
            t3gGC += parseInt(input3x4g_4.value)
            
            t4gP += 3
            t4gJ += 1
            t4gV += 1
            t4gE += 0
            t4gD += 0
            t4gS += parseInt(input3x4g_4.value)
            t4gS -= parseInt(input3x4g_3.value)
            t4gGP += parseInt(input3x4g_4.value)
            t4gGC += parseInt(input3x4g_3.value)
        }
        else if(input3x4g_3.value == input3x4g_4.value){
            t3gP += 1
            t3gJ += 1
            t3gV += 0
            t3gE += 1
            t3gD += 0
            t3gS += parseInt(input3x4g_3.value)
            t3gS -= parseInt(input3x4g_4.value)
            t3gGP += parseInt(input3x4g_3.value)
            t3gGC += parseInt(input3x4g_4.value)
            
            t4gP += 1
            t4gJ += 1
            t4gV += 0
            t4gE += 1
            t4gD += 0
            t4gS += parseInt(input3x4g_4.value)
            t4gS -= parseInt(input3x4g_3.value)
            t4gGP += parseInt(input3x4g_4.value)
            t4gGC += parseInt(input3x4g_3.value)
        }
    }
    if(input2x1g_2.value != "" && input2x1g_1.value != ""){
        if(input2x1g_2.value > input2x1g_1.value){
            t2gP += 3
            t2gJ += 1
            t2gV += 1
            t2gE += 0
            t2gD += 0
            t2gS += parseInt(input2x1g_2.value)
            t2gS -= parseInt(input2x1g_1.value)
            t2gGP += parseInt(input2x1g_2.value)
            t2gGC += parseInt(input2x1g_1.value)
            
            t1gP += 0
            t1gJ += 1
            t1gV += 0
            t1gE += 0
            t1gD += 1
            t1gS += parseInt(input2x1g_1.value)
            t1gS -= parseInt(input2x1g_2.value)
            t1gGP += parseInt(input2x1g_1.value)
            t1gGC += parseInt(input2x1g_2.value)
        }
        else if(input2x1g_2.value < input2x1g_1.value){
            t2gP += 0
            t2gJ += 1
            t2gV += 0
            t2gE += 0
            t2gD += 1
            t2gS += parseInt(input2x1g_2.value)
            t2gS -= parseInt(input2x1g_1.value)
            t2gGP += parseInt(input2x1g_2.value)
            t2gGC += parseInt(input2x1g_1.value)
            
            t1gP += 3
            t1gJ += 1
            t1gV += 1
            t1gE += 0
            t1gD += 0
            t1gS += parseInt(input2x1g_1.value)
            t1gS -= parseInt(input2x1g_2.value)
            t1gGP += parseInt(input2x1g_1.value)
            t1gGC += parseInt(input2x1g_2.value)
        }
        else if(input2x1g_2.value == input2x1g_1.value){
            t2gP += 1
            t2gJ += 1
            t2gV += 0
            t2gE += 1
            t2gD += 0
            t2gS += parseInt(input2x1g_2.value)
            t2gS -= parseInt(input2x1g_1.value)
            t2gGP += parseInt(input2x1g_2.value)
            t2gGC += parseInt(input2x1g_1.value)
            
            t1gP += 1
            t1gJ += 1
            t1gV += 0
            t1gE += 1
            t1gD += 0
            t1gS += parseInt(input2x1g_1.value)
            t1gS -= parseInt(input2x1g_2.value)
            t1gGP += parseInt(input2x1g_1.value)
            t1gGC += parseInt(input2x1g_2.value)
        }
    }

    var grrgy_time1 = [time1g[1],
                        t1gP,
                        t1gJ,
                        t1gV,
                        t1gE,
                        t1gD,
                        t1gS,
                        t1gGP,
                        t1gGC
                    ]
    var grrgy_time2 = [time2g[1],
                        t2gP,
                        t2gJ,
                        t2gV,
                        t2gE,
                        t2gD,
                        t2gS,
                        t2gGP,
                        t2gGC
                    ]
    var grrgy_time3 = [time3g[1],
                        t3gP,
                        t3gJ,
                        t3gV,
                        t3gE,
                        t3gD,
                        t3gS,
                        t3gGP,
                        t3gGC
                    ]
    var grrgy_time4 = [time4g[1],
                        t4gP,
                        t4gJ,
                        t4gV,
                        t4gE,
                        t4gD,
                        t4gS,
                        t4gGP,
                        t4gGC
                    ]
    var mgtriz = [grrgy_time1, grrgy_time2, grrgy_time3, grrgy_time4]
    var mgtrizgjustgdg = ajuste(mgtriz)

    console.log(mgtrizgjustgdg)

    // CRIGNDO TIME 1 G
    var time1g_nome = document.querySelector("#time1g_nome")
    time1g_nome.textContent = " " + (mgtrizgjustgdg[0][0].toUpperCase())
    var time1g_img = document.querySelector("#time1g_img")
    time1g_img.src = mgtrizgjustgdg[0][0] + ".png"
    var time1g_P = document.querySelector("#time1g_P")
    time1g_P.textContent = mgtrizgjustgdg[0][1]
    var time1g_J = document.querySelector("#time1g_J")
    time1g_J.textContent = mgtrizgjustgdg[0][2]
    var time1g_V = document.querySelector("#time1g_V")
    time1g_V.textContent = mgtrizgjustgdg[0][3]
    var time1g_E = document.querySelector("#time1g_E")
    time1g_E.textContent = mgtrizgjustgdg[0][4]
    var time1g_D = document.querySelector("#time1g_D")
    time1g_D.textContent = mgtrizgjustgdg[0][5]
    var time1g_S = document.querySelector("#time1g_S")
    time1g_S.textContent = mgtrizgjustgdg[0][6]
    var time1g_GP = document.querySelector("#time1g_GP")
    time1g_GP.textContent = mgtrizgjustgdg[0][7]
    var time1g_GC = document.querySelector("#time1g_GC")
    time1g_GC.textContent = mgtrizgjustgdg[0][8]

    // CRIGNDO TIME 2 G

    var time2g_nome = document.querySelector("#time2g_nome")
    time2g_nome.textContent = " " + mgtrizgjustgdg[1][0].toUpperCase()
    var time2g_img = document.querySelector("#time2g_img")
    time2g_img.src = mgtrizgjustgdg[1][0] + ".png"
    var time2g_P = document.querySelector("#time2g_P")
    time2g_P.textContent = mgtrizgjustgdg[1][1]
    var time2g_J = document.querySelector("#time2g_J")
    time2g_J.textContent = mgtrizgjustgdg[1][2]
    var time2g_V = document.querySelector("#time2g_V")
    time2g_V.textContent = mgtrizgjustgdg[1][3]
    var time2g_E = document.querySelector("#time2g_E")
    time2g_E.textContent = mgtrizgjustgdg[1][4]
    var time2g_D = document.querySelector("#time2g_D")
    time2g_D.textContent = mgtrizgjustgdg[1][5]
    var time2g_S = document.querySelector("#time2g_S")
    time2g_S.textContent = mgtrizgjustgdg[1][6]
    var time2g_GP = document.querySelector("#time2g_GP")
    time2g_GP.textContent = mgtrizgjustgdg[1][7]
    var time2g_GC = document.querySelector("#time2g_GC")
    time2g_GC.textContent = mgtrizgjustgdg[1][8]

    // CRIGNDO TIME 3 G

    var time3g_nome = document.querySelector("#time3g_nome")
    time3g_nome.textContent = " " + mgtrizgjustgdg[2][0].toUpperCase()
    var time3g_img = document.querySelector("#time3g_img")
    time3g_img.src = mgtrizgjustgdg[2][0] + ".png"
    var time3g_P = document.querySelector("#time3g_P")
    time3g_P.textContent = mgtrizgjustgdg[2][1]
    var time3g_J = document.querySelector("#time3g_J")
    time3g_J.textContent = mgtrizgjustgdg[2][2]
    var time3g_V = document.querySelector("#time3g_V")
    time3g_V.textContent = mgtrizgjustgdg[2][3]
    var time3g_E = document.querySelector("#time3g_E")
    time3g_E.textContent = mgtrizgjustgdg[2][4]
    var time3g_D = document.querySelector("#time3g_D")
    time3g_D.textContent = mgtrizgjustgdg[2][5]
    var time3g_S = document.querySelector("#time3g_S")
    time3g_S.textContent = mgtrizgjustgdg[2][6]
    var time3g_GP = document.querySelector("#time3g_GP")
    time3g_GP.textContent = mgtrizgjustgdg[2][7]
    var time3g_GC = document.querySelector("#time3g_GC")
    time3g_GC.textContent = mgtrizgjustgdg[2][8]

    // CRIGNDO TIME 4 G

    var time4g_nome = document.querySelector("#time4g_nome")
    time4g_nome.textContent = " " + mgtrizgjustgdg[3][0].toUpperCase()
    var time4g_img = document.querySelector("#time4g_img")
    time4g_img.src = mgtrizgjustgdg[3][0] + ".png"
    var time4g_P = document.querySelector("#time4g_P")
    time4g_P.textContent = mgtrizgjustgdg[3][1]
    var time4g_J = document.querySelector("#time4g_J")
    time4g_J.textContent = mgtrizgjustgdg[3][2]
    var time4g_V = document.querySelector("#time4g_V")
    time4g_V.textContent = mgtrizgjustgdg[3][3]
    var time4g_E = document.querySelector("#time4g_E")
    time4g_E.textContent = mgtrizgjustgdg[3][4]
    var time4g_D = document.querySelector("#time4g_D")
    time4g_D.textContent = mgtrizgjustgdg[3][5]
    var time4g_S = document.querySelector("#time4g_S")
    time4g_S.textContent = mgtrizgjustgdg[3][6]
    var time4g_GP = document.querySelector("#time4g_GP")
    time4g_GP.textContent = mgtrizgjustgdg[3][7]
    var time4g_GC = document.querySelector("#time4g_GC")
    time4g_GC.textContent = mgtrizgjustgdg[3][8]

    var t1hP = 0
    var t1hJ = 0
    var t1hV = 0
    var t1hE = 0
    var t1hD = 0
    var t1hS = 0
    var t1hGP = 0
    var t1hGC = 0
    
    var t2hP = 0
    var t2hJ = 0
    var t2hV = 0
    var t2hE = 0
    var t2hD = 0
    var t2hS = 0
    var t2hGP = 0
    var t2hGC = 0

    var t3hP = 0
    var t3hJ = 0
    var t3hV = 0
    var t3hE = 0
    var t3hD = 0
    var t3hS = 0
    var t3hGP = 0
    var t3hGC = 0

    var t4hP = 0
    var t4hJ = 0
    var t4hV = 0
    var t4hE = 0
    var t4hD = 0
    var t4hS = 0
    var t4hGP = 0
    var t4hGC = 0

    if(input1x2h_1.value != "" && input1x2h_2.value != ""){
        if(input1x2h_1.value > input1x2h_2.value){
            t1hP += 3
            t1hJ += 1
            t1hV += 1
            t1hE += 0
            t1hD += 0
            t1hS += parseInt(input1x2h_1.value)
            t1hS -= parseInt(input1x2h_2.value)
            t1hGP += parseInt(input1x2h_1.value)
            t1hGC += parseInt(input1x2h_2.value)
            
            t2hP += 0
            t2hJ += 1
            t2hV += 0
            t2hE += 0
            t2hD += 1
            t2hS += parseInt(input1x2h_2.value)
            t2hS -= parseInt(input1x2h_1.value)
            t2hGP += parseInt(input1x2h_2.value)
            t2hGC += parseInt(input1x2h_1.value)
        }
        else if(input1x2h_1.value < input1x2h_2.value){
            t1hP += 0
            t1hJ += 1
            t1hV += 0
            t1hE += 0
            t1hD += 1
            t1hS += parseInt(input1x2h_1.value)
            t1hS -= parseInt(input1x2h_2.value)
            t1hGP += parseInt(input1x2h_1.value)
            t1hGC += parseInt(input1x2h_2.value)
            
            t2hP += 3
            t2hJ += 1
            t2hV += 1
            t2hE += 0
            t2hD += 0
            t2hS += parseInt(input1x2h_2.value)
            t2hS -= parseInt(input1x2h_1.value)
            t2hGP += parseInt(input1x2h_2.value)
            t2hGC += parseInt(input1x2h_1.value)
        }
        else if(input1x2h_1.value == input1x2h_2.value){
            t1hP += 1
            t1hJ += 1
            t1hV += 0
            t1hE += 1
            t1hD += 0
            t1hS += parseInt(input1x2h_1.value)
            t1hS -= parseInt(input1x2h_2.value)
            t1hGP += parseInt(input1x2h_1.value)
            t1hGC += parseInt(input1x2h_2.value)
            
            t2hP += 1
            t2hJ += 1
            t2hV += 0
            t2hE += 1
            t2hD += 0
            t2hS += parseInt(input1x2h_2.value)
            t2hS -= parseInt(input1x2h_1.value)
            t2hGP += parseInt(input1x2h_2.value)
            t2hGC += parseInt(input1x2h_1.value)
        }
    }
    if(input4x3h_4.value != "" && input4x3h_3.value != ""){
        if(input4x3h_4.value > input4x3h_3.value){
            t4hP += 3
            t4hJ += 1
            t4hV += 1
            t4hE += 0
            t4hD += 0
            t4hS += parseInt(input4x3h_4.value)
            t4hS -= parseInt(input4x3h_3.value)
            t4hGP += parseInt(input4x3h_4.value)
            t4hGC += parseInt(input4x3h_3.value)
            
            t3hP += 0
            t3hJ += 1
            t3hV += 0
            t3hE += 0
            t3hD += 1
            t3hS += parseInt(input4x3h_3.value)
            t3hS -= parseInt(input4x3h_4.value)
            t3hGP += parseInt(input4x3h_3.value)
            t3hGC += parseInt(input4x3h_4.value)
        }
        else if(input4x3h_4.value < input4x3h_3.value){
            t4hP += 0
            t4hJ += 1
            t4hV += 0
            t4hE += 0
            t4hD += 1
            t4hS += parseInt(input4x3h_4.value)
            t4hS -= parseInt(input4x3h_3.value)
            t4hGP += parseInt(input4x3h_4.value)
            t4hGC += parseInt(input4x3h_3.value)
            
            t3hP += 3
            t3hJ += 1
            t3hV += 1
            t3hE += 0
            t3hD += 0
            t3hS += parseInt(input4x3h_3.value)
            t3hS -= parseInt(input4x3h_4.value)
            t3hGP += parseInt(input4x3h_3.value)
            t3hGC += parseInt(input4x3h_4.value)
        }
        else if(input4x3h_4.value == input4x3h_3.value){
            t4hP += 1
            t4hJ += 1
            t4hV += 0
            t4hE += 1
            t4hD += 0
            t4hS += parseInt(input4x3h_4.value)
            t4hS -= parseInt(input4x3h_3.value)
            t4hGP += parseInt(input4x3h_4.value)
            t4hGC += parseInt(input4x3h_3.value)
            
            t3hP += 1
            t3hJ += 1
            t3hV += 0
            t3hE += 1
            t3hD += 0
            t3hS += parseInt(input4x3h_3.value)
            t3hS -= parseInt(input4x3h_4.value)
            t3hGP += parseInt(input4x3h_3.value)
            t3hGC += parseInt(input4x3h_4.value)
        }
    }
    if(input3x1h_3.value != "" && input3x1h_1.value != ""){
        if(input3x1h_3.value > input3x1h_1.value){
            t3hP += 3
            t3hJ += 1
            t3hV += 1
            t3hE += 0
            t3hD += 0
            t3hS += parseInt(input3x1h_3.value)
            t3hS -= parseInt(input3x1h_1.value)
            t3hGP += parseInt(input3x1h_3.value)
            t3hGC += parseInt(input3x1h_1.value)
            
            t1hP += 0
            t1hJ += 1
            t1hV += 0
            t1hE += 0
            t1hD += 1
            t1hS += parseInt(input3x1h_1.value)
            t1hS -= parseInt(input3x1h_3.value)
            t1hGP += parseInt(input3x1h_1.value)
            t1hGC += parseInt(input3x1h_3.value)
        }
        else if(input3x1h_3.value < input3x1h_1.value){
            t3hP += 0
            t3hJ += 1
            t3hV += 0
            t3hE += 0
            t3hD += 1
            t3hS += parseInt(input3x1h_3.value)
            t3hS -= parseInt(input3x1h_1.value)
            t3hGP += parseInt(input3x1h_3.value)
            t3hGC += parseInt(input3x1h_1.value)
            
            t1hP += 3
            t1hJ += 1
            t1hV += 1
            t1hE += 0
            t1hD += 0
            t1hS += parseInt(input3x1h_1.value)
            t1hS -= parseInt(input3x1h_3.value)
            t1hGP += parseInt(input3x1h_1.value)
            t1hGC += parseInt(input3x1h_3.value)
        }
        else if(input3x1h_3.value == input3x1h_1.value){
            t3hP += 1
            t3hJ += 1
            t3hV += 0
            t3hE += 1
            t3hD += 0
            t3hS += parseInt(input3x1h_3.value)
            t3hS -= parseInt(input3x1h_1.value)
            t3hGP += parseInt(input3x1h_3.value)
            t3hGC += parseInt(input3x1h_1.value)
            
            t1hP += 1
            t1hJ += 1
            t1hV += 0
            t1hE += 1
            t1hD += 0
            t1hS += parseInt(input3x1h_1.value)
            t1hS -= parseInt(input3x1h_3.value)
            t1hGP += parseInt(input3x1h_1.value)
            t1hGC += parseInt(input3x1h_3.value)
        }
    }
    if(input2x4h_2.value != "" && input2x4h_4.value != ""){
        if(input2x4h_2.value > input2x4h_4.value){
            t2hP += 3
            t2hJ += 1
            t2hV += 1
            t2hE += 0
            t2hD += 0
            t2hS += parseInt(input2x4h_2.value)
            t2hS -= parseInt(input2x4h_4.value)
            t2hGP += parseInt(input2x4h_2.value)
            t2hGC += parseInt(input2x4h_4.value)
            
            t4hP += 0
            t4hJ += 1
            t4hV += 0
            t4hE += 0
            t4hD += 1
            t4hS += parseInt(input2x4h_4.value)
            t4hS -= parseInt(input2x4h_2.value)
            t4hGP += parseInt(input2x4h_4.value)
            t4hGC += parseInt(input2x4h_2.value)
        }
        else if(input2x4h_2.value < input2x4h_4.value){
            t2hP += 0
            t2hJ += 1
            t2hV += 0
            t2hE += 0
            t2hD += 1
            t2hS += parseInt(input2x4h_2.value)
            t2hS -= parseInt(input2x4h_4.value)
            t2hGP += parseInt(input2x4h_2.value)
            t2hGC += parseInt(input2x4h_4.value)
            
            t4hP += 3
            t4hJ += 1
            t4hV += 1
            t4hE += 0
            t4hD += 0
            t4hS += parseInt(input2x4h_4.value)
            t4hS -= parseInt(input2x4h_2.value)
            t4hGP += parseInt(input2x4h_4.value)
            t4hGC += parseInt(input2x4h_2.value)
        }
        else if(input2x4h_2.value == input2x4h_4.value){
            t2hP += 1
            t2hJ += 1
            t2hV += 0
            t2hE += 1
            t2hD += 0
            t2hS += parseInt(input2x4h_2.value)
            t2hS -= parseInt(input2x4h_4.value)
            t2hGP += parseInt(input2x4h_2.value)
            t2hGC += parseInt(input2x4h_4.value)
            
            t4hP += 1
            t4hJ += 1
            t4hV += 0
            t4hE += 1
            t4hD += 0
            t4hS += parseInt(input2x4h_4.value)
            t4hS -= parseInt(input2x4h_2.value)
            t4hGP += parseInt(input2x4h_4.value)
            t4hGC += parseInt(input2x4h_2.value)
        }
    }
    if(input1x4h_1.value != "" && input1x4h_4.value != ""){
        if(input1x4h_1.value > input1x4h_4.value){
            t1hP += 3
            t1hJ += 1
            t1hV += 1
            t1hE += 0
            t1hD += 0
            t1hS += parseInt(input1x4h_1.value)
            t1hS -= parseInt(input1x4h_4.value)
            t1hGP += parseInt(input1x4h_1.value)
            t1hGC += parseInt(input1x4h_4.value)
            
            t4hP += 0
            t4hJ += 1
            t4hV += 0
            t4hE += 0
            t4hD += 1
            t4hS += parseInt(input1x4h_4.value)
            t4hS -= parseInt(input1x4h_1.value)
            t4hGP += parseInt(input1x4h_4.value)
            t4hGC += parseInt(input1x4h_1.value)
        }
        else if(input1x4h_1.value < input1x4h_4.value){
            t1hP += 0
            t1hJ += 1
            t1hV += 0
            t1hE += 0
            t1hD += 1
            t1hS += parseInt(input1x4h_1.value)
            t1hS -= parseInt(input1x4h_4.value)
            t1hGP += parseInt(input1x4h_1.value)
            t1hGC += parseInt(input1x4h_4.value)
            
            t4hP += 3
            t4hJ += 1
            t4hV += 1
            t4hE += 0
            t4hD += 0
            t4hS += parseInt(input1x4h_4.value)
            t4hS -= parseInt(input1x4h_1.value)
            t4hGP += parseInt(input1x4h_4.value)
            t4hGC += parseInt(input1x4h_1.value)
        }
        else if(input1x4h_1.value == input1x4h_4.value){
            t1hP += 1
            t1hJ += 1
            t1hV += 0
            t1hE += 1
            t1hD += 0
            t1hS += parseInt(input1x4h_1.value)
            t1hS -= parseInt(input1x4h_4.value)
            t1hGP += parseInt(input1x4h_1.value)
            t1hGC += parseInt(input1x4h_4.value)
            
            t4hP += 1
            t4hJ += 1
            t4hV += 0
            t4hE += 1
            t4hD += 0
            t4hS += parseInt(input1x4h_4.value)
            t4hS -= parseInt(input1x4h_1.value)
            t4hGP += parseInt(input1x4h_4.value)
            t4hGC += parseInt(input1x4h_1.value)
        }
    }
    if(input2x3h_2.value != "" && input2x3h_3.value != ""){
        if(input2x3h_2.value > input2x3h_3.value){
            t2hP += 3
            t2hJ += 1
            t2hV += 1
            t2hE += 0
            t2hD += 0
            t2hS += parseInt(input2x3h_2.value)
            t2hS -= parseInt(input2x3h_3.value)
            t2hGP += parseInt(input2x3h_2.value)
            t2hGC += parseInt(input2x3h_3.value)
            
            t3hP += 0
            t3hJ += 1
            t3hV += 0
            t3hE += 0
            t3hD += 1
            t3hS += parseInt(input2x3h_3.value)
            t3hS -= parseInt(input2x3h_2.value)
            t3hGP += parseInt(input2x3h_3.value)
            t3hGC += parseInt(input2x3h_2.value)
        }
        else if(input2x3h_2.value < input2x3h_3.value){
            t2hP += 0
            t2hJ += 1
            t2hV += 0
            t2hE += 0
            t2hD += 1
            t2hS += parseInt(input2x3h_2.value)
            t2hS -= parseInt(input2x3h_3.value)
            t2hGP += parseInt(input2x3h_2.value)
            t2hGC += parseInt(input2x3h_3.value)
            
            t3hP += 3
            t3hJ += 1
            t3hV += 1
            t3hE += 0
            t3hD += 0
            t3hS += parseInt(input2x3h_3.value)
            t3hS -= parseInt(input2x3h_2.value)
            t3hGP += parseInt(input2x3h_3.value)
            t3hGC += parseInt(input2x3h_2.value)
        }
        else if(input2x3h_2.value == input2x3h_3.value){
            t2hP += 1
            t2hJ += 1
            t2hV += 0
            t2hE += 1
            t2hD += 0
            t2hS += parseInt(input2x3h_2.value)
            t2hS -= parseInt(input2x3h_3.value)
            t2hGP += parseInt(input2x3h_2.value)
            t2hGC += parseInt(input2x3h_3.value)
            
            t3hP += 1
            t3hJ += 1
            t3hV += 0
            t3hE += 1
            t3hD += 0
            t3hS += parseInt(input2x3h_3.value)
            t3hS -= parseInt(input2x3h_2.value)
            t3hGP += parseInt(input2x3h_3.value)
            t3hGC += parseInt(input2x3h_2.value)
        }
    }
    if(input3x2h_3.value != "" && input3x2h_2.value != ""){
        if(input3x2h_3.value > input3x2h_2.value){
            t3hP += 3
            t3hJ += 1
            t3hV += 1
            t3hE += 0
            t3hD += 0
            t3hS += parseInt(input3x2h_3.value)
            t3hS -= parseInt(input3x2h_2.value)
            t3hGP += parseInt(input3x2h_3.value)
            t3hGC += parseInt(input3x2h_2.value)
            
            t2hP += 0
            t2hJ += 1
            t2hV += 0
            t2hE += 0
            t2hD += 1
            t2hS += parseInt(input3x2h_2.value)
            t2hS -= parseInt(input3x2h_3.value)
            t2hGP += parseInt(input3x2h_2.value)
            t2hGC += parseInt(input3x2h_3.value)
        }
        else if(input3x2h_3.value < input3x2h_2.value){
            t3hP += 0
            t3hJ += 1
            t3hV += 0
            t3hE += 0
            t3hD += 1
            t3hS += parseInt(input3x2h_3.value)
            t3hS -= parseInt(input3x2h_2.value)
            t3hGP += parseInt(input3x2h_3.value)
            t3hGC += parseInt(input3x2h_2.value)
        
            t2hP += 3
            t2hJ += 1
            t2hV += 1
            t2hE += 0
            t2hD += 0
            t2hS += parseInt(input3x2h_2.value)
            t2hS -= parseInt(input3x2h_3.value)
            t2hGP += parseInt(input3x2h_2.value)
            t2hGC += parseInt(input3x2h_3.value)
        }
        else if(input3x2h_3.value == input3x2h_2.value){
            t3hP += 1
            t3hJ += 1
            t3hV += 0
            t3hE += 1
            t3hD += 0
            t3hS += parseInt(input3x2h_3.value)
            t3hS -= parseInt(input3x2h_2.value)
            t3hGP += parseInt(input3x2h_3.value)
            t3hGC += parseInt(input3x2h_2.value)
            
            t2hP += 1
            t2hJ += 1
            t2hV += 0
            t2hE += 1
            t2hD += 0
            t2hS += parseInt(input3x2h_2.value)
            t2hS -= parseInt(input3x2h_3.value)
            t2hGP += parseInt(input3x2h_2.value)
            t2hGC += parseInt(input3x2h_3.value)
        }
    }
    if(input4x1h_4.value != "" && input4x1h_1.value != ""){
        if(input4x1h_4.value > input4x1h_1.value){
            t4hP += 3
            t4hJ += 1
            t4hV += 1
            t4hE += 0
            t4hD += 0
            t4hS += parseInt(input4x1h_4.value)
            t4hS -= parseInt(input4x1h_1.value)
            t4hGP += parseInt(input4x1h_4.value)
            t4hGC += parseInt(input4x1h_1.value)
            
            t1hP += 0
            t1hJ += 1
            t1hV += 0
            t1hE += 0
            t1hD += 1
            t1hS += parseInt(input4x1h_1.value)
            t1hS -= parseInt(input4x1h_4.value)
            t1hGP += parseInt(input4x1h_1.value)
            t1hGC += parseInt(input4x1h_4.value)
        }
        else if(input4x1h_4.value < input4x1h_1.value){
            t4hP += 0
            t4hJ += 1
            t4hV += 0
            t4hE += 0
            t4hD += 1
            t4hS += parseInt(input4x1h_4.value)
            t4hS -= parseInt(input4x1h_1.value)
            t4hGP += parseInt(input4x1h_4.value)
            t4hGC += parseInt(input4x1h_1.value)
            
            t1hP += 3
            t1hJ += 1
            t1hV += 1
            t1hE += 0
            t1hD += 0
            t1hS += parseInt(input4x1h_1.value)
            t1hS -= parseInt(input4x1h_4.value)
            t1hGP += parseInt(input4x1h_1.value)
            t1hGC += parseInt(input4x1h_4.value)
        }
        else if(input4x1h_4.value == input4x1h_1.value){
            t4hP += 1
            t4hJ += 1
            t4hV += 0
            t4hE += 1
            t4hD += 0
            t4hS += parseInt(input4x1h_4.value)
            t4hS -= parseInt(input4x1h_1.value)
            t4hGP += parseInt(input4x1h_4.value)
            t4hGC += parseInt(input4x1h_1.value)
            
            t1hP += 1
            t1hJ += 1
            t1hV += 0
            t1hE += 1
            t1hD += 0
            t1hS += parseInt(input4x1h_1.value)
            t1hS -= parseInt(input4x1h_4.value)
            t1hGP += parseInt(input4x1h_1.value)
            t1hGC += parseInt(input4x1h_4.value)
        }
    }
    if(input4x2h_4.value != "" && input4x2h_2.value != ""){
        if(input4x2h_4.value > input4x2h_2.value){
            t4hP += 3
            t4hJ += 1
            t4hV += 1
            t4hE += 0
            t4hD += 0
            t4hS += parseInt(input4x2h_4.value)
            t4hS -= parseInt(input4x2h_2.value)
            t4hGP += parseInt(input4x2h_4.value)
            t4hGC += parseInt(input4x2h_2.value)
            
            t2hP += 0
            t2hJ += 1
            t2hV += 0
            t2hE += 0
            t2hD += 1
            t2hS += parseInt(input4x2h_2.value)
            t2hS -= parseInt(input4x2h_4.value)
            t2hGP += parseInt(input4x2h_2.value)
            t2hGC += parseInt(input4x2h_4.value)
        }
        else if(input4x2h_4.value < input4x2h_2.value){
            t4hP += 0
            t4hJ += 1
            t4hV += 0
            t4hE += 0
            t4hD += 1
            t4hS += parseInt(input4x2h_4.value)
            t4hS -= parseInt(input4x2h_2.value)
            t4hGP += parseInt(input4x2h_4.value)
            t4hGC += parseInt(input4x2h_2.value)
            
            t2hP += 3
            t2hJ += 1
            t2hV += 1
            t2hE += 0
            t2hD += 0
            t2hS += parseInt(input4x2h_2.value)
            t2hS -= parseInt(input4x2h_4.value)
            t2hGP += parseInt(input4x2h_2.value)
            t2hGC += parseInt(input4x2h_4.value)
        }
        else if(input4x2h_4.value == input4x2h_2.value){
            t4hP += 1
            t4hJ += 1
            t4hV += 0
            t4hE += 1
            t4hD += 0
            t4hS += parseInt(input4x2h_4.value)
            t4hS -= parseInt(input4x2h_2.value)
            t4hGP += parseInt(input4x2h_4.value)
            t4hGC += parseInt(input4x2h_2.value)
            
            t2hP += 1
            t2hJ += 1
            t2hV += 0
            t2hE += 1
            t2hD += 0
            t2hS += parseInt(input4x2h_2.value)
            t2hS -= parseInt(input4x2h_4.value)
            t2hGP += parseInt(input4x2h_2.value)
            t2hGC += parseInt(input4x2h_4.value)
        }
    }
    if(input1x3h_1.value != "" && input1x3h_3.value != ""){
        if(input1x3h_1.value > input1x3h_3.value){
            t1hP += 3
            t1hJ += 1
            t1hV += 1
            t1hE += 0
            t1hD += 0
            t1hS += parseInt(input1x3h_1.value)
            t1hS -= parseInt(input1x3h_3.value)
            t1hGP += parseInt(input1x3h_1.value)
            t1hGC += parseInt(input1x3h_3.value)
            
            t3hP += 0
            t3hJ += 1
            t3hV += 0
            t3hE += 0
            t3hD += 1
            t3hS += parseInt(input1x3h_3.value)
            t3hS -= parseInt(input1x3h_1.value)
            t3hGP += parseInt(input1x3h_3.value)
            t3hGC += parseInt(input1x3h_1.value)
        }
        else if(input1x3h_1.value < input1x3h_3.value){
            t1hP += 0
            t1hJ += 1
            t1hV += 0
            t1hE += 0
            t1hD += 1
            t1hS += parseInt(input1x3h_1.value)
            t1hS -= parseInt(input1x3h_3.value)
            t1hGP += parseInt(input1x3h_1.value)
            t1hGC += parseInt(input1x3h_3.value)
            
            t3hP += 3
            t3hJ += 1
            t3hV += 1
            t3hE += 0
            t3hD += 0
            t3hS += parseInt(input1x3h_3.value)
            t3hS -= parseInt(input1x3h_1.value)
            t3hGP += parseInt(input1x3h_3.value)
            t3hGC += parseInt(input1x3h_1.value)
        }
        else if(input1x3h_1.value == input1x3h_3.value){
            t1hP += 1
            t1hJ += 1
            t1hV += 0
            t1hE += 1
            t1hD += 0
            t1hS += parseInt(input1x3h_1.value)
            t1hS -= parseInt(input1x3h_3.value)
            t1hGP += parseInt(input1x3h_1.value)
            t1hGC += parseInt(input1x3h_3.value)
            
            t3hP += 1
            t3hJ += 1
            t3hV += 0
            t3hE += 1
            t3hD += 0
            t3hS += parseInt(input1x3h_3.value)
            t3hS -= parseInt(input1x3h_1.value)
            t3hGP += parseInt(input1x3h_3.value)
            t3hGC += parseInt(input1x3h_1.value)
        }
    }
    if(input3x4h_3.value != "" && input3x4h_4.value != ""){
        if(input3x4h_3.value > input3x4h_4.value){
            t3hP += 3
            t3hJ += 1
            t3hV += 1
            t3hE += 0
            t3hD += 0
            t3hS += parseInt(input3x4h_3.value)
            t3hS -= parseInt(input3x4h_4.value)
            t3hGP += parseInt(input3x4h_3.value)
            t3hGC += parseInt(input3x4h_4.value)
            
            t4hP += 0
            t4hJ += 1
            t4hV += 0
            t4hE += 0
            t4hD += 1
            t4hS += parseInt(input3x4h_4.value)
            t4hS -= parseInt(input3x4h_3.value)
            t4hGP += parseInt(input3x4h_4.value)
            t4hGC += parseInt(input3x4h_3.value)
        }
        else if(input3x4h_3.value < input3x4h_4.value){
            t3hP += 0
            t3hJ += 1
            t3hV += 0
            t3hE += 0
            t3hD += 1
            t3hS += parseInt(input3x4h_3.value)
            t3hS -= parseInt(input3x4h_4.value)
            t3hGP += parseInt(input3x4h_3.value)
            t3hGC += parseInt(input3x4h_4.value)
            
            t4hP += 3
            t4hJ += 1
            t4hV += 1
            t4hE += 0
            t4hD += 0
            t4hS += parseInt(input3x4h_4.value)
            t4hS -= parseInt(input3x4h_3.value)
            t4hGP += parseInt(input3x4h_4.value)
            t4hGC += parseInt(input3x4h_3.value)
        }
        else if(input3x4h_3.value == input3x4h_4.value){
            t3hP += 1
            t3hJ += 1
            t3hV += 0
            t3hE += 1
            t3hD += 0
            t3hS += parseInt(input3x4h_3.value)
            t3hS -= parseInt(input3x4h_4.value)
            t3hGP += parseInt(input3x4h_3.value)
            t3hGC += parseInt(input3x4h_4.value)
            
            t4hP += 1
            t4hJ += 1
            t4hV += 0
            t4hE += 1
            t4hD += 0
            t4hS += parseInt(input3x4h_4.value)
            t4hS -= parseInt(input3x4h_3.value)
            t4hGP += parseInt(input3x4h_4.value)
            t4hGC += parseInt(input3x4h_3.value)
        }
    }
    if(input2x1h_2.value != "" && input2x1h_1.value != ""){
        if(input2x1h_2.value > input2x1h_1.value){
            t2hP += 3
            t2hJ += 1
            t2hV += 1
            t2hE += 0
            t2hD += 0
            t2hS += parseInt(input2x1h_2.value)
            t2hS -= parseInt(input2x1h_1.value)
            t2hGP += parseInt(input2x1h_2.value)
            t2hGC += parseInt(input2x1h_1.value)
            
            t1hP += 0
            t1hJ += 1
            t1hV += 0
            t1hE += 0
            t1hD += 1
            t1hS += parseInt(input2x1h_1.value)
            t1hS -= parseInt(input2x1h_2.value)
            t1hGP += parseInt(input2x1h_1.value)
            t1hGC += parseInt(input2x1h_2.value)
        }
        else if(input2x1h_2.value < input2x1h_1.value){
            t2hP += 0
            t2hJ += 1
            t2hV += 0
            t2hE += 0
            t2hD += 1
            t2hS += parseInt(input2x1h_2.value)
            t2hS -= parseInt(input2x1h_1.value)
            t2hGP += parseInt(input2x1h_2.value)
            t2hGC += parseInt(input2x1h_1.value)
            
            t1hP += 3
            t1hJ += 1
            t1hV += 1
            t1hE += 0
            t1hD += 0
            t1hS += parseInt(input2x1h_1.value)
            t1hS -= parseInt(input2x1h_2.value)
            t1hGP += parseInt(input2x1h_1.value)
            t1hGC += parseInt(input2x1h_2.value)
        }
        else if(input2x1h_2.value == input2x1h_1.value){
            t2hP += 1
            t2hJ += 1
            t2hV += 0
            t2hE += 1
            t2hD += 0
            t2hS += parseInt(input2x1h_2.value)
            t2hS -= parseInt(input2x1h_1.value)
            t2hGP += parseInt(input2x1h_2.value)
            t2hGC += parseInt(input2x1h_1.value)
            
            t1hP += 1
            t1hJ += 1
            t1hV += 0
            t1hE += 1
            t1hD += 0
            t1hS += parseInt(input2x1h_1.value)
            t1hS -= parseInt(input2x1h_2.value)
            t1hGP += parseInt(input2x1h_1.value)
            t1hGC += parseInt(input2x1h_2.value)
        }
    }

    var hrrhy_time1 = [time1h[1],
                        t1hP,
                        t1hJ,
                        t1hV,
                        t1hE,
                        t1hD,
                        t1hS,
                        t1hGP,
                        t1hGC
                    ]
    var hrrhy_time2 = [time2h[1],
                        t2hP,
                        t2hJ,
                        t2hV,
                        t2hE,
                        t2hD,
                        t2hS,
                        t2hGP,
                        t2hGC
                    ]
    var hrrhy_time3 = [time3h[1],
                        t3hP,
                        t3hJ,
                        t3hV,
                        t3hE,
                        t3hD,
                        t3hS,
                        t3hGP,
                        t3hGC
                    ]
    var hrrhy_time4 = [time4h[1],
                        t4hP,
                        t4hJ,
                        t4hV,
                        t4hE,
                        t4hD,
                        t4hS,
                        t4hGP,
                        t4hGC
                    ]
    var mhtriz = [hrrhy_time1, hrrhy_time2, hrrhy_time3, hrrhy_time4]
    var mhtrizhjusthdh = ajuste(mhtriz)

    console.log(mhtrizhjusthdh)

    // CRIHNDO TIME 1 H
    var time1h_nome = document.querySelector("#time1h_nome")
    time1h_nome.textContent = " " + (mhtrizhjusthdh[0][0].toUpperCase())
    var time1h_img = document.querySelector("#time1h_img")
    time1h_img.src = mhtrizhjusthdh[0][0] + ".png"
    var time1h_P = document.querySelector("#time1h_P")
    time1h_P.textContent = mhtrizhjusthdh[0][1]
    var time1h_J = document.querySelector("#time1h_J")
    time1h_J.textContent = mhtrizhjusthdh[0][2]
    var time1h_V = document.querySelector("#time1h_V")
    time1h_V.textContent = mhtrizhjusthdh[0][3]
    var time1h_E = document.querySelector("#time1h_E")
    time1h_E.textContent = mhtrizhjusthdh[0][4]
    var time1h_D = document.querySelector("#time1h_D")
    time1h_D.textContent = mhtrizhjusthdh[0][5]
    var time1h_S = document.querySelector("#time1h_S")
    time1h_S.textContent = mhtrizhjusthdh[0][6]
    var time1h_GP = document.querySelector("#time1h_GP")
    time1h_GP.textContent = mhtrizhjusthdh[0][7]
    var time1h_GC = document.querySelector("#time1h_GC")
    time1h_GC.textContent = mhtrizhjusthdh[0][8]

    // CRIHNDO TIME 2 H

    var time2h_nome = document.querySelector("#time2h_nome")
    time2h_nome.textContent = " " + mhtrizhjusthdh[1][0].toUpperCase()
    var time2h_img = document.querySelector("#time2h_img")
    time2h_img.src = mhtrizhjusthdh[1][0] + ".png"
    var time2h_P = document.querySelector("#time2h_P")
    time2h_P.textContent = mhtrizhjusthdh[1][1]
    var time2h_J = document.querySelector("#time2h_J")
    time2h_J.textContent = mhtrizhjusthdh[1][2]
    var time2h_V = document.querySelector("#time2h_V")
    time2h_V.textContent = mhtrizhjusthdh[1][3]
    var time2h_E = document.querySelector("#time2h_E")
    time2h_E.textContent = mhtrizhjusthdh[1][4]
    var time2h_D = document.querySelector("#time2h_D")
    time2h_D.textContent = mhtrizhjusthdh[1][5]
    var time2h_S = document.querySelector("#time2h_S")
    time2h_S.textContent = mhtrizhjusthdh[1][6]
    var time2h_GP = document.querySelector("#time2h_GP")
    time2h_GP.textContent = mhtrizhjusthdh[1][7]
    var time2h_GC = document.querySelector("#time2h_GC")
    time2h_GC.textContent = mhtrizhjusthdh[1][8]

    // CRIHNDO TIME 3 H

    var time3h_nome = document.querySelector("#time3h_nome")
    time3h_nome.textContent = " " + mhtrizhjusthdh[2][0].toUpperCase()
    var time3h_img = document.querySelector("#time3h_img")
    time3h_img.src = mhtrizhjusthdh[2][0] + ".png"
    var time3h_P = document.querySelector("#time3h_P")
    time3h_P.textContent = mhtrizhjusthdh[2][1]
    var time3h_J = document.querySelector("#time3h_J")
    time3h_J.textContent = mhtrizhjusthdh[2][2]
    var time3h_V = document.querySelector("#time3h_V")
    time3h_V.textContent = mhtrizhjusthdh[2][3]
    var time3h_E = document.querySelector("#time3h_E")
    time3h_E.textContent = mhtrizhjusthdh[2][4]
    var time3h_D = document.querySelector("#time3h_D")
    time3h_D.textContent = mhtrizhjusthdh[2][5]
    var time3h_S = document.querySelector("#time3h_S")
    time3h_S.textContent = mhtrizhjusthdh[2][6]
    var time3h_GP = document.querySelector("#time3h_GP")
    time3h_GP.textContent = mhtrizhjusthdh[2][7]
    var time3h_GC = document.querySelector("#time3h_GC")
    time3h_GC.textContent = mhtrizhjusthdh[2][8]

    // CRIHNDO TIME 4 H

    var time4h_nome = document.querySelector("#time4h_nome")
    time4h_nome.textContent = " " + mhtrizhjusthdh[3][0].toUpperCase()
    var time4h_img = document.querySelector("#time4h_img")
    time4h_img.src = mhtrizhjusthdh[3][0] + ".png"
    var time4h_P = document.querySelector("#time4h_P")
    time4h_P.textContent = mhtrizhjusthdh[3][1]
    var time4h_J = document.querySelector("#time4h_J")
    time4h_J.textContent = mhtrizhjusthdh[3][2]
    var time4h_V = document.querySelector("#time4h_V")
    time4h_V.textContent = mhtrizhjusthdh[3][3]
    var time4h_E = document.querySelector("#time4h_E")
    time4h_E.textContent = mhtrizhjusthdh[3][4]
    var time4h_D = document.querySelector("#time4h_D")
    time4h_D.textContent = mhtrizhjusthdh[3][5]
    var time4h_S = document.querySelector("#time4h_S")
    time4h_S.textContent = mhtrizhjusthdh[3][6]
    var time4h_GP = document.querySelector("#time4h_GP")
    time4h_GP.textContent = mhtrizhjusthdh[3][7]
    var time4h_GC = document.querySelector("#time4h_GC")
    time4h_GC.textContent = mhtrizhjusthdh[3][8]

});