import React from 'react';
import { shallow } from 'enzyme';
import App22 from './component/studentsform';
    describe('Login component tests', ()=> {
        const wrapper = shallow(<App22 />);

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button1')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button1').text()))).toEqual("Submit");
        });
        it('should have a back btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#back1')).toHaveLength(1);


            
        });

        it('should have the Amrita Logo', ()=> {

            //There should be only one button
            expect(wrapper.find('img#img1')).toHaveLength(1);

        });

        it('should have input fields for name and section', ()=> {
            //Email and password input field should be present
            expect(wrapper.find('input#name')).toHaveLength(1);
            expect(wrapper.find('input#sec')).toHaveLength(1);
        });


        it('should have an empty email and password state var', ()=> {
            expect(wrapper.state('name')).toEqual('');
            expect(wrapper.state('section')).toEqual('');
        });

        test('submitting elective application form is sucessful on mimicing click of button', async () => {
        wrapper.find('input#name').simulate('change', {target: {name: 'name', value: 'Parvana'}});
        wrapper.find('input#sec').simulate('change', {target: {name: 'section', value: 'A'}});
        expect(wrapper.state('name')).toEqual('Parvana');
        expect(wrapper.state('section')).toEqual('A');
        expect(wrapper.find("form").simulate("submit", { preventDefault() {} }))
    });

    });

















    