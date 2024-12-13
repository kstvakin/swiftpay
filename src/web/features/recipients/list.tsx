import React, { forwardRef, useRef, useState } from 'react';
import Box from '../../components/Box';
import { TextComponent } from '../../components/Text';
import * as recipients from "../../data/recipients.json";



const Item = forwardRef<HTMLDivElement, { item: any, index: number, elementsRef: any }>((props, ref) => {


    const handleMouseEnter = () => {
        const element = props.elementsRef.current[props.index];
        if (element) {
            const info = element.querySelector("#info");
            const sendOrEdit = element.querySelector("#send-edit");
            info.classList.remove('w-[100%]');
            sendOrEdit.classList.remove('hidden');
            info.classList.add('w-[80%]');
            sendOrEdit.classList.add('animate-fadeIn');
        }
    };

    const handleMouseLeave = () => {
        const element = props.elementsRef.current[props.index];
        if (element) {
            const sendOrEdit = element.querySelector("#send-edit");
            const info = element.querySelector("#info");
            info.classList.remove('w-[80%]');
            sendOrEdit.classList.add('hidden');
            info.classList.add('w-[100%]');
        }
    };
    return (
        <div key={props.item.id}
            className='cursor-pointer flex border-white border-[1px] border-solid drop-shadow-recipient-boxshadow rounded-[10px]'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={ref}
        >
            <Box className='flex-1'>
                <div id="send-edit" className='w-[20%] h-full float-left hidden'>
                    <div className='flex items-center justify-center float-left rounded-tl-[10px] rounded-bl-[10px] h-full px-3 w-1/2 bg-send-black'>
                        <img className='justify-self-center h-[30px]' src='../../assets/images/send-icon.svg' />
                    </div>
                    <div className='flex items-center justify-center float-left h-full px-3 w-1/2 bg-edit-green'>
                        <img className='justify-self-center h-[30px]' src='../../assets/images/edit-icon.svg' />
                    </div>
                </div>
                <div id="info" className='w-[100%] h-full float-left'>
                    <div className='w-full h-full inline-block py-3'>
                        <div className='flex items-center justify-center w-[10%] h-full float-left px-3'>
                            <img className='h-[30px] justify-self-center' src='../../assets/images/bank-icon.svg' />
                        </div>
                        <div className='flex w-[90%] float-left flex-col'>
                            <div className='w-full'>
                                <TextComponent className='text-[1.25rem]'>{props.item.name}</TextComponent>
                            </div>
                            <div className='w-full flex justify-between'>
                                <TextComponent className='text-[1rem] color-[#777777]'>To account {props.item.accountNumber}</TextComponent>
                                <TextComponent className='text-[1rem] color-[#777777] px-2'>{props.item.institution}</TextComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </div>)
})

const List = (): React.JSX.Element => {
    const elementsRef = useRef<(HTMLDivElement)[]>([]);

    return (
        <Box className='space-y-5'>
            {recipients.data.length && recipients.data.map((item, index) => (
                <Item
                    item={item}
                    ref={(el: HTMLDivElement) => (elementsRef.current[index] = el)}
                    index={index}
                    elementsRef={elementsRef}
                    key={item.id}
                />
            ))}
        </Box>
    )
}

export default List;