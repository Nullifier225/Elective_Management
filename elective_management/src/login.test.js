import React from 'react';
import { shallow } from 'enzyme';
import Login from './component/login';
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
    });

















    