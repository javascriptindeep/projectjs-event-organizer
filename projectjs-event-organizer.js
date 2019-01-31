// Основни задачи
// Да се създаде органаизър за събития който да изпълнява следните задачи
// Създаване на променливите за събитията и клиентите
var nameEvent;
var flagEvent;
var firstNameClient;
var lastNameClient;
var ageClient;

// 1.Съхранява в колекция списък с всички събития, които са организирани.
// 2. Извежда всички вече съхранени събития, като визуализира цялата необходима
//информация за тях.
//(1,2)Създаване на колекция(масив) от всички събития и отпечатването им в конзолата.
//Масива съдържа обекти, на които им задавам съотвения ключ : стойност и отпечатва на конзолата
// резултата

var allEvents =[];
allEvents[0] = {
    nameEvent : "Night Club Event",
    flagEvent : "18+"
} ;

allEvents[1] = {
    nameEvent : "Day Club Event",
    flagEvent : "18-"
},
allEvents[2] = {
    nameEvent : "Wine Defile Event",
    flagEvent : "18+"
},
allEvents[3] = {
    nameEvent : "Coctail Event",
    flagEvent : "18-"
},
allEvents[4] = {
    nameEvent : "Bar Club Event",
    flagEvent : "18+"
};
console.log(allEvents);

//3. Изтрива събитие по уникален идентификатор, и извежда съобщение за успешно
//извършена операция.
for(var i=0;i<allEvents.length;i++){    
         delete allEvents[0];
         delete allEvents[3];   
 }
 console.log(allEvents);
alert("Successfull operation");

//4. Създава ново събитие. Задължителни атрибути на събитието са неговото име. Ако
//потребителя не подаде флаг, указващ дали събитието е подходящо за непълнолетни то по
//подразбиране е. 

allEvents[5] = {
    nameEvent : "Concert Event",
    flagEvent : ''
};
console.log(allEvents);

//5.Актуализира събитие по уникален идентификатор и изведете съобщение за правилно
//извършена операция

for(i=0;i<allEvents.length;i++){
   if(allEvents[1]){
       allEvents[1] = {
           nameEvent : "Best Event",
           flagEvent : "18+"
       }
   }
}
console.log(allEvents);
alert("Successfully changed the event name and flag!");

 //Въвеждам списък с клиенти.
var clients = [];

    clients[0] = {
        firstNameClient : "Ivan",
        lastNameClient : "Popov",
        ageClient : 20
    };
    clients[1] ={
        firstNameClient : "Mariq",
        lastNameClient : "Ivanova",
        ageClient : 16
    };
    clients[2] ={
        firstNameClient : "Mihail",
        lastNameClient : "Kostadinov",
        ageClient : 17
    };
    clients[3] ={
        firstNameClient : "Petq",
        lastNameClient : "Karaivanova",
        ageClient : 26
    };
    clients[4] ={
        firstNameClient : "Martin",
        lastNameClient : "Stoqnov",
        ageClient : 48
    };




//6. Добавете клиент към вече създадено събитие

var eventPlusClient=allEvents[4].nameEvent + allEvents[4].flagEvent +" "+ clients[2].firstNameClient +" "+
clients[2].lastNameClient +" "+ clients[2].ageClient;
allEvents[4] = eventPlusClient;
console.log(eventPlusClient);





// Допълнителни задачи част 1

//2.Добавете възможност за запазване на текуща дата на събитието. 

var nowDate=new Date();
console.log(nowDate);
var eventPlusDate;
eventPlusDate=allEvents[5].nameEvent + allEvents.flagEvent + nowDate;
allEvents[5]=eventPlusDate;
console.log(allEvents);


//3. Създайте функционалност за извеждане на събитието с най-много добавени клиенти. Ако
//такова не съществува (всички са с равен брой) или не съществуват събития изведете
//необходимите съобщения, по ваш избор.

for(var i=0;i<allEvents.length;i++){
    
    if(allEvents[i]===eventPlusClient)
        {
            alert(allEvents[i]);
        }
        else
        if(allEvents[i]!=eventPlusClient){
            alert("Няма добавени клиенти");
        }
}

  //5. Изведете всички събития като ги групирате, събитията които са предназначени за
//пълнолетни посетители трябва да имат звездичка пред името си “*” а тези подходящи за
//непълнолетни диез “#”.
allEvents[0] = {
    nameEvent : "Night Club Event",
    flagEvent : "18+"
} ;

allEvents[1] = {
    nameEvent : "Day Club Event",
    flagEvent : "18-"
},
allEvents[2] = {
    nameEvent : "Wine Defile Event",
    flagEvent : "18+"
},
allEvents[3] = {
    nameEvent : "Coctail Event",
    flagEvent : "18-"
},
allEvents[4] = {
    nameEvent : "Bar Club Event",
    flagEvent : "18+"
};

var star;
var dies;

for(var i=0;i<allEvents.length;i++){
if(allEvents[i].flagEvent === "18+"){
        
        star = "*" + allEvents[i].nameEvent + ":" + allEvents[i].flagEvent;
        allEvents[i]=star;
    } else {
        dies = "#" + allEvents[i].nameEvent + ":" + allEvents[i].flagEvent;
        allEvents[i]=dies;
    }
}
console.log(allEvents);



//Допълнителни задачи част 2

//2.Добавете, свойство цена към всяко събитие което организирате. Цената не е
//задължително свойство, всяко събитие което е регистрирано без цена, става автоматично
//безплатно. 

allEvents[0] = {
    nameEvent : "Night Club Event",
    flagEvent : "18+",
    price : 30
} ;

allEvents[1] = {
    nameEvent : "Day Club Event",
    flagEvent : "18-",
    price : 20
},
allEvents[2] = {
    nameEvent : "Wine Defile Event",
    flagEvent : "18+"
},
allEvents[3] = {
    nameEvent : "Coctail Event",
    flagEvent : "18-",
    price : 25
},
allEvents[4] = {
    nameEvent : "Bar Club Event",
    flagEvent : "18+"
};



var paidEvent;
var freeEvent;

for(var i=0;i<allEvents.length;i++){
    if(allEvents[i].price){
        paidEvent = "$" + allEvents[i].nameEvent + ":" + allEvents[i].flagEvent + " price:" + allEvents[i].price;
        allEvents[i]=paidEvent;
    } else {
        freeEvent = "!" +allEvents[i].nameEvent + ":" + allEvents.flagEvent;
        allEvents[i]=freeEvent;
    }
}
console.log(allEvents);

//4. Всеки регистриран клиент, в системата трябва да 
//разполага с портфейл.  


var wallet=[];

clients[0] = {
    firstNameClient : "Ivan",
    lastNameClient : "Popov",
    ageClient : 20,
    balanceMoney : wallet
};
clients[1] ={
    firstNameClient : "Mariq",
    lastNameClient : "Ivanova",
    ageClient : 16,
    balanceMoney : wallet
};
clients[2] ={
    firstNameClient : "Mihail",
    lastNameClient : "Kostadinov",
    ageClient : 17,
    balanceMoney : wallet
};
clients[3] ={
    firstNameClient : "Petq",
    lastNameClient : "Karaivanova",
    ageClient : 26,
    balanceMoney : wallet
};
clients[4] ={
    firstNameClient : "Martin",
    lastNameClient : "Stoqnov",
    ageClient : 48,
    balanceMoney : wallet
};
console.log(clients);






