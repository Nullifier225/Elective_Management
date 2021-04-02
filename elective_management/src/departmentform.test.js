import React from 'react';
import { shallow } from 'enzyme';
import App1 from './component/departmentform';
    describe('Department form component tests', ()=> {
        const wrapper = shallow(<App1 />);

        it('should have a back btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#back1')).toHaveLength(1);


            
        });

        it('should have the Amrita Logo', ()=> {

            //There should be only one button
            expect(wrapper.find('img#img1')).toHaveLength(1);

        });

        it('should have input fields for entering details', ()=> {
            //Email and password input field should be present
            expect(wrapper.find('select#select1')).toHaveLength(1);
            expect(wrapper.find('input#elective_name')).toHaveLength(1);
            expect(wrapper.find('input#coursecode')).toHaveLength(1);
            expect(wrapper.find('input#electiveyear')).toHaveLength(1);
            expect(wrapper.find('input#max')).toHaveLength(1);
            expect(wrapper.find('input#min')).toHaveLength(1);
            expect(wrapper.find('textarea#input6')).toHaveLength(1);
            expect(wrapper.find('input#input7')).toHaveLength(1);
        });


        it('should have btn components', ()=> {

            //There should be only one button
            expect(wrapper.find('button#submit1')).toHaveLength(1);
            expect(wrapper.find('button#submit2')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#submit1').text()))).toEqual("Add");
            expect(JSON.parse(JSON.stringify(wrapper.find('button#submit2').text()))).toEqual("Submit");
        });
    });
















    