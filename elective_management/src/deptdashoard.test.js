import React from 'react';
import { shallow } from 'enzyme';
import TD from './component/departmentdashboard';
    describe('Department Dashboard component tests', ()=> {
        const wrapper = shallow(<TD />);

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button1')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#Button1').text()))).toEqual("Provide list");
        });

        it('should have a btn component', ()=> {
            //There should be only one button
            expect(wrapper.find('button#Button2')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#Button2').text()))).toEqual("View final student list");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button3')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#Button3').text()))).toEqual("Feedback");
        });


        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button0')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#Button0').text()))).toEqual("LOGOUT");
        });


      

    });

















    