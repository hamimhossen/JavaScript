function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const chairWood = 3;
    const tableWood = 5;
    const bedWood = 2;

    const totalChairWood = chairWood * chairQuantity;
    const totalTableWood = tableWood * tableQuantity;
    const totalBedWood = bedWood * bedQuantity;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;
}
const wood = woodQuantity(8, 2, 6);
console.log("Needed Total Wood:", wood);
