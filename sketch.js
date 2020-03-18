        var a = 34; 
        var b = 63; 
        var c;
        var nombres = {
            estudiantes: ["Camila Azócar", "María Paz Concha", "Olga F. Vio", "Trinidad González", "Matías Hagen", "María Francisca Hepp", "María Eliana Infante", "Magdalena Labarca", "Elsa Mora", "Vanessa Müller", "Jana Müller", "Muriel Muñoz", "María Trinidad Noriega", "Rosario Olivares", "Amparo Ortúzar", "Valeria Parraguéz", "Francisco Pezoa", "Francisca Purcell", "Martina Rivas", "Pilar Saavedra", "Lisa Saez", "David Sánchez", "Cecilia Soto", "María Elisa Valdés", "Francisca Vial", "María José Villasante"],
            profesor: "Felipe Cortez"
        }

        function setup() {
            createCanvas(windowWidth, windowHeight).position(0, 0).style('z-index', -1);
            //modificar lo siguiente para que aparezca su nombre y apellido, con consulta a la variable nombres
            document.getElementsByTagName("h1")[0].append(nombres.estudiantes[8] + " en cuarentena");
            //modificar el siguiente mensaje
            console.log
        }

        function draw() {
            colorMode(HSB, 360, 100, 100);
            fill(random(b-30, b), 100, 100);
            noStroke();
            c = a * random(1, 5);
            ellipse(mouseX, mouseY, c, c);
        }

        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);
        }

        function mouseClicked() {
            if (b === 47) {
                b = 780;
            } else {
                b = 75;
