let hero = {
    name: prompt("Введите имя героя: "),
    age: Number(prompt("Введите ваш возраст: ")),
    powerLevel: Number(prompt("Введите уровень вашей силы (1-100): ")),
    level: 1,
    gold: 0,
    completedQuests: [],

    addQuest: function (questName, reward) {
        this.completedQuests.push(questName);
        this.gold += reward;
        console.log(`Квест выполнен: ${questName} (+${reward} золота)`);

        if (this.gold >= 50) {
            this.levelUp();
        }
    },


    levelUp: function () {
        this.level++;
        console.log("🎉 Герой повышает уровень!");
    },

    showStats: function () {
        console.log("\n--- Результат ---");
        console.log("Имя: " + this.name);
        console.log("Возраст: " + this.age);
        console.log("Уровень: " + this.level);
        console.log("Уровень силы: " + this.powerLevel);
        console.log("Золото: " + this.gold);
        console.log("Количество выполненных квестов: " + this.completedQuests.length);
        console.log("Список квестов: " + this.completedQuests.join(", "));
    }
};

const quests = [
    { name: "Убить крыс в подвале", reward: 5 },
    { name: "Спасти кота из дерева", reward: 10 },
    { name: "Сопроводить торговца", reward: 20 },
    { name: "Победить гоблинов", reward: 50 },
    { name: "Разгадать древнюю загадку", reward: 70 },
];


console.log("\n--- Герой приступает к квестам ---");
for (let quest of quests) {
    hero.addQuest(quest.name, quest.reward);
}

hero.showStats();
