import React from 'react';
import { shallow } from 'enzyme';
import ChangeForm from './component/changeform';
    describe('Login component tests', ()=> {
        const wrapper = shallow(<ChangeForm />);

        it('should have a submit btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button2')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#button2').text()))).toEqual("Submit");
        });
        it('should have a back btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button1')).toHaveLength(1);


            
        });

        it('should have the Amrita Logo', ()=> {

            //There should be only one button
            expect(wrapper.find('img#img1')).toHaveLength(1);

        });

        it('should have input fields for detail connection', ()=> {
            //Email and password input field should be present
            expect(wrapper.find('input#en1')).toHaveLength(1);
            expect(wrapper.find('input#cc1')).toHaveLength(1);
            expect(wrapper.find('input#den')).toHaveLength(1);
            expect(wrapper.find('input#decc')).toHaveLength(1);
        });


        it('should have empty fields intially', ()=> {
            expect(wrapper.state('currentelectivename')).toEqual('');
            expect(wrapper.state('currentcc')).toEqual('');
            expect(wrapper.state('changeelectivename')).toEqual('');
            expect(wrapper.state('changecc')).toEqual('');
        });

        test('submitting elective  change application form is sucessful on mimicing click of button', async () => {
        wrapper.find('input#en1').simulate('change', {target: {name: 'currentelectivename', value: 'FODS'}});
        wrapper.find('input#cc1').simulate('change', {target: {name: 'currentcc', value: '15CSE432'}});
        wrapper.find('input#den').simulate('change', {target: {name: 'changeelectivename', value: 'Cloud'}});
        wrapper.find('input#decc').simulate('change', {target: {name: 'changecc', value: '15CSE337'}});

        expect(wrapper.state('currentelectivename')).toEqual('FODS');
        expect(wrapper.state('currentcc')).toEqual('15CSE432');
        expect(wrapper.state('changeelectivename')).toEqual('Cloud');
        expect(wrapper.state('changecc')).toEqual('15CSE337');
        
        expect(wrapper.find("button#button2").simulate("submit", { preventDefault() {} }))
    });

    });

















    