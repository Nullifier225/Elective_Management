import React from 'react';
import { shallow } from 'enzyme';
import Login from './component/login';
import {mount} from 'enzyme';
    describe('Login component tests', ()=> {
        const wrapper = shallow(<Login />);

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button').text()))).toEqual("Sign in");
        });

        it('should have the Amrita Logo', ()=> {

            //There should be only one button
            expect(wrapper.find('img#Amrita')).toHaveLength(1);

        });

        it('should have input for email and password', ()=> {
            //Email and password input field should be present
            expect(wrapper.find('input#email')).toHaveLength(1);
            expect(wrapper.find('input#pwd')).toHaveLength(1);
        });


        it('should have an empty email and password state var', ()=> {
            expect(wrapper.state('email')).toEqual('');
            expect(wrapper.state('password')).toEqual('');
        });

        //UNIT TESTING 

        test('submitting form is sucessful', async () => {
            
            
            wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'login'}});
            wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'cb.en.u4cse18042@cb.students.amrita.edu'}});
            expect(wrapper.state('password')).toEqual('login');
            expect(wrapper.state('email')).toEqual('cb.en.u4cse18042@cb.students.amrita.edu');
            expect(wrapper.find("form").simulate("submit", { preventDefault() {} }))

            //console.log((wrapper.find('form#myForm').simulate('submit')));
            //wrapper.find('form#myForm').simulate('submit')
            //expect(submit_signup).toHaveBeenCalledTimes(1);
               
            

               
});


    ;


   
  
 
  


    });

















    