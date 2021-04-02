import React from 'react';
import { shallow } from 'enzyme';
import Studentdashboard from './component/Studentdashboard';
    describe('Student Dashboard component tests', ()=> {
        const wrapper = shallow(<Studentdashboard />);

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button1')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button').text()))).toEqual("Apply");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button2')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button').text()))).toEqual("Change");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button3')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button').text()))).toEqual("Feedback");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button4')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button').text()))).toEqual("View Elective");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button0')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button').text()))).toEqual("LOGOUT");
        });

    });

















    