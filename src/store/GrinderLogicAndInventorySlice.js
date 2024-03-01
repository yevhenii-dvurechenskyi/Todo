import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import swordImages from '../assets/ImageImports/swords';
import wizardImages from '../assets/ImageImports/wizards';
import chest from '../assets/ImageImports/cases';

const GrinderLogicAndInventorySlice = createSlice({
    name: 'GrinderLogicAndInventorySlice',
    initialState: {
        casesArray: [
            {
                name: "Sword chest",
                amount: 5,
                caseImg: chest.Swords_case,
                prise: 850,
                idCase: 0,
                array: [
                    {
                        id: '',
                        name: "Copper shortsword",
                        prise: '1 coper coin',
                        priseInCoper: 1,
                        imgUrl: swordImages.Copper_Shortsword,
                        grade: 'F',
                    },
                    {
                        id: '',
                        name: "Boreal wood sword",
                        prise: '230 coper coin',
                        priseInCoper: 230,
                        imgUrl: swordImages.Boreal_Wood_Sword,
                        grade: 'F',
                    },
                    {
                        id: '',
                        name: "Wooden sword",
                        prise: '80 coper coin',
                        priseInCoper: 80,
                        imgUrl: swordImages.Wooden_Sword,
                        grade: 'F',
                    },
                    {
                        id: '',
                        name: "Cactus sword",
                        prise: '420 coper coin',
                        priseInCoper: 420,
                        imgUrl: swordImages.Cactus_Sword,
                        grade: 'F',
                    },
                    {
                        id: '',
                        name: "Bee keeper",
                        prise: '720 coper coin',
                        priseInCoper: 720,
                        imgUrl: swordImages.Bee_Keeper,
                        grade: 'D',
                    },
                    {
                        id: '',
                        name: "Katana",
                        prise: '780 coper coin',
                        priseInCoper: 780,
                        imgUrl: swordImages.Katana,
                        grade: 'D',
                    },
                    {
                        id: '',
                        name: "Platinum shortsword",
                        prise: '540 coper coin',
                        priseInCoper: 540,
                        imgUrl: swordImages.Platinum_Shortsword,
                        grade: 'D',
                    },
                    {
                        id: '',
                        name: "Muramasa",
                        prise: '1400 coper coin',
                        priseInCoper: 1400,
                        imgUrl: swordImages.Muramasa,
                        grade: 'C',
                    },
                    {
                        id: '',
                        name: "Nights edge",
                        prise: '4370 coper coin',
                        priseInCoper: 4370,
                        imgUrl: swordImages.Nights_Edge,
                        grade: 'C',
                    },
                    {
                        id: '',
                        name: "Enchanted sword",
                        prise: '6500 coper coin',
                        priseInCoper: 6500,
                        imgUrl: swordImages.Enchanted_Sword,
                        grade: 'B',
                    },
            ],
            },
            {
                name: "Wizard chest",
                amount: 3,
                caseImg: chest.Wizard_case,
                prise: 1500,
                idCase: 1,
                array: [
                    {
                        id: '',
                        name: "Wand of sparking",
                        prise: '120 coper coin',
                        priseInCoper: 120,
                        imgUrl: wizardImages.Wand_of_Sparking,
                        grade: 'F',
                    },
                    {
                        id: '',
                        name: "Wand of frosting",
                        prise: '250 coper coin',
                        priseInCoper: 250,
                        imgUrl: wizardImages.Wand_of_Frosting,
                        grade: 'F',
                    },
                    {
                        id: '',
                        name: "Topaz Staff",
                        prise: '420 coper coin',
                        priseInCoper: 420,
                        imgUrl: wizardImages.Topaz_Staff,
                        grade: 'F',
                    },
                    {
                        id: '',
                        name: "Amethyst Staff",
                        prise: '485 coper coin',
                        priseInCoper: 485,
                        imgUrl: wizardImages.Amethyst_Staff,
                        grade: 'F',
                    },
                    {
                        id: '',
                        name: "Diamond Staff",
                        prise: '750 coper coin',
                        priseInCoper: 750,
                        imgUrl: wizardImages.Diamond_Staff,
                        grade: 'D',
                    },
                    {
                        id: '',
                        name: "Space Gun",
                        prise: '800 coper coin',
                        priseInCoper: 800,
                        imgUrl: wizardImages.Space_Gun,
                        grade: 'D',
                    },
                    {
                        id: '',
                        name: "Vilethorn",
                        prise: '770 coper coin',
                        priseInCoper: 770,
                        imgUrl: wizardImages.Vilethorn,
                        grade: 'D',
                    },
                    {
                        id: '',
                        name: "Demon Scythe",
                        prise: '2300 coper coin',
                        priseInCoper: 2300,
                        imgUrl: wizardImages.Diamond_Staff,
                        grade: 'C',
                    },
                    {
                        id: '',
                        name: "Magic Missile",
                        prise: '4800 coper coin',
                        priseInCoper: 4800,
                        imgUrl: wizardImages.Magic_Missile,
                        grade: 'C',
                    },
                    {
                        id: '',
                        name: "Rainbow Rod",
                        prise: '9600 coper coin',
                        priseInCoper: 9600,
                        imgUrl: wizardImages.Rainbow_Rod,
                        grade: 'B',
                    },
                ],
            },
        ],

        itemsArray: [],
        itemNow: {},
        coin: 0,
        arrayNumber: 0,
    }, 
    reducers: {
        addItem(state) {

            if(state.casesArray[state.arrayNumber].amount > 0){
                let gradeF = 50; // 0 - 50
                let gradeD = 80; // 50 - 80
                let gradeC = 95; // 80 - 95
                let gradeB = 100; // 95 - 100

                const randomNumber = Math.floor(Math.random() * 100) + 1;
                console.log(randomNumber);

                if(0 <= randomNumber && randomNumber  <= gradeF){
                    let gradeF_Array = state.casesArray[state.arrayNumber].array.filter((item) => item.grade === "F");
                    let randomNumbers = Math.floor(Math.random() * gradeF_Array.length);
                    let item = gradeF_Array[randomNumbers];

                    item.id = uuidv4();
                    state.itemsArray.push(item);
                    state.itemNow = item;
                }
                if(51 <= randomNumber && randomNumber  <= gradeD){
                    let gradeD_Array = state.casesArray[state.arrayNumber].array.filter((item) => item.grade === "D");
                    let randomNumbers = Math.floor(Math.random() * gradeD_Array.length);
                    let item = gradeD_Array[randomNumbers];

                    item.id = uuidv4();
                    state.itemsArray.push(item);
                    state.itemNow = item;
                }
                if(81 <= randomNumber && randomNumber  <= gradeC){
                    let gradeC_Array = state.casesArray[state.arrayNumber].array.filter((item) => item.grade === "C");
                    let randomNumbers = Math.floor(Math.random() * gradeC_Array.length);
                    let item = gradeC_Array[randomNumbers];

                    item.id = uuidv4();
                    state.itemsArray.push(item);
                    state.itemNow = item;
                }
                if(96 <= randomNumber && randomNumber <= gradeB){
                    let gradeB_Array = state.casesArray[state.arrayNumber].array.filter((item) => item.grade === "B");
                    let randomNumbers = Math.floor(Math.random() * gradeB_Array.length);
                    let item = gradeB_Array[randomNumbers];

                    item.id = uuidv4();
                    state.itemsArray.push(item);
                    state.itemNow = item;
                }
                state.casesArray[state.arrayNumber].amount--;
            }
            else{
                alert('Buy case');
            }
            
        },
        deletItem(state, action) {
            state.itemsArray = state.itemsArray.filter(item => item.id !== action.payload.id);
        },
        addCoin(state, action) {
            state.coin = state.coin + action.payload.coin;
        },
        buyCase(state, action) {
            if(state.coin >= state.casesArray[action.payload.id].prise){
                state.casesArray[action.payload.id].amount += 1;
                state.coin = state.coin - state.casesArray[action.payload.id].prise;
            }
            else{
                alert("No money!!!");
            }

        },
        CaseNumberUp(state){
            if (state.arrayNumber < state.casesArray.length - 1) {
                state.arrayNumber++;
            }
        },
        CaseNumberDown(state){
            if (state.arrayNumber > 0) {
                state.arrayNumber--;
            }
        },
        
    },
});

export const { addItem, deletItem, addCoin, buyCase, CaseNumberUp, CaseNumberDown } = GrinderLogicAndInventorySlice.actions;

export default GrinderLogicAndInventorySlice.reducer;