/***********************************************************************
 * 
 * VARIABLES
 * 
 ***********************************************************************/



/**

 Notas:
------------------------------------------------------------------
    ----------- Template <template></template> -----------
------------------------------------------------------------------

 -Cuando este presente una '@' hace referencia a una funcion. Ex: @click.prevent="unaFuncion"
 -Cuando este presente los ':' hace referencia a una variable. Ex: :src="unaVariable" / :unaVariable="unaVarible"
 -Cuando este presente el 'v-model' hace referencia a los inputs. Ex: <input v-model="nombre" />
 -Aqui NO SE UTILIZA el ".value" para las variables
 

------------------------------------------------------------------
       ----------- Script <script></script>  -----------
------------------------------------------------------------------



//EMITS(envio solamente funciones)

-En el nombre de la funcion del padre se escribe en camelCase y con el signo '@'. 
    Ex : 
    1) Declaracion de la funcion: const definirPresupuesto = () => {Cuerpo de la funcion/ Codígo}.
    2)Declaracion de la funcion: En el componente: @definir-presupuesto="definirPresupuesto"

-En el nombre de la funcion del hijo se escribe con '-' y se revibe en el defineEmits: 
    Ex:
    1) se recibe la funcion: const emit = defineEmits(['ocultar-modal']). 
    2) En la etiqueta: @ocultar-modal="ocultarModal"



PROPS(envio solamente variables):

En el PADRE se escribe igual que una variable signo ':'.Ex: :unaVariable="unaVariable".

En el HIJO se escriben con el 'defineProps()'.
    Ex:
    const props = defineProps({
        unaVariable:{
            type:Object,
            required: true
        }
    })




------------------------------------------------------------------
   ----------- Style: (solo el SCSS) <style></style> -----------
------------------------------------------------------------------

En la etiqueta <style></style>
 -Cuando no tiene ninguna propiedad el estilo es para todo el proyecto, se aplica todos los componentes
 -Cuando tiene la propiedad "scopet" <style scoped></style> se utiliza solamente en el componente.
 -Cuando tiene la propiedad 'lang="scss" <style scoped></style> hace referencia a código SASS.
*/






/**
 * Para hacer una variable ref:
 */
//1.- Import
import { ref } from 'vue';

//Para hacer una variable reactiva:



//2.-Declaracion de variables ref
const nombreVariableEntera = ref(0); //Variable ejemplo
const nombreVariableDouble = ref(0.0);  
const nombreVariableString = ref(''); 
const nombreVariableNull = ref(null); 
const nombreVariableArray = ref([]); 
const nombreVariableObject = ref({}); 




//3.-Asignacion de variables ref
 nombreVariableEntera = 30;
 nombreVariableDouble = 0.0;  
 nombreVariableString = 'Milena tu puedes'; 
 nombreVariableNull = null; 
 nombreVariableArray = [1,2,3,4,5]; 
 nombreVariableObject = {nombre: "pepelepu", edad: 18};         


/**
 * Para hacer una variable reactive:
 */
//1.- Import
import { reactive } from 'vue';



//2.-Declaracion de variables reactive
const formulario = reactive({
    nombre: 'Nombre',
    edad: 18,
});   




//3.-Asignacion de variables reactive
nombreVariable.value = 'Pepe';  
nombreVariable.edad = 38;  


/**
 * Para conocer cual es el padre y cual es el componente Hijo
 */


//PADRE: Ejemplo: App.vue:


//El componente Padre tiene el "import" obligatoriamente del componente Hijo
//<script setup>
    //...
    import Alerta from './components/Alerta.vue';
    //...
//</script>


<template>
    ...


    <Alerta 
        //@function-a-enviar="functionParaEnviar"
        //:variableParaEnviar="variableParaEnviar"
        //Se pueden definir otras propiedades, por ejemplo:
        //class="text-center" ó :class="text-center"
        //v-if="condicion"
        //v-else
    />


    ...


</template>








//HIJO: Ejemplo: components para Alerta.vue
// El componente HIJO es donde se definen los "defineEmits" y "defineProps"

// 1.- Ejemplos para las funciones "defineEmits"


//<script setup>
    //...

        const emit = defineEmits(['function-para-enviar'])

    //...


    emit('function-para-enviar')


//</script>




//<template>
    //...

    //<button
        //...
        //@click.prevent="$emit('funcion-para-enviar')"
    
    //>

    

    //...


//</template>





// 2.- Ejemplos Para las variables: "defineProps" 


//<script setup>
    //...
    const props = defineProps({
        variableParaEnviar: {
            type: Number,
            required: true
        } 
    })
    //...

    //Para usar en el script
    props.variableParaEnviar;
//</script>






<template>
    ...

    
    <p>
        /{{ variableParaEnviar }}
    </p>


    ...


</template>