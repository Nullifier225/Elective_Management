import React from 'react';
import { shallow } from 'enzyme';
import AD from './component/admindashboard';
    describe('Admin Dashboard component tests', ()=> {
        const wrapper = shallow(<AD/>);
        
        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button1')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button1').text()))).toEqual("View applied students list");
        });

        it('should have a btn component', ()=> {
            //There should be only one button
            expect(wrapper.find('button#button2')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button2').text()))).toEqual("View elective change students");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button3')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button3').text()))).toEqual("View faculties for electives");
        });


        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button4')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button4').text()))).toEqual("LOGOUT");
        });

    });

















    