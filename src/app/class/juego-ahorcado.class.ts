
export type EdoGame = 'gano'|'Perdio'|'Jugando'

export class AhorcadoAPP {
    palabra: string; //La palabra a adivinar
    letrasIngresadas: string[]; //Letras que el usuario ya ingreso
    intentosMaximos: number; //Cantidad máxima de intentos
    intentosActuales: number; //Cantidad de intentos actuales

    constructor(palabra: string, intentosMaximos: number) {
        this.palabra = palabra.toLocaleUpperCase();
        this.letrasIngresadas = [];
        this.intentosMaximos = intentosMaximos;
        this.intentosActuales = 0;
    }
    get palabraOculta(): string {
        let resultado = '';
        //Palabra = 'PERRO'
        for (let i = 0; i < this.palabra.length; i++) {
            let letra = this.palabra[i];
            if (this.letrasIngresadas.includes(letra)) {
                resultado += letra;
            } else {
                resultado += ' _ ';
            }
            

        }
        return resultado;

    }

    get estado(): EdoGame {
        if (this.intentosActuales >= this.intentosMaximos) {
            return 'Perdio';
        }
        if (this.laPalabraFueEncontrada()) {
            return 'gano';
        }
        return 'Jugando';

    }

    laPalabraFueEncontrada(): boolean {
        for (let j = 0;j < this.palabra.length; j++){
            let letra = this.palabra[j];
            if (!this.letrasIngresadas.includes(letra)){
                return false;
            }
        }
        return true;
    }
    intentar(letra: string) {
        let letraMayuscula = letra.toLocaleUpperCase();
        if (!this.letrasIngresadas.includes(letraMayuscula)) {
            this.letrasIngresadas.push(letraMayuscula);
            if (!this.palabra.includes(letraMayuscula)){
                this.intentosActuales++;
            }

        }
     
    }

    



}