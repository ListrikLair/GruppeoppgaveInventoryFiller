closeInventory()
function openInventory() {
    document.getElementById('bag').innerHTML = /*html*/`
    <div id="bag" class="xIcon" onclick="closeInventory()">X</div>
    `;
    document.getElementById('inventory').innerHTML = /*html*/`
    <div id="itemSlot">Item</div>
    <div id="itemSlot">Item</div>
    <div id="itemSlot">Item</div>
    <div id="itemSlot">Item</div>
    <div id="itemSlot">Item</div>
    <div id="itemSlot">Item</div>
    <div id="itemSlot">Item</div>
    <div id="itemSlot">Item</div>
    <div id="itemSlot">Item</div>
    <div id="itemSlot">Item</div>
    <div id="itemSlot">Item</div>
    <div id="itemSlot">Item</div>
    `;
}
function closeInventory() {
    document.getElementById('inventory').innerHTML = '';
    document.getElementById('bag').innerHTML = /*html*/`
    <div id="bag" class="bagIcon">
            <img src="https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_09_black.jpg" alt=""
                onclick="openInventory()">
        </div>
    `;
}