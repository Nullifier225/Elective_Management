import React from 'react';
import { shallow } from 'enzyme';
import Login from './component/login';
import {mount} from 'enzyme';
import axios from 'axios';
    describe('Login component tests', ()=> {
        const wrapper = shallow(<Login />);

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button').text()))).toEqual("Sign In ");
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

        it('simulating value entries',()=>{
            const credentials={
                username:"cb.en.u4cse18042@cb.students.amrita.edu",
                password:"logind"
            }
            const usernameInput = wrapper.find('input#email');
            usernameInput.value = credentials.username;
            expect(usernameInput.value).toBe('cb.en.u4cse18042@cb.students.amrita.edu');

            const passwordInput = wrapper.find('input#pwd');
            passwordInput.value = credentials.password;
            expect(passwordInput.value).toBe('logind');
            wrapper.find('button#Button').simulate('click');
            expect(wrapper.find('div#data')).toBeInTheDocument();
            
        })

        it('makes axios request', ()=> {
            axios.get('https://auems2.herokuapp.com/api/getfeedele1')
            .then(response=>{
            console.log(response.data)
            expect(response.data.length).toBeGreaterThan(1);
        })
        });

        

        //UNIT TESTING 

        


    ;


   
  
 
  


    });

















    