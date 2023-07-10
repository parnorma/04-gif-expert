import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from "../../src/components/AddCategory"

describe('Prueba sobre el componente AddCateory', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => { 
        // sujeto de pruebas
        render(<AddCategory onNewCategory={()=>{}} />);
        

        const elemento = screen.getByRole('textbox');

        //disparamos el evento
        fireEvent.input(elemento,{ target: { value:'Saitama' } } );
        expect(elemento.value).toBe('Saitama');
        screen.debug();
     });

     //prueba del submit del formulario
     test('Debe de llamar onNewCategory si el input tiene un valor ', () => {
         const inputValue = 'Saitama'; 
         const onNewCategory = jest.fn();

         render(<AddCategory onNewCategory={ onNewCategory } />);

         // referencia a los elementos
         const input = screen.getByRole('textbox');
         const form = screen.getByRole('form');

         // disparamos los eventos
         // aca  le asignamos un valor al input
         fireEvent.input(input,{ target: { value : inputValue } } );
         // aca disparamos el submit
         fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');

        // verificamos que la funcion haya sido llamada
        expect(onNewCategory).toHaveBeenCalled();
        //para probar que se haya llamado 1 vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //veriifcamos que haya sido llamada con el valor de nuestro input que es Saitama
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('No debe de llamar onNewCategory si el input esta vacio ', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        // referencia a los elementos
        const form = screen.getByRole('form');

        // disparamos los eventos
        // aca disparamos el submit
        fireEvent.submit(form);
       // screen.debug();

       //para probar que no haya sido llamado
       expect(onNewCategory).toHaveBeenCalledTimes(0);
       expect(onNewCategory).not.toHaveBeenCalled();

   });
 })