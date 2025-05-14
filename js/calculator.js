// Manakish Calculator - Main JavaScript

document.addEventListener("DOMContentLoaded", function() {
  // DOM Cache - Store frequently accessed elements to improve performance
  const domElements = {
    // Tabs
    tabs: document.querySelectorAll('.tab'),
    tabContents: document.querySelectorAll('.tab-content'),
    
    // Dough calculator inputs
    doughIngredientsTable: document.getElementById('dough-ingredients-table'),
    ingredientWeights: document.querySelectorAll('.ingredient-weight'),
    totalDoughWeight: document.getElementById('totalDoughWeight'),
    totalDoughCost: document.getElementById('totalDoughCost'),
    showPricesBtn: document.getElementById('showPricesBtn'),
    
    // Batch calculator
    doughBalls: document.getElementById('doughBalls'),
    ballWeight: document.getElementById('ballWeight'),
    batchResults: document.getElementById('batchResults'),
    
    // Recipe analysis
    hydrationValue: document.getElementById('hydrationValue'),
    saltValue: document.getElementById('saltValue'),
    oilValue: document.getElementById('oilValue'),
    yeastValue: document.getElementById('yeastValue'),
    sugarValue: document.getElementById('sugarValue'),
    totalDoughInfo: document.getElementById('totalDoughInfo'),
    
    // Custom ingredient inputs
    addCustomIngredient: document.getElementById('addCustomIngredient'),
    customIngredientForm: document.getElementById('customIngredientForm'),
    customIngredientName: document.getElementById('customIngredientName'),
    customIngredientWeight: document.getElementById('customIngredientWeight'),
    customIngredientPrice: document.getElementById('customIngredientPrice'),
    saveCustomIngredient: document.getElementById('saveCustomIngredient'),
    cancelCustomIngredient: document.getElementById('cancelCustomIngredient'),
    
    // Za'atar calculator inputs
    zaatarServings: document.getElementById('zaatarServings'),
    zaatarPerPiece: document.getElementById('zaatarPerPiece'),
    zaatarIngredientAmounts: document.querySelectorAll('.zaatar-ingredient-amount'),
    zaatarMixWeight: document.getElementById('zaatarMixWeight'),
    zaatarMixCost: document.getElementById('zaatarMixCost'),
    zaatarResult: document.getElementById('zaatarResult'),
    showToppingPricesBtn: document.getElementById('showToppingPricesBtn'),
    
    // Za'atar custom ingredient inputs
    addZaatarIngredient: document.getElementById('addZaatarIngredient'),
    zaatarIngredientForm: document.getElementById('zaatarIngredientForm'),
    zaatarIngredientName: document.getElementById('zaatarIngredientName'),
    zaatarIngredientAmount: document.getElementById('zaatarIngredientAmount'),
    zaatarIngredientPrice: document.getElementById('zaatarIngredientPrice'),
    saveZaatarIngredient: document.getElementById('saveZaatarIngredient'),
    cancelZaatarIngredient: document.getElementById('cancelZaatarIngredient'),
    
    // Cheese calculator inputs
    cheeseServings: document.getElementById('cheeseServings'),
    cheesePerPiece: document.getElementById('cheesePerPiece'),
    cheeseIngredientPercents: document.querySelectorAll('.cheese-ingredient-percent'),
    cheesePercentTotal: document.getElementById('cheesePercentTotal'),
    cheeseMixCost: document.getElementById('cheeseMixCost'),
    cheeseProportionError: document.getElementById('cheeseProportionError'),
    cheeseResult: document.getElementById('cheeseResult'),
    
    // Cheese custom ingredient inputs
    addCheeseIngredient: document.getElementById('addCheeseIngredient'),
    cheeseIngredientForm: document.getElementById('cheeseIngredientForm'),
    cheeseIngredientName: document.getElementById('cheeseIngredientName'),
    cheeseIngredientPercent: document.getElementById('cheeseIngredientPercent'),
    cheeseIngredientPrice: document.getElementById('cheeseIngredientPrice'),
    saveCheeseIngredient: document.getElementById('saveCheeseIngredient'),
    cancelCheeseIngredient: document.getElementById('cancelCheeseIngredient'),
    
    // Meat calculator inputs
    meatServings: document.getElementById('meatServings'),
    meatPerPiece: document.getElementById('meatPerPiece'),
    meatIngredientAmounts: document.querySelectorAll('.meat-ingredient-amount'),
    meatMixWeight: document.getElementById('meatMixWeight'),
    meatMixCost: document.getElementById('meatMixCost'),
    meatResult: document.getElementById('meatResult'),
    
    // Meat custom ingredient inputs
    addMeatIngredient: document.getElementById('addMeatIngredient'),
    meatIngredientForm: document.getElementById('meatIngredientForm'),
    meatIngredientName: document.getElementById('meatIngredientName'),
    meatIngredientAmount: document.getElementById('meatIngredientAmount'),
    meatIngredientPrice: document.getElementById('meatIngredientPrice'),
    saveMeatIngredient: document.getElementById('saveMeatIngredient'),
    cancelMeatIngredient: document.getElementById('cancelMeatIngredient'),
    
    // Banana Chocolate calculator inputs
    bananaServings: document.getElementById('bananaServings'),
    bananaPerPiece: document.getElementById('bananaPerPiece'),
    bananaIngredientAmounts: document.querySelectorAll('.banana-ingredient-amount'),
    bananaMixWeight: document.getElementById('bananaMixWeight'),
    bananaMixCost: document.getElementById('bananaMixCost'),
    bananaResult: document.getElementById('bananaResult'),
    
    // Banana Chocolate custom ingredient inputs
    addBananaIngredient: document.getElementById('addBananaIngredient'),
    bananaIngredientForm: document.getElementById('bananaIngredientForm'),
    bananaIngredientName: document.getElementById('bananaIngredientName'),
    bananaIngredientAmount: document.getElementById('bananaIngredientAmount'),
    bananaIngredientPrice: document.getElementById('bananaIngredientPrice'),
    saveBananaIngredient: document.getElementById('saveBananaIngredient'),
    cancelBananaIngredient: document.getElementById('cancelBananaIngredient'),
    
    // Summary tab
    summaryProduction: document.getElementById('summary-production'),
    summaryDough: document.getElementById('summary-dough'),
    summaryToppings: document.getElementById('summary-toppings'),
    summaryCosts: document.getElementById('summary-costs'),
    
    // Share and print elements
    shareRecipe: document.getElementById('shareRecipe'),
    copyRecipe: document.getElementById('copyRecipe'),
    printRecipe: document.getElementById('printRecipe'),
    shareModal: document.getElementById('shareModal'),
    shareUrl: document.getElementById('shareUrl'),
    copyShareUrl: document.getElementById('copyShareUrl'),
    closeButtons: document.querySelectorAll('.close-button'),
    
    // Topping sharing
    shareToppings: document.getElementById('shareToppings'),
    copyToppings: document.getElementById('copyToppings'),
    printToppings: document.getElementById('printToppings'),
    shareToppingsModal: document.getElementById('shareToppingsModal'),
    shareToppingsUrl: document.getElementById('shareToppingsUrl'),
    copyToppingsShareUrl: document.getElementById('copyToppingsShareUrl'),
    
    // BOQ printing
    printBOQ: document.getElementById('printBOQ'),
    
    // Toast notification
    copyConfirmation: document.getElementById('copyConfirmation'),
    copyMessage: document.getElementById('copyMessage'),
    
    // Print elements
    printDate: document.getElementById('print-date'),
    printFooterDate: document.getElementById('print-footer-date'),
    printRecipeTable: document.getElementById('print-recipe-table'),
    printRecipeDetails: document.getElementById('print-recipe-details'),
    printDoughNotes: document.getElementById('print-dough-notes'),
    printZaatarTable: document.getElementById('print-zaatar-table'),
    printZaatarDetails: document.getElementById('print-zaatar-details'),
    printCheeseTable: document.getElementById('print-cheese-table'),
    printCheeseDetails: document.getElementById('print-cheese-details'),
    printMeatTable: document.getElementById('print-meat-table'),
    printMeatDetails: document.getElementById('print-meat-details'),
    printBananaTable: document.getElementById('print-banana-table'),
    printBananaDetails: document.getElementById('print-banana-details'),
    printBoqTable: document.getElementById('print-boq-table')
  };
  
  // State object to hold current calculator values
  const state = {
    activeTab: 'dough',
    showPrices: false,
    showToppingPrices: false,
    currency: {
      symbol: '£',
      code: 'GBP'
    },
    doughRecipe: {
      totalWeight: 0,
      totalCost: 0,
      ingredients: [],
      analysis: {
        hydration: 0,
        salt: 0,
        oil: 0,
        yeast: 0,
        sugar: 0
      },
      batch: {
        numBalls: 8,
        ballWeight: 107
      }
    },
    toppings: {
      zaatar: {
        servings: 8,
        perPiece: 20,
        totalWeight: 0,
        totalCost: 0,
        ingredients: []
      },
      cheese: {
        servings: 8,
        perPiece: 50,
        totalCost: 0,
        cheeseTypes: []
      },
      meat: {
        servings: 8,
        perPiece: 50,
        totalWeight: 0,
        totalCost: 0,
        ingredients: []
      },
      banana: {
        servings: 8,
        perPiece: 50,
        totalWeight: 0,
        totalCost: 0,
        ingredients: []
      }
    }
  };
  
  // Performance optimization - debounce function to limit calculation frequency
  function debounce(func, wait = 300) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  // Initialize tabs
  function initTabs() {
    domElements.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        
        // Update active tab
        domElements.tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update active tab content
        domElements.tabContents.forEach(content => {
          content.classList.remove('active');
        });
        
        document.getElementById(`${tabName}-tab`).classList.add('active');
        state.activeTab = tabName;
        
        // Update summary when switching to summary tab
        if (tabName === 'summary') {
          updateSummary();
        }
        
        // Update URL hash
        window.location.hash = tabName;
      });
    });
    
    // Check URL hash on load to activate the right tab
    const hash = window.location.hash.substring(1);
    if (hash === 'toppings') {
      document.querySelector('.tab[data-tab="toppings"]').click();
    } else if (hash === 'summary') {
      document.querySelector('.tab[data-tab="summary"]').click();
    } else if (hash === 'dough') {
      document.querySelector('.tab[data-tab="dough"]').click();
    }
  }
  
  // Price toggle functionality
  function initPriceToggles() {
    // Dough prices toggle
    domElements.showPricesBtn.addEventListener('click', function() {
      state.showPrices = !state.showPrices;
      this.classList.toggle('active', state.showPrices);
      document.body.classList.toggle('hidden-prices', !state.showPrices);
      
      // Update button text
      this.innerHTML = state.showPrices 
        ? '<i class="fas fa-tag"></i> Hide Prices' 
        : '<i class="fas fa-tag"></i> Show Prices';
      
      calculateDough();
    });
    
    // Topping prices toggle
    domElements.showToppingPricesBtn.addEventListener('click', function() {
      state.showToppingPrices = !state.showToppingPrices;
      this.classList.toggle('active', state.showToppingPrices);
      document.body.classList.toggle('hidden-prices', !state.showToppingPrices);
      
      // Update button text
      this.innerHTML = state.showToppingPrices 
        ? '<i class="fas fa-tag"></i> Hide Prices' 
        : '<i class="fas fa-tag"></i> Show Prices';
      
      calculateAllToppings();
    });
    
    // Initially hide prices
    document.body.classList.add('hidden-prices');
  }
  
  // Dough Calculator Functions
  function initDoughCalculator() {
    // Add event listeners to dough ingredients
    document.querySelectorAll('#dough-ingredients-table input').forEach(input => {
      input.addEventListener('input', debounce(calculateDough));
    });
    
    // Add event listeners to remove ingredient buttons
    document.querySelectorAll('#dough-ingredients-table .remove-item-button').forEach(button => {
      button.addEventListener('click', function() {
        const row = this.closest('tr');
        if (row && row.parentNode && !row.classList.contains('total-row')) {
          row.parentNode.removeChild(row);
          calculateDough();
        }
      });
    });
    
    // Add custom ingredient button
    domElements.addCustomIngredient.addEventListener('click', function() {
      domElements.customIngredientForm.style.display = 'block';
      domElements.customIngredientName.focus();
    });
    
    // Save custom ingredient
    domElements.saveCustomIngredient.addEventListener('click', function() {
      const name = domElements.customIngredientName.value.trim();
      const weight = parseFloat(domElements.customIngredientWeight.value) || 0;
      const price = parseFloat(domElements.customIngredientPrice.value) || 0;
      
      if (name && weight > 0) {
        addDoughIngredientRow(name, weight, price);
        resetCustomIngredientForm();
        calculateDough();
      }
    });
    
    // Cancel custom ingredient
    domElements.cancelCustomIngredient.addEventListener('click', function() {
      resetCustomIngredientForm();
    });
    
    // Batch calculator
    domElements.doughBalls.addEventListener('input', debounce(updateBatch));
    domElements.ballWeight.addEventListener('input', debounce(updateBatch));
    
    // Initial calculations
    calculateDough();
    updateBatch();
  }
  
  function resetCustomIngredientForm() {
    domElements.customIngredientForm.style.display = 'none';
    domElements.customIngredientName.value = '';
    domElements.customIngredientWeight.value = '';
    domElements.customIngredientPrice.value = '';
  }
  
  function addDoughIngredientRow(name, weight, price) {
    const tbody = domElements.doughIngredientsTable.querySelector('tbody');
    const totalRow = tbody.querySelector('.total-row');
    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td><input type="number" class="ingredient-weight" value="${weight}" min="0"></td>
      <td class="price-column"><input type="number" class="price-input" value="${price}" min="0" step="0.1"></td>
      <td class="price-column price-display">$0.00</td>
      <td><button class="remove-item-button"><i class="fa fa-trash"></i></button></td>
    `;
    
    // Add event listeners to new inputs
    newRow.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', debounce(calculateDough));
    });
    
    // Add event listener to remove button
    newRow.querySelector('.remove-item-button').addEventListener('click', function() {
      tbody.removeChild(newRow);
      calculateDough();
    });
    
    // Insert before total row
    tbody.insertBefore(newRow, totalRow);
  }
  
  function calculateDough() {
    try {
      // Clear previous state
      state.doughRecipe.ingredients = [];
      state.doughRecipe.totalWeight = 0;
      state.doughRecipe.totalCost = 0;
      
      // Get all ingredient rows
      const ingredientRows = domElements.doughIngredientsTable.querySelectorAll('tbody tr:not(.total-row)');
      
      let flourWeight = 0;
      let waterWeight = 0;
      let saltWeight = 0;
      let oilWeight = 0;
      let yeastWeight = 0;
      let sugarWeight = 0;
      
      // Process each ingredient row
      ingredientRows.forEach(row => {
        const nameCell = row.cells[0].textContent;
        const weightInput = row.querySelector('.ingredient-weight');
        const priceInput = row.querySelector('.price-input');
        const priceDisplay = row.querySelector('.price-display');
        
        const weight = parseFloat(weightInput.value) || 0;
        const pricePerKg = parseFloat(priceInput.value) || 0;
        const cost = (weight / 1000) * pricePerKg;
        
        // Update price display
        priceDisplay.textContent = `$${cost.toFixed(2)}`;
        
        // Track specific ingredients for recipe analysis
        const ingredientType = weightInput.getAttribute('data-ingredient');
        if (ingredientType === 'flour') flourWeight += weight;
        else if (ingredientType === 'water') waterWeight += weight;
        else if (ingredientType === 'salt') saltWeight += weight;
        else if (ingredientType === 'oil') oilWeight += weight;
        else if (ingredientType === 'yeast') yeastWeight += weight;
        else if (ingredientType === 'sugar') sugarWeight += weight;
        
        // Add to total weight and cost
        state.doughRecipe.totalWeight += weight;
        state.doughRecipe.totalCost += cost;
        
        // Store ingredient data
        state.doughRecipe.ingredients.push({
          name: nameCell,
          weight: weight,
          pricePerKg: pricePerKg,
          cost: cost
        });
      });
      
      // Update total weight and cost display
      domElements.totalDoughWeight.textContent = `${Math.round(state.doughRecipe.totalWeight)}g`;
      domElements.totalDoughCost.textContent = `$${state.doughRecipe.totalCost.toFixed(2)}`;
      
      // Calculate baker's percentages
      if (flourWeight > 0) {
        const hydration = (waterWeight / flourWeight) * 100;
        const saltPercent = (saltWeight / flourWeight) * 100;
        const oilPercent = (oilWeight / flourWeight) * 100;
        const yeastPercent = (yeastWeight / flourWeight) * 100;
        const sugarPercent = (sugarWeight / flourWeight) * 100;
        
        // Update analysis display
        domElements.hydrationValue.textContent = `${Math.round(hydration)}%`;
        domElements.saltValue.textContent = `${saltPercent.toFixed(1)}%`;
        domElements.oilValue.textContent = `${oilPercent.toFixed(1)}%`;
        domElements.yeastValue.textContent = `${yeastPercent.toFixed(1)}%`;
        domElements.sugarValue.textContent = `${sugarPercent.toFixed(1)}%`;
        
        // Store in state for later use
        state.doughRecipe.analysis = {
          hydration: hydration,
          salt: saltPercent,
          oil: oilPercent,
          yeast: yeastPercent,
          sugar: sugarPercent
        };
      }
      
      // Update batch information
      updateBatch();
      
      // Update print view
      updatePrintView();
    } catch (error) {
      console.error('Error in dough calculation:', error);
    }
  }
  
  function updateBatch() {
    // Get input values
    const numBalls = parseInt(domElements.doughBalls.value) || 0;
    const ballWeight = parseInt(domElements.ballWeight.value) || 0;
    
    // Store in state
    state.doughRecipe.batch.numBalls = numBalls;
    state.doughRecipe.batch.ballWeight = ballWeight;
    
    // Calculate total batch weight
    const totalBatchWeight = numBalls * ballWeight;
    
    // Calculate scaling factor
    let scalingFactor = 1;
    if (state.doughRecipe.totalWeight > 0) {
      scalingFactor = totalBatchWeight / state.doughRecipe.totalWeight;
    }
    
    // Generate recipe text for batch
    let batchText = `<strong>Batch Recipe:</strong> Makes ${numBalls} dough balls, ${ballWeight}g each.<br>`;
    batchText += `<strong>Total Batch Weight:</strong> ${totalBatchWeight}g<br>`;
    
    if (scalingFactor !== 1) {
      batchText += `<strong>Ingredients (×${scalingFactor.toFixed(2)}):</strong><br>`;
      
      state.doughRecipe.ingredients.forEach(ingredient => {
        const scaledWeight = Math.round(ingredient.weight * scalingFactor);
        batchText += `${ingredient.name}: ${scaledWeight}g<br>`;
      });
      
      if (state.showPrices) {
        const scaledCost = state.doughRecipe.totalCost * scalingFactor;
        batchText += `<strong>Total Batch Cost:</strong> $${scaledCost.toFixed(2)}`;
      }
    }
    
    // Update display
    domElements.batchResults.innerHTML = batchText;
    domElements.totalDoughInfo.textContent = `Recipe makes ${numBalls} dough balls of ${ballWeight}g each.`;
  }
  
  // Za'atar Topping Calculator
  function initZaatarCalculator() {
    // Add event listeners to za'atar inputs
    domElements.zaatarServings.addEventListener('input', debounce(calculateZaatar));
    domElements.zaatarPerPiece.addEventListener('input', debounce(calculateZaatar));
    
    // Add event listeners to za'atar ingredients
    document.querySelectorAll('#zaatar-ingredients-table input').forEach(input => {
      input.addEventListener('input', debounce(calculateZaatar));
    });
    
    // Add event listeners to remove ingredient buttons
    document.querySelectorAll('#zaatar-ingredients-table .remove-item-button').forEach(button => {
      button.addEventListener('click', function() {
        const row = this.closest('tr');
        if (row && row.parentNode && !row.classList.contains('total-row')) {
          row.parentNode.removeChild(row);
          calculateZaatar();
        }
      });
    });
    
    // Add custom ingredient button
    domElements.addZaatarIngredient.addEventListener('click', function() {
      domElements.zaatarIngredientForm.style.display = 'block';
      domElements.zaatarIngredientName.focus();
    });
    
    // Save custom ingredient
    domElements.saveZaatarIngredient.addEventListener('click', function() {
      const name = domElements.zaatarIngredientName.value.trim();
      const amount = parseFloat(domElements.zaatarIngredientAmount.value) || 0;
      const price = parseFloat(domElements.zaatarIngredientPrice.value) || 0;
      
      if (name && amount > 0) {
        addZaatarIngredientRow(name, amount, price);
        resetZaatarIngredientForm();
        calculateZaatar();
      }
    });
    
    // Cancel custom ingredient
    domElements.cancelZaatarIngredient.addEventListener('click', function() {
      resetZaatarIngredientForm();
    });
    
    // Initial calculation
    calculateZaatar();
  }
  
  function resetZaatarIngredientForm() {
    domElements.zaatarIngredientForm.style.display = 'none';
    domElements.zaatarIngredientName.value = '';
    domElements.zaatarIngredientAmount.value = '';
    domElements.zaatarIngredientPrice.value = '';
  }
  
  function addZaatarIngredientRow(name, amount, price) {
    const tbody = document.querySelector('#zaatar-ingredients-table tbody');
    const totalRow = tbody.querySelector('.total-row');
    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td><input type="number" class="zaatar-ingredient-amount" value="${amount}" min="0"></td>
      <td class="price-column"><input type="number" class="price-input" value="${price}" min="0" step="0.1"></td>
      <td class="price-column price-display">$0.00</td>
      <td><button class="remove-item-button"><i class="fa fa-trash"></i></button></td>
    `;
    
    // Add event listeners to new inputs
    newRow.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', debounce(calculateZaatar));
    });
    
    // Add event listener to remove button
    newRow.querySelector('.remove-item-button').addEventListener('click', function() {
      tbody.removeChild(newRow);
      calculateZaatar();
    });
    
    // Insert before total row
    tbody.insertBefore(newRow, totalRow);
  }
  
  function calculateZaatar() {
    try {
      // Clear previous state
      state.toppings.zaatar.ingredients = [];
      state.toppings.zaatar.totalWeight = 0;
      state.toppings.zaatar.totalCost = 0;
      
      // Get input values
      const servings = parseInt(domElements.zaatarServings.value) || 0;
      const perPiece = parseInt(domElements.zaatarPerPiece.value) || 0;
      
      // Store in state
      state.toppings.zaatar.servings = servings;
      state.toppings.zaatar.perPiece = perPiece;
      
      // Get all ingredient rows
      const ingredientRows = document.querySelectorAll('#zaatar-ingredients-table tbody tr:not(.total-row)');
      
      // Process each ingredient row
      ingredientRows.forEach(row => {
        const nameCell = row.cells[0].textContent;
        const amountInput = row.querySelector('.zaatar-ingredient-amount');
        const priceInput = row.querySelector('.price-input');
        const priceDisplay = row.querySelector('.price-display');
        
        const amount = parseFloat(amountInput.value) || 0;
        const pricePerKg = parseFloat(priceInput.value) || 0;
        const cost = (amount / 1000) * pricePerKg;
        
        // Update price display
        priceDisplay.textContent = `$${cost.toFixed(2)}`;
        
        // Add to total weight and cost
        state.toppings.zaatar.totalWeight += amount;
        state.toppings.zaatar.totalCost += cost;
        
        // Store ingredient data
        state.toppings.zaatar.ingredients.push({
          name: nameCell,
          amount: amount,
          pricePerKg: pricePerKg,
          cost: cost
        });
      });
      
      // Update total weight and cost display
      domElements.zaatarMixWeight.textContent = `${Math.round(state.toppings.zaatar.totalWeight)}g`;
      domElements.zaatarMixCost.textContent = `$${state.toppings.zaatar.totalCost.toFixed(2)}`;
      
      // Calculate total needed for all servings
      const totalNeeded = servings * perPiece;
      
      // Generate result text
      let resultText = `<strong>Total Za'atar mix needed:</strong> ${totalNeeded}g<br>`;
      resultText += `<strong>Mix yield:</strong> ${Math.round(state.toppings.zaatar.totalWeight)}g<br>`;
      
      if (state.toppings.zaatar.totalWeight > 0) {
        const batches = totalNeeded / state.toppings.zaatar.totalWeight;
        resultText += `<strong>Batches needed:</strong> ${batches.toFixed(2)}x<br>`;
        
        if (state.showToppingPrices) {
          const totalCost = state.toppings.zaatar.totalCost * batches;
          const costPerPiece = totalCost / servings;
          resultText += `<strong>Total cost:</strong> $${totalCost.toFixed(2)}<br>`;
          resultText += `<strong>Cost per piece:</strong> $${costPerPiece.toFixed(2)}`;
        }
      }
      
      // Update display
      domElements.zaatarResult.innerHTML = resultText;
      
      // Update print view
      updatePrintView();
    } catch (error) {
      console.error('Error in za\'atar calculation:', error);
    }
  }
  
  // Cheese Topping Calculator
  function initCheeseCalculator() {
    // Add event listeners to cheese inputs
    domElements.cheeseServings.addEventListener('input', debounce(calculateCheese));
    domElements.cheesePerPiece.addEventListener('input', debounce(calculateCheese));
    
    // Add event listeners to cheese ingredients
    document.querySelectorAll('#cheese-ingredients-table input').forEach(input => {
      input.addEventListener('input', debounce(calculateCheese));
    });
    
    // Add event listeners to remove cheese buttons
    document.querySelectorAll('#cheese-ingredients-table .remove-item-button').forEach(button => {
      button.addEventListener('click', function() {
        const row = this.closest('tr');
        if (row && row.parentNode && !row.classList.contains('total-row')) {
          row.parentNode.removeChild(row);
          calculateCheese();
        }
      });
    });
    
    // Add custom cheese type button
    domElements.addCheeseIngredient.addEventListener('click', function() {
      domElements.cheeseIngredientForm.style.display = 'block';
      domElements.cheeseIngredientName.focus();
    });
    
    // Save custom cheese type
    domElements.saveCheeseIngredient.addEventListener('click', function() {
      const name = domElements.cheeseIngredientName.value.trim();
      const percent = parseFloat(domElements.cheeseIngredientPercent.value) || 0;
      const price = parseFloat(domElements.cheeseIngredientPrice.value) || 0;
      
      if (name && percent > 0) {
        addCheeseIngredientRow(name, percent, price);
        resetCheeseIngredientForm();
        calculateCheese();
      }
    });
    
    // Cancel custom cheese type
    domElements.cancelCheeseIngredient.addEventListener('click', function() {
      resetCheeseIngredientForm();
    });
    
    // Initial calculation
    calculateCheese();
  }
  
  function resetCheeseIngredientForm() {
    domElements.cheeseIngredientForm.style.display = 'none';
    domElements.cheeseIngredientName.value = '';
    domElements.cheeseIngredientPercent.value = '';
    domElements.cheeseIngredientPrice.value = '';
  }
  
  function addCheeseIngredientRow(name, percent, price) {
    const tbody = document.querySelector('#cheese-ingredients-table tbody');
    const totalRow = tbody.querySelector('.total-row');
    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td><input type="number" class="cheese-ingredient-percent" value="${percent}" min="0" max="100" step="5"></td>
      <td class="price-column"><input type="number" class="price-input" value="${price}" min="0" step="0.1"></td>
      <td class="price-column price-display">$0.00</td>
      <td><button class="remove-item-button"><i class="fa fa-trash"></i></button></td>
    `;
    
    // Add event listeners to new inputs
    newRow.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', debounce(calculateCheese));
    });
    
    // Add event listener to remove button
    newRow.querySelector('.remove-item-button').addEventListener('click', function() {
      tbody.removeChild(newRow);
      calculateCheese();
    });
    
    // Insert before total row
    tbody.insertBefore(newRow, totalRow);
  }
  
  function calculateCheese() {
    try {
      // Clear previous state
      state.toppings.cheese.cheeseTypes = [];
      state.toppings.cheese.totalCost = 0;
      
      // Get input values
      const servings = parseInt(domElements.cheeseServings.value) || 0;
      const perPiece = parseInt(domElements.cheesePerPiece.value) || 0;
      
      // Store in state
      state.toppings.cheese.servings = servings;
      state.toppings.cheese.perPiece = perPiece;
      
      // Get all cheese type rows
      const cheeseRows = document.querySelectorAll('#cheese-ingredients-table tbody tr:not(.total-row)');
      
      let totalPercent = 0;
      
      // Process each cheese type row
      cheeseRows.forEach(row => {
        const nameCell = row.cells[0].textContent;
        const percentInput = row.querySelector('.cheese-ingredient-percent');
        const priceInput = row.querySelector('.price-input');
        const priceDisplay = row.querySelector('.price-display');
        
        const percent = parseFloat(percentInput.value) || 0;
        const pricePerKg = parseFloat(priceInput.value) || 0;
        
        totalPercent += percent;
        
        // Store cheese type data
        state.toppings.cheese.cheeseTypes.push({
          name: nameCell,
          percent: percent,
          pricePerKg: pricePerKg
        });
      });
      
      // Update total percent display
      domElements.cheesePercentTotal.textContent = `${Math.round(totalPercent)}%`;
      
      // Check if total is 100%
      const validPercentage = Math.abs(totalPercent - 100) < 1;
      domElements.cheeseProportionError.style.display = validPercentage ? 'none' : 'block';
      
      // Calculate total needed and cost
      const totalNeeded = servings * perPiece;
      let totalCost = 0;
      
      if (validPercentage) {
        // Calculate cost for each cheese type
        state.toppings.cheese.cheeseTypes.forEach(cheese => {
          const amount = (cheese.percent / 100) * totalNeeded;
          const cost = (amount / 1000) * cheese.pricePerKg;
          
          cheese.amount = amount;
          cheese.cost = cost;
          
          totalCost += cost;
        });
        
        // Update cost displays in the table
        cheeseRows.forEach((row, index) => {
          const priceDisplay = row.querySelector('.price-display');
          const cheese = state.toppings.cheese.cheeseTypes[index];
          priceDisplay.textContent = `$${cheese.cost.toFixed(2)}`;
        });
        
        // Update total cost display
        domElements.cheeseMixCost.textContent = `$${totalCost.toFixed(2)}`;
        
        // Store total cost in state
        state.toppings.cheese.totalCost = totalCost;
      }
      
      // Generate result text
      let resultText = `<strong>Total cheese needed:</strong> ${totalNeeded}g<br>`;
      
      if (validPercentage) {
        state.toppings.cheese.cheeseTypes.forEach(cheese => {
          resultText += `<strong>${cheese.name}:</strong> ${Math.round(cheese.amount)}g<br>`;
        });
        
        if (state.showToppingPrices) {
          const costPerPiece = totalCost / servings;
          resultText += `<strong>Total cost:</strong> $${totalCost.toFixed(2)}<br>`;
          resultText += `<strong>Cost per piece:</strong> $${costPerPiece.toFixed(2)}`;
        }
      }
      
      // Update display
      domElements.cheeseResult.innerHTML = resultText;
      
      // Update print view
      updatePrintView();
    } catch (error) {
      console.error('Error in cheese calculation:', error);
    }
  }
  
  // Meat Topping Calculator
  function initMeatCalculator() {
    // Add event listeners to meat inputs
    domElements.meatServings.addEventListener('input', debounce(calculateMeat));
    domElements.meatPerPiece.addEventListener('input', debounce(calculateMeat));
    
    // Add event listeners to meat ingredients
    document.querySelectorAll('#meat-ingredients-table input').forEach(input => {
      input.addEventListener('input', debounce(calculateMeat));
    });
    
    // Add event listeners to remove ingredient buttons
    document.querySelectorAll('#meat-ingredients-table .remove-item-button').forEach(button => {
      button.addEventListener('click', function() {
        const row = this.closest('tr');
        if (row && row.parentNode && !row.classList.contains('total-row')) {
          row.parentNode.removeChild(row);
          calculateMeat();
        }
      });
    });
    
    // Add custom ingredient button
    domElements.addMeatIngredient.addEventListener('click', function() {
      domElements.meatIngredientForm.style.display = 'block';
      domElements.meatIngredientName.focus();
    });
    
    // Save custom ingredient
    domElements.saveMeatIngredient.addEventListener('click', function() {
      const name = domElements.meatIngredientName.value.trim();
      const amount = parseFloat(domElements.meatIngredientAmount.value) || 0;
      const price = parseFloat(domElements.meatIngredientPrice.value) || 0;
      
      if (name && amount > 0) {
        addMeatIngredientRow(name, amount, price);
        resetMeatIngredientForm();
        calculateMeat();
      }
    });
    
    // Cancel custom ingredient
    domElements.cancelMeatIngredient.addEventListener('click', function() {
      resetMeatIngredientForm();
    });
    
    // Initial calculation
    calculateMeat();
  }
  
  function resetMeatIngredientForm() {
    domElements.meatIngredientForm.style.display = 'none';
    domElements.meatIngredientName.value = '';
    domElements.meatIngredientAmount.value = '';
    domElements.meatIngredientPrice.value = '';
  }
  
  function addMeatIngredientRow(name, amount, price) {
    const tbody = document.querySelector('#meat-ingredients-table tbody');
    const totalRow = tbody.querySelector('.total-row');
    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td><input type="number" class="meat-ingredient-amount" value="${amount}" min="0"></td>
      <td class="price-column"><input type="number" class="price-input" value="${price}" min="0" step="0.1"></td>
      <td class="price-column price-display">$0.00</td>
      <td><button class="remove-item-button"><i class="fa fa-trash"></i></button></td>
    `;
    
    // Add event listeners to new inputs
    newRow.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', debounce(calculateMeat));
    });
    
    // Add event listener to remove button
    newRow.querySelector('.remove-item-button').addEventListener('click', function() {
      tbody.removeChild(newRow);
      calculateMeat();
    });
    
    // Insert before total row
    tbody.insertBefore(newRow, totalRow);
  }
  
  function calculateMeat() {
    try {
      // Clear previous state
      state.toppings.meat.ingredients = [];
      state.toppings.meat.totalWeight = 0;
      state.toppings.meat.totalCost = 0;
      
      // Get input values
      const servings = parseInt(domElements.meatServings.value) || 0;
      const perPiece = parseInt(domElements.meatPerPiece.value) || 0;
      
      // Store in state
      state.toppings.meat.servings = servings;
      state.toppings.meat.perPiece = perPiece;
      
      // Get all ingredient rows
      const ingredientRows = document.querySelectorAll('#meat-ingredients-table tbody tr:not(.total-row)');
      
      // Process each ingredient row
      ingredientRows.forEach(row => {
        const nameCell = row.cells[0].textContent;
        const amountInput = row.querySelector('.meat-ingredient-amount');
        const priceInput = row.querySelector('.price-input');
        const priceDisplay = row.querySelector('.price-display');
        
        const amount = parseFloat(amountInput.value) || 0;
        const pricePerKg = parseFloat(priceInput.value) || 0;
        const cost = (amount / 1000) * pricePerKg;
        
        // Update price display
        priceDisplay.textContent = `$${cost.toFixed(2)}`;
        
        // Add to total weight and cost
        state.toppings.meat.totalWeight += amount;
        state.toppings.meat.totalCost += cost;
        
        // Store ingredient data
        state.toppings.meat.ingredients.push({
          name: nameCell,
          amount: amount,
          pricePerKg: pricePerKg,
          cost: cost
        });
      });
      
      // Update total weight and cost display
      domElements.meatMixWeight.textContent = `${Math.round(state.toppings.meat.totalWeight)}g`;
      domElements.meatMixCost.textContent = `$${state.toppings.meat.totalCost.toFixed(2)}`;
      
      // Calculate total needed for all servings
      const totalNeeded = servings * perPiece;
      
      // Generate result text
      let resultText = `<strong>Total meat mix needed:</strong> ${totalNeeded}g<br>`;
      resultText += `<strong>Mix yield:</strong> ${Math.round(state.toppings.meat.totalWeight)}g<br>`;
      
      if (state.toppings.meat.totalWeight > 0) {
        const batches = totalNeeded / state.toppings.meat.totalWeight;
        resultText += `<strong>Batches needed:</strong> ${batches.toFixed(2)}x<br>`;
        
        if (state.showToppingPrices) {
          const totalCost = state.toppings.meat.totalCost * batches;
          const costPerPiece = totalCost / servings;
          resultText += `<strong>Total cost:</strong> $${totalCost.toFixed(2)}<br>`;
          resultText += `<strong>Cost per piece:</strong> $${costPerPiece.toFixed(2)}`;
        }
      }
      
      // Update display
      domElements.meatResult.innerHTML = resultText;
      
      // Update print view
      updatePrintView();
    } catch (error) {
      console.error('Error in meat calculation:', error);
    }
  }
  
  // Banana Chocolate Topping Calculator
  function initBananaCalculator() {
    // Add event listeners to banana inputs
    domElements.bananaServings.addEventListener('input', debounce(calculateBanana));
    domElements.bananaPerPiece.addEventListener('input', debounce(calculateBanana));
    
    // Add event listeners to banana ingredients
    document.querySelectorAll('#banana-ingredients-table input').forEach(input => {
      input.addEventListener('input', debounce(calculateBanana));
    });
    
    // Add event listeners to remove ingredient buttons
    document.querySelectorAll('#banana-ingredients-table .remove-item-button').forEach(button => {
      button.addEventListener('click', function() {
        const row = this.closest('tr');
        if (row && row.parentNode && !row.classList.contains('total-row')) {
          row.parentNode.removeChild(row);
          calculateBanana();
        }
      });
    });
    
    // Add custom ingredient button
    domElements.addBananaIngredient.addEventListener('click', function() {
      domElements.bananaIngredientForm.style.display = 'block';
      domElements.bananaIngredientName.focus();
    });
    
    // Save custom ingredient
    domElements.saveBananaIngredient.addEventListener('click', function() {
      const name = domElements.bananaIngredientName.value.trim();
      const amount = parseFloat(domElements.bananaIngredientAmount.value) || 0;
      const price = parseFloat(domElements.bananaIngredientPrice.value) || 0;
      
      if (name && amount > 0) {
        addBananaIngredientRow(name, amount, price);
        resetBananaIngredientForm();
        calculateBanana();
      }
    });
    
    // Cancel custom ingredient
    domElements.cancelBananaIngredient.addEventListener('click', function() {
      resetBananaIngredientForm();
    });
    
    // Initial calculation
    calculateBanana();
  }
  
  function resetBananaIngredientForm() {
    domElements.bananaIngredientForm.style.display = 'none';
    domElements.bananaIngredientName.value = '';
    domElements.bananaIngredientAmount.value = '';
    domElements.bananaIngredientPrice.value = '';
  }
  
  function addBananaIngredientRow(name, amount, price) {
    const tbody = document.querySelector('#banana-ingredients-table tbody');
    const totalRow = tbody.querySelector('.total-row');
    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td><input type="number" class="banana-ingredient-amount" value="${amount}" min="0"></td>
      <td class="price-column"><input type="number" class="price-input" value="${price}" min="0" step="0.1"></td>
      <td class="price-column price-display">$0.00</td>
      <td><button class="remove-item-button"><i class="fa fa-trash"></i></button></td>
    `;
    
    // Add event listeners to new inputs
    newRow.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', debounce(calculateBanana));
    });
    
    // Add event listener to remove button
    newRow.querySelector('.remove-item-button').addEventListener('click', function() {
      tbody.removeChild(newRow);
      calculateBanana();
    });
    
    // Insert before total row
    tbody.insertBefore(newRow, totalRow);
  }
  
  function calculateBanana() {
    try {
      // Clear previous state
      state.toppings.banana.ingredients = [];
      state.toppings.banana.totalWeight = 0;
      state.toppings.banana.totalCost = 0;
      
      // Get input values
      const servings = parseInt(domElements.bananaServings.value) || 0;
      const perPiece = parseInt(domElements.bananaPerPiece.value) || 0;
      
      // Store in state
      state.toppings.banana.servings = servings;
      state.toppings.banana.perPiece = perPiece;
      
      // Get all ingredient rows
      const ingredientRows = document.querySelectorAll('#banana-ingredients-table tbody tr:not(.total-row)');
      
      // Process each ingredient row
      ingredientRows.forEach(row => {
        const nameCell = row.cells[0].textContent;
        const amountInput = row.querySelector('.banana-ingredient-amount');
        const priceInput = row.querySelector('.price-input');
        const priceDisplay = row.querySelector('.price-display');
        
        const amount = parseFloat(amountInput.value) || 0;
        const pricePerKg = parseFloat(priceInput.value) || 0;
        const cost = (amount / 1000) * pricePerKg;
        
        // Update price display
        priceDisplay.textContent = `$${cost.toFixed(2)}`;
        
        // Add to total weight and cost
        state.toppings.banana.totalWeight += amount;
        state.toppings.banana.totalCost += cost;
        
        // Store ingredient data
        state.toppings.banana.ingredients.push({
          name: nameCell,
          amount: amount,
          pricePerKg: pricePerKg,
          cost: cost
        });
      });
      
      // Update total weight and cost display
      domElements.bananaMixWeight.textContent = `${Math.round(state.toppings.banana.totalWeight)}g`;
      domElements.bananaMixCost.textContent = `$${state.toppings.banana.totalCost.toFixed(2)}`;
      
      // Calculate total needed for all servings
      const totalNeeded = servings * perPiece;
      
      // Generate result text
      let resultText = `<strong>Total chocolate-banana mix needed:</strong> ${totalNeeded}g<br>`;
      resultText += `<strong>Mix yield:</strong> ${Math.round(state.toppings.banana.totalWeight)}g<br>`;
      
      if (state.toppings.banana.totalWeight > 0) {
        const batches = totalNeeded / state.toppings.banana.totalWeight;
        resultText += `<strong>Batches needed:</strong> ${batches.toFixed(2)}x<br>`;
        
        if (state.showToppingPrices) {
          const totalCost = state.toppings.banana.totalCost * batches;
          const costPerPiece = totalCost / servings;
          resultText += `<strong>Total cost:</strong> $${totalCost.toFixed(2)}<br>`;
          resultText += `<strong>Cost per piece:</strong> $${costPerPiece.toFixed(2)}`;
        }
      }
      
      // Update display
      domElements.bananaResult.innerHTML = resultText;
      
      // Update print view
      updatePrintView();
    } catch (error) {
      console.error('Error in banana calculation:', error);
    }
  }
  
  function calculateAllToppings() {
    calculateZaatar();
    calculateCheese();
    calculateMeat();
    calculateBanana();
  }
  
  // Summary Tab Functions
  function updateSummary() {
    // Only update if the summary tab is active
    if (state.activeTab !== 'summary') return;
    
    try {
      // Production Overview
      updateProductionSummary();
      
      // Dough Ingredients Summary
      updateDoughSummary();
      
      // Topping Ingredients Summary
      updateToppingsSummary();
      
      // Total Project Cost
      updateCostSummary();
      
      // Update print view
      updatePrintView();
    } catch (error) {
      console.error('Error in summary calculation:', error);
    }
  }
  
  function updateProductionSummary() {
    const tbody = domElements.summaryProduction;
    tbody.innerHTML = '';
    
    // Add dough balls
    const doughRow = document.createElement('tr');
    doughRow.innerHTML = `
      <td>Manakish Dough Balls</td>
      <td>${state.doughRecipe.batch.numBalls}</td>
      <td class="price-column">$${(state.doughRecipe.totalCost / state.doughRecipe.batch.numBalls).toFixed(2)}</td>
      <td class="price-column">$${state.doughRecipe.totalCost.toFixed(2)}</td>
    `;
    tbody.appendChild(doughRow);
    
    // Add Za'atar Manakish
    if (state.toppings.zaatar.servings > 0) {
      const totalNeeded = state.toppings.zaatar.servings * state.toppings.zaatar.perPiece;
      const batches = totalNeeded / state.toppings.zaatar.totalWeight;
      const totalCost = state.toppings.zaatar.totalCost * batches;
      const costPerPiece = totalCost / state.toppings.zaatar.servings;
      
      const zaatarRow = document.createElement('tr');
      zaatarRow.innerHTML = `
        <td>Za'atar Manakish</td>
        <td>${state.toppings.zaatar.servings}</td>
        <td class="price-column">$${costPerPiece.toFixed(2)}</td>
        <td class="price-column">$${totalCost.toFixed(2)}</td>
      `;
      tbody.appendChild(zaatarRow);
    }
    
    // Add Cheese Manakish
    if (state.toppings.cheese.servings > 0) {
      const costPerPiece = state.toppings.cheese.totalCost / state.toppings.cheese.servings;
      
      const cheeseRow = document.createElement('tr');
      cheeseRow.innerHTML = `
        <td>Cheese Manakish</td>
        <td>${state.toppings.cheese.servings}</td>
        <td class="price-column">$${costPerPiece.toFixed(2)}</td>
        <td class="price-column">$${state.toppings.cheese.totalCost.toFixed(2)}</td>
      `;
      tbody.appendChild(cheeseRow);
    }
    
    // Add Meat Manakish
    if (state.toppings.meat.servings > 0) {
      const totalNeeded = state.toppings.meat.servings * state.toppings.meat.perPiece;
      const batches = totalNeeded / state.toppings.meat.totalWeight;
      const totalCost = state.toppings.meat.totalCost * batches;
      const costPerPiece = totalCost / state.toppings.meat.servings;
      
      const meatRow = document.createElement('tr');
      meatRow.innerHTML = `
        <td>Meat Manakish</td>
        <td>${state.toppings.meat.servings}</td>
        <td class="price-column">$${costPerPiece.toFixed(2)}</td>
        <td class="price-column">$${totalCost.toFixed(2)}</td>
      `;
      tbody.appendChild(meatRow);
    }
    
    // Add Banana Chocolate Manakish
    if (state.toppings.banana.servings > 0) {
      const totalNeeded = state.toppings.banana.servings * state.toppings.banana.perPiece;
      const batches = totalNeeded / state.toppings.banana.totalWeight;
      const totalCost = state.toppings.banana.totalCost * batches;
      const costPerPiece = totalCost / state.toppings.banana.servings;
      
      const bananaRow = document.createElement('tr');
      bananaRow.innerHTML = `
        <td>Chocolate Banana Manakish</td>
        <td>${state.toppings.banana.servings}</td>
        <td class="price-column">$${costPerPiece.toFixed(2)}</td>
        <td class="price-column">$${totalCost.toFixed(2)}</td>
      `;
      tbody.appendChild(bananaRow);
    }
    
    // Add total row
    const totalRow = document.createElement('tr');
    totalRow.className = 'total-row';
    
    const totalQuantity = state.doughRecipe.batch.numBalls;
    
    const totalCost = state.doughRecipe.totalCost + 
                      (state.toppings.zaatar.servings > 0 ? state.toppings.zaatar.totalCost * (state.toppings.zaatar.servings * state.toppings.zaatar.perPiece / state.toppings.zaatar.totalWeight) : 0) +
                      state.toppings.cheese.totalCost +
                      (state.toppings.meat.servings > 0 ? state.toppings.meat.totalCost * (state.toppings.meat.servings * state.toppings.meat.perPiece / state.toppings.meat.totalWeight) : 0) +
                      (state.toppings.banana.servings > 0 ? state.toppings.banana.totalCost * (state.toppings.banana.servings * state.toppings.banana.perPiece / state.toppings.banana.totalWeight) : 0);
    
    totalRow.innerHTML = `
      <td>Total</td>
      <td>${totalQuantity}</td>
      <td class="price-column"></td>
      <td class="price-column">$${totalCost.toFixed(2)}</td>
    `;
    tbody.appendChild(totalRow);
  }
  
  function updateDoughSummary() {
    const tbody = domElements.summaryDough;
    tbody.innerHTML = '';
    
    // Calculate scaling factor for batch
    const totalBatchWeight = state.doughRecipe.batch.numBalls * state.doughRecipe.batch.ballWeight;
    const scalingFactor = state.doughRecipe.totalWeight > 0 ? totalBatchWeight / state.doughRecipe.totalWeight : 1;
    
    // Add each dough ingredient
    state.doughRecipe.ingredients.forEach(ingredient => {
      const scaledWeight = Math.round(ingredient.weight * scalingFactor);
      const scaledCost = ingredient.cost * scalingFactor;
      
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${ingredient.name}</td>
        <td>${scaledWeight}g</td>
        <td class="price-column">$${scaledCost.toFixed(2)}</td>
      `;
      tbody.appendChild(row);
    });
    
    // Add total row
    const totalRow = document.createElement('tr');
    totalRow.className = 'total-row';
    
    const scaledTotalCost = state.doughRecipe.totalCost * scalingFactor;
    
    totalRow.innerHTML = `
      <td>Total Dough</td>
      <td>${Math.round(totalBatchWeight)}g</td>
      <td class="price-column">$${scaledTotalCost.toFixed(2)}</td>
    `;
    tbody.appendChild(totalRow);
  }
  
  function updateToppingsSummary() {
    const tbody = domElements.summaryToppings;
    tbody.innerHTML = '';
    
    // Create category row for Za'atar
    if (state.toppings.zaatar.servings > 0) {
      const categoryRow = document.createElement('tr');
      categoryRow.className = 'category-row';
      categoryRow.innerHTML = `
        <td colspan="3">Za'atar Topping (${state.toppings.zaatar.servings} servings)</td>
      `;
      tbody.appendChild(categoryRow);
      
      // Calculate scaling factor for za'atar
      const totalNeeded = state.toppings.zaatar.servings * state.toppings.zaatar.perPiece;
      const batches = state.toppings.zaatar.totalWeight > 0 ? totalNeeded / state.toppings.zaatar.totalWeight : 0;
      
      // Add za'atar ingredients
      state.toppings.zaatar.ingredients.forEach(ingredient => {
        const scaledAmount = Math.round(ingredient.amount * batches);
        const scaledCost = ingredient.cost * batches;
        
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${ingredient.name}</td>
          <td>${scaledAmount}g</td>
          <td class="price-column">$${scaledCost.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
      });
    }
    
    // Create category row for Cheese
    if (state.toppings.cheese.servings > 0) {
      const categoryRow = document.createElement('tr');
      categoryRow.className = 'category-row';
      categoryRow.innerHTML = `
        <td colspan="3">Cheese Topping (${state.toppings.cheese.servings} servings)</td>
      `;
      tbody.appendChild(categoryRow);
      
      // Calculate total needed
      const totalNeeded = state.toppings.cheese.servings * state.toppings.cheese.perPiece;
      
      // Add cheese types
      state.toppings.cheese.cheeseTypes.forEach(cheese => {
        const amount = (cheese.percent / 100) * totalNeeded;
        const cost = (amount / 1000) * cheese.pricePerKg;
        
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${cheese.name}</td>
          <td>${Math.round(amount)}g</td>
          <td class="price-column">$${cost.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
      });
    }
    
    // Create category row for Meat
    if (state.toppings.meat.servings > 0) {
      const categoryRow = document.createElement('tr');
      categoryRow.className = 'category-row';
      categoryRow.innerHTML = `
        <td colspan="3">Meat Topping (${state.toppings.meat.servings} servings)</td>
      `;
      tbody.appendChild(categoryRow);
      
      // Calculate scaling factor for meat
      const totalNeeded = state.toppings.meat.servings * state.toppings.meat.perPiece;
      const batches = state.toppings.meat.totalWeight > 0 ? totalNeeded / state.toppings.meat.totalWeight : 0;
      
      // Add meat ingredients
      state.toppings.meat.ingredients.forEach(ingredient => {
        const scaledAmount = Math.round(ingredient.amount * batches);
        const scaledCost = ingredient.cost * batches;
        
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${ingredient.name}</td>
          <td>${scaledAmount}g</td>
          <td class="price-column">$${scaledCost.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
      });
    }
    
    // Create category row for Banana
    if (state.toppings.banana.servings > 0) {
      const categoryRow = document.createElement('tr');
      categoryRow.className = 'category-row';
      categoryRow.innerHTML = `
        <td colspan="3">Chocolate Banana Topping (${state.toppings.banana.servings} servings)</td>
      `;
      tbody.appendChild(categoryRow);
      
      // Calculate scaling factor for banana
      const totalNeeded = state.toppings.banana.servings * state.toppings.banana.perPiece;
      const batches = state.toppings.banana.totalWeight > 0 ? totalNeeded / state.toppings.banana.totalWeight : 0;
      
      // Add banana ingredients
      state.toppings.banana.ingredients.forEach(ingredient => {
        const scaledAmount = Math.round(ingredient.amount * batches);
        const scaledCost = ingredient.cost * batches;
        
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${ingredient.name}</td>
          <td>${scaledAmount}g</td>
          <td class="price-column">$${scaledCost.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
      });
    }
    
    // Add total row
    const totalRow = document.createElement('tr');
    totalRow.className = 'total-row';
    
    // Calculate total toppings cost
    const totalZaatarCost = state.toppings.zaatar.servings > 0 ? 
                         state.toppings.zaatar.totalCost * (state.toppings.zaatar.servings * state.toppings.zaatar.perPiece / state.toppings.zaatar.totalWeight) : 0;
    
    const totalCheeseCost = state.toppings.cheese.totalCost;
    
    const totalMeatCost = state.toppings.meat.servings > 0 ? 
                       state.toppings.meat.totalCost * (state.toppings.meat.servings * state.toppings.meat.perPiece / state.toppings.meat.totalWeight) : 0;
    
    const totalBananaCost = state.toppings.banana.servings > 0 ? 
                         state.toppings.banana.totalCost * (state.toppings.banana.servings * state.toppings.banana.perPiece / state.toppings.banana.totalWeight) : 0;
    
    const totalToppingsCost = totalZaatarCost + totalCheeseCost + totalMeatCost + totalBananaCost;
    
    totalRow.innerHTML = `
      <td>Total Toppings</td>
      <td></td>
      <td class="price-column">$${totalToppingsCost.toFixed(2)}</td>
    `;
    tbody.appendChild(totalRow);
  }
  
  function updateCostSummary() {
    const tbody = domElements.summaryCosts;
    tbody.innerHTML = '';
    
    // Calculate total costs
    const totalBatchWeight = state.doughRecipe.batch.numBalls * state.doughRecipe.batch.ballWeight;
    const scalingFactor = state.doughRecipe.totalWeight > 0 ? totalBatchWeight / state.doughRecipe.totalWeight : 1;
    const doughCost = state.doughRecipe.totalCost * scalingFactor;
    
    const totalZaatarCost = state.toppings.zaatar.servings > 0 ? 
                         state.toppings.zaatar.totalCost * (state.toppings.zaatar.servings * state.toppings.zaatar.perPiece / state.toppings.zaatar.totalWeight) : 0;
    
    const totalCheeseCost = state.toppings.cheese.totalCost;
    
    const totalMeatCost = state.toppings.meat.servings > 0 ? 
                       state.toppings.meat.totalCost * (state.toppings.meat.servings * state.toppings.meat.perPiece / state.toppings.meat.totalWeight) : 0;
    
    const totalBananaCost = state.toppings.banana.servings > 0 ? 
                         state.toppings.banana.totalCost * (state.toppings.banana.servings * state.toppings.banana.perPiece / state.toppings.banana.totalWeight) : 0;
    
    const totalToppingsCost = totalZaatarCost + totalCheeseCost + totalMeatCost + totalBananaCost;
    
    const totalProjectCost = doughCost + totalToppingsCost;
    
    // Add dough cost row
    const doughRow = document.createElement('tr');
    doughRow.innerHTML = `
      <td>Dough</td>
      <td class="price-column">$${doughCost.toFixed(2)}</td>
      <td class="price-column">${totalProjectCost > 0 ? ((doughCost / totalProjectCost) * 100).toFixed(1) : 0}%</td>
    `;
    tbody.appendChild(doughRow);
    
    // Add toppings cost row
    const toppingsRow = document.createElement('tr');
    toppingsRow.innerHTML = `
      <td>Toppings</td>
      <td class="price-column">$${totalToppingsCost.toFixed(2)}</td>
      <td class="price-column">${totalProjectCost > 0 ? ((totalToppingsCost / totalProjectCost) * 100).toFixed(1) : 0}%</td>
    `;
    tbody.appendChild(toppingsRow);
    
    // Add total row
    const totalRow = document.createElement('tr');
    totalRow.className = 'total-row';
    totalRow.innerHTML = `
      <td>Total Project Cost</td>
      <td class="price-column">$${totalProjectCost.toFixed(2)}</td>
      <td class="price-column">100%</td>
    `;
    tbody.appendChild(totalRow);
  }
  
  // Print and Share Functions
  function initShareAndPrint() {
    // Share recipe button
    domElements.shareRecipe.addEventListener('click', function() {
      const shareUrl = generateShareUrl();
      domElements.shareUrl.value = shareUrl;
      domElements.shareModal.style.display = 'block';
    });
    
    // Copy share URL button
    domElements.copyShareUrl.addEventListener('click', function() {
      copyToClipboard(domElements.shareUrl.value);
      showToast('Share link copied to clipboard!');
      domElements.shareModal.style.display = 'none';
    });
    
    // Copy recipe button
    domElements.copyRecipe.addEventListener('click', function() {
      const recipeText = generateRecipeText();
      copyToClipboard(recipeText);
      showToast('Recipe copied to clipboard!');
    });
    
    // Print recipe button
    domElements.printRecipe.addEventListener('click', function() {
      updatePrintView();
      window.print();
    });
    
    // Share toppings button
    domElements.shareToppings.addEventListener('click', function() {
      const shareUrl = generateToppingsShareUrl();
      domElements.shareToppingsUrl.value = shareUrl;
      domElements.shareToppingsModal.style.display = 'block';
    });
    
    // Copy toppings share URL button
    domElements.copyToppingsShareUrl.addEventListener('click', function() {
      copyToClipboard(domElements.shareToppingsUrl.value);
      showToast('Share link copied to clipboard!');
      domElements.shareToppingsModal.style.display = 'none';
    });
    
    // Copy toppings button
    domElements.copyToppings.addEventListener('click', function() {
      const toppingsText = generateToppingsText();
      copyToClipboard(toppingsText);
      showToast('Toppings recipes copied to clipboard!');
    });
    
    // Print toppings button
    domElements.printToppings.addEventListener('click', function() {
      updatePrintView();
      window.print();
    });
    
    // Print BOQ button
    domElements.printBOQ.addEventListener('click', function() {
      updatePrintView();
      window.print();
    });
    
    // Close modal buttons
    domElements.closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
          modal.style.display = 'none';
        }
      });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    });
    
    // Load from URL hash if present
    loadFromUrl();
  }
  
  function generateShareUrl() {
    try {
      // Create data object
      const data = {
        dough: {
          ingredients: state.doughRecipe.ingredients.map(ingredient => ({
            name: ingredient.name,
            weight: ingredient.weight,
            price: ingredient.pricePerKg
          })),
          batch: state.doughRecipe.batch
        }
      };
      
      // Compress data
      const jsonStr = JSON.stringify(data);
      const compressed = LZString.compressToEncodedURIComponent(jsonStr);
      
      // Generate URL
      const baseUrl = window.location.href.split('#')[0];
      return `${baseUrl}#dough?data=${compressed}`;
    } catch (error) {
      console.error('Error generating share URL:', error);
      return window.location.href;
    }
  }
  
  function generateToppingsShareUrl() {
    try {
      // Create data object
      const data = {
        toppings: {
          zaatar: {
            servings: state.toppings.zaatar.servings,
            perPiece: state.toppings.zaatar.perPiece,
            ingredients: state.toppings.zaatar.ingredients.map(ingredient => ({
              name: ingredient.name,
              amount: ingredient.amount,
              price: ingredient.pricePerKg
            }))
          },
          cheese: {
            servings: state.toppings.cheese.servings,
            perPiece: state.toppings.cheese.perPiece,
            cheeseTypes: state.toppings.cheese.cheeseTypes.map(cheese => ({
              name: cheese.name,
              percent: cheese.percent,
              price: cheese.pricePerKg
            }))
          },
          meat: {
            servings: state.toppings.meat.servings,
            perPiece: state.toppings.meat.perPiece,
            ingredients: state.toppings.meat.ingredients.map(ingredient => ({
              name: ingredient.name,
              amount: ingredient.amount,
              price: ingredient.pricePerKg
            }))
          },
          banana: {
            servings: state.toppings.banana.servings,
            perPiece: state.toppings.banana.perPiece,
            ingredients: state.toppings.banana.ingredients.map(ingredient => ({
              name: ingredient.name,
              amount: ingredient.amount,
              price: ingredient.pricePerKg
            }))
          }
        }
      };
      
      // Compress data
      const jsonStr = JSON.stringify(data);
      const compressed = LZString.compressToEncodedURIComponent(jsonStr);
      
      // Generate URL
      const baseUrl = window.location.href.split('#')[0];
      return `${baseUrl}#toppings?data=${compressed}`;
    } catch (error) {
      console.error('Error generating toppings share URL:', error);
      return window.location.href;
    }
  }
  
  function loadFromUrl() {
    try {
      // Check if URL has data parameter
      const hash = window.location.hash;
      if (!hash || hash.indexOf('?data=') === -1) return;
      
      // Extract compressed data
      const compressed = hash.split('?data=')[1];
      if (!compressed) return;
      
      // Decompress data
      const jsonStr = LZString.decompressFromEncodedURIComponent(compressed);
      if (!jsonStr) return;
      
      const data = JSON.parse(jsonStr);
      
      // Load dough data
      if (data.dough) {
        // Clear existing ingredients
        const tbody = domElements.doughIngredientsTable.querySelector('tbody');
        const totalRow = tbody.querySelector('.total-row');
        
        // Remove all rows except total row
        while (tbody.firstChild && !tbody.firstChild.classList.contains('total-row')) {
          tbody.removeChild(tbody.firstChild);
        }
        
        // Add imported ingredients
        data.dough.ingredients.forEach(ingredient => {
          addDoughIngredientRow(ingredient.name, ingredient.weight, ingredient.price);
        });
        
        // Set batch values
        if (data.dough.batch) {
          domElements.doughBalls.value = data.dough.batch.numBalls;
          domElements.ballWeight.value = data.dough.batch.ballWeight;
        }
        
        // Recalculate dough
        calculateDough();
      }
      
      // Load toppings data
      if (data.toppings) {
        // Load Za'atar data
        if (data.toppings.zaatar) {
          // Set serving values
          domElements.zaatarServings.value = data.toppings.zaatar.servings;
          domElements.zaatarPerPiece.value = data.toppings.zaatar.perPiece;
          
          // Clear existing ingredients
          const tbody = document.querySelector('#zaatar-ingredients-table tbody');
          const totalRow = tbody.querySelector('.total-row');
          
          // Remove all rows except total row
          while (tbody.firstChild && !tbody.firstChild.classList.contains('total-row')) {
            tbody.removeChild(tbody.firstChild);
          }
          
          // Add imported ingredients
          data.toppings.zaatar.ingredients.forEach(ingredient => {
            addZaatarIngredientRow(ingredient.name, ingredient.amount, ingredient.price);
          });
          
          // Recalculate za'atar
          calculateZaatar();
        }
        
        // Load Cheese data
        if (data.toppings.cheese) {
          // Set serving values
          domElements.cheeseServings.value = data.toppings.cheese.servings;
          domElements.cheesePerPiece.value = data.toppings.cheese.perPiece;
          
          // Clear existing cheese types
          const tbody = document.querySelector('#cheese-ingredients-table tbody');
          const totalRow = tbody.querySelector('.total-row');
          
          // Remove all rows except total row
          while (tbody.firstChild && !tbody.firstChild.classList.contains('total-row')) {
            tbody.removeChild(tbody.firstChild);
          }
          
          // Add imported cheese types
          data.toppings.cheese.cheeseTypes.forEach(cheese => {
            addCheeseIngredientRow(cheese.name, cheese.percent, cheese.price);
          });
          
          // Recalculate cheese
          calculateCheese();
        }
        
        // Load Meat data
        if (data.toppings.meat) {
          // Set serving values
          domElements.meatServings.value = data.toppings.meat.servings;
          domElements.meatPerPiece.value = data.toppings.meat.perPiece;
          
          // Clear existing ingredients
          const tbody = document.querySelector('#meat-ingredients-table tbody');
          const totalRow = tbody.querySelector('.total-row');
          
          // Remove all rows except total row
          while (tbody.firstChild && !tbody.firstChild.classList.contains('total-row')) {
            tbody.removeChild(tbody.firstChild);
          }
          
          // Add imported ingredients
          data.toppings.meat.ingredients.forEach(ingredient => {
            addMeatIngredientRow(ingredient.name, ingredient.amount, ingredient.price);
          });
          
          // Recalculate meat
          calculateMeat();
        }
        
        // Load Banana data
        if (data.toppings.banana) {
          // Set serving values
          domElements.bananaServings.value = data.toppings.banana.servings;
          domElements.bananaPerPiece.value = data.toppings.banana.perPiece;
          
          // Clear existing ingredients
          const tbody = document.querySelector('#banana-ingredients-table tbody');
          const totalRow = tbody.querySelector('.total-row');
          
          // Remove all rows except total row
          while (tbody.firstChild && !tbody.firstChild.classList.contains('total-row')) {
            tbody.removeChild(tbody.firstChild);
          }
          
          // Add imported ingredients
          data.toppings.banana.ingredients.forEach(ingredient => {
            addBananaIngredientRow(ingredient.name, ingredient.amount, ingredient.price);
          });
          
          // Recalculate banana
          calculateBanana();
        }
      }
    } catch (error) {
      console.error('Error loading from URL:', error);
    }
  }
  
  function generateRecipeText() {
    let text = `MANAKISH DOUGH RECIPE\n`;
    text += `=====================\n\n`;
    
    // Add dough ingredients
    text += `Ingredients:\n`;
    state.doughRecipe.ingredients.forEach(ingredient => {
      text += `${ingredient.name}: ${Math.round(ingredient.weight)}g\n`;
    });
    
    text += `\nTotal Dough Weight: ${Math.round(state.doughRecipe.totalWeight)}g\n\n`;
    
    // Add batch information
    const numBalls = state.doughRecipe.batch.numBalls;
    const ballWeight = state.doughRecipe.batch.ballWeight;
    text += `Makes ${numBalls} dough balls of ${ballWeight}g each.\n\n`;
    
    // Add baker's percentages
    text += `Baker's Percentages:\n`;
    text += `Hydration: ${Math.round(state.doughRecipe.analysis.hydration)}%\n`;
    text += `Salt: ${state.doughRecipe.analysis.salt.toFixed(1)}%\n`;
    text += `Oil: ${state.doughRecipe.analysis.oil.toFixed(1)}%\n`;
    text += `Yeast: ${state.doughRecipe.analysis.yeast.toFixed(2)}%\n`;
    
    if (state.doughRecipe.analysis.sugar > 0) {
      text += `Sugar: ${state.doughRecipe.analysis.sugar.toFixed(1)}%\n`;
    }
    
    return text;
  }
  
  function generateToppingsText() {
    let text = `MANAKISH TOPPINGS RECIPES\n`;
    text += `========================\n\n`;
    
    // Add Za'atar topping
    if (state.toppings.zaatar.servings > 0) {
      text += `ZA'ATAR TOPPING\n`;
      text += `--------------\n`;
      text += `Makes enough for ${state.toppings.zaatar.servings} manakish, ${state.toppings.zaatar.perPiece}g each.\n\n`;
      
      text += `Ingredients:\n`;
      state.toppings.zaatar.ingredients.forEach(ingredient => {
        text += `${ingredient.name}: ${Math.round(ingredient.amount)}g\n`;
      });
      
      text += `\nTotal Mix: ${Math.round(state.toppings.zaatar.totalWeight)}g\n\n`;
    }
    
    // Add Cheese topping
    if (state.toppings.cheese.servings > 0) {
      text += `CHEESE TOPPING\n`;
      text += `--------------\n`;
      text += `Makes enough for ${state.toppings.cheese.servings} manakish, ${state.toppings.cheese.perPiece}g each.\n\n`;
      
      text += `Cheese Mix:\n`;
      state.toppings.cheese.cheeseTypes.forEach(cheese => {
        text += `${cheese.name}: ${cheese.percent}%\n`;
      });
      
      const totalNeeded = state.toppings.cheese.servings * state.toppings.cheese.perPiece;
      text += `\nTotal cheese needed: ${totalNeeded}g\n\n`;
    }
    
    // Add Meat topping
    if (state.toppings.meat.servings > 0) {
      text += `MEAT TOPPING (LAHM BI AJEEN)\n`;
      text += `---------------------------\n`;
      text += `Makes enough for ${state.toppings.meat.servings} manakish, ${state.toppings.meat.perPiece}g each.\n\n`;
      
      text += `Ingredients:\n`;
      state.toppings.meat.ingredients.forEach(ingredient => {
        text += `${ingredient.name}: ${Math.round(ingredient.amount)}g\n`;
      });
      
      text += `\nTotal Mix: ${Math.round(state.toppings.meat.totalWeight)}g\n\n`;
    }
    
    // Add Banana topping
    if (state.toppings.banana.servings > 0) {
      text += `CHOCOLATE BANANA TOPPING\n`;
      text += `-----------------------\n`;
      text += `Makes enough for ${state.toppings.banana.servings} manakish, ${state.toppings.banana.perPiece}g each.\n\n`;
      
      text += `Ingredients:\n`;
      state.toppings.banana.ingredients.forEach(ingredient => {
        text += `${ingredient.name}: ${Math.round(ingredient.amount)}g\n`;
      });
      
      text += `\nTotal Mix: ${Math.round(state.toppings.banana.totalWeight)}g\n\n`;
    }
    
    return text;
  }
  
  function updatePrintView() {
    // Set current date
    const currentDate = new Date().toLocaleDateString();
    if (domElements.printDate) domElements.printDate.textContent = `Date: ${currentDate}`;
    if (domElements.printFooterDate) domElements.printFooterDate.textContent = currentDate;
    
    // Update dough recipe table for printing
    if (domElements.printRecipeTable) {
      let doughHtml = `
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Weight (g)</th>
            <th>Baker's %</th>
          </tr>
        </thead>
        <tbody>
      `;
      
      // Calculate baker's percentages
      const flourWeight = state.doughRecipe.ingredients.find(i => i.name.includes('Flour'))?.weight || 1;
      
      // Add ingredients
      state.doughRecipe.ingredients.forEach(ingredient => {
        const percentage = (ingredient.name.includes('Flour')) ? 100 : ((ingredient.weight / flourWeight) * 100).toFixed(1);
        doughHtml += `
          <tr>
            <td>${ingredient.name}</td>
            <td>${Math.round(ingredient.weight)}</td>
            <td>${percentage}%</td>
          </tr>
        `;
      });
      
      // Add total row
      doughHtml += `
        <tr class="total-row">
          <td>Total Dough Weight</td>
          <td>${Math.round(state.doughRecipe.totalWeight)}</td>
          <td></td>
        </tr>
        </tbody>
      `;
      
      domElements.printRecipeTable.innerHTML = doughHtml;
    }
    
    // Update dough recipe details
    if (domElements.printRecipeDetails) {
      const numBalls = state.doughRecipe.batch.numBalls;
      const ballWeight = state.doughRecipe.batch.ballWeight;
      let detailsHtml = `<p>Makes ${numBalls} dough balls of ${ballWeight}g each.</p>`;
      
      // Add scaling info if needed
      const totalBatchWeight = numBalls * ballWeight;
      if (totalBatchWeight !== state.doughRecipe.totalWeight) {
        const scalingFactor = totalBatchWeight / state.doughRecipe.totalWeight;
        detailsHtml += `<p>Recipe scaled by factor of ${scalingFactor.toFixed(2)}.</p>`;
      }
      
      domElements.printRecipeDetails.innerHTML = detailsHtml;
    }
    
    // Update Za'atar table for printing
    if (domElements.printZaatarTable && state.toppings.zaatar.servings > 0) {
      let zaatarHtml = `
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Amount (g)</th>
          </tr>
        </thead>
        <tbody>
      `;
      
      // Add ingredients
      state.toppings.zaatar.ingredients.forEach(ingredient => {
        zaatarHtml += `
          <tr>
            <td>${ingredient.name}</td>
            <td>${Math.round(ingredient.amount)}</td>
          </tr>
        `;
      });
      
      // Add total row
      zaatarHtml += `
        <tr class="total-row">
          <td>Total Mix</td>
          <td>${Math.round(state.toppings.zaatar.totalWeight)}</td>
        </tr>
        </tbody>
      `;
      
      domElements.printZaatarTable.innerHTML = zaatarHtml;
    }
    
    // Update Za'atar details
    if (domElements.printZaatarDetails && state.toppings.zaatar.servings > 0) {
      const servings = state.toppings.zaatar.servings;
      const perPiece = state.toppings.zaatar.perPiece;
      const totalNeeded = servings * perPiece;
      
      let detailsHtml = `<p>Makes enough for ${servings} manakish, ${perPiece}g each.</p>`;
      detailsHtml += `<p>Total Za'atar mix needed: ${totalNeeded}g</p>`;
      
      if (state.toppings.zaatar.totalWeight > 0) {
        const batches = totalNeeded / state.toppings.zaatar.totalWeight;
        detailsHtml += `<p>Recipe should be made ${batches.toFixed(2)}x for the required amount.</p>`;
      }
      
      domElements.printZaatarDetails.innerHTML = detailsHtml;
    }
    
    // Update Cheese table for printing
    if (domElements.printCheeseTable && state.toppings.cheese.servings > 0) {
      let cheeseHtml = `
        <thead>
          <tr>
            <th>Cheese Type</th>
            <th>Proportion (%)</th>
            <th>Amount (g)</th>
          </tr>
        </thead>
        <tbody>
      `;
      
      const totalNeeded = state.toppings.cheese.servings * state.toppings.cheese.perPiece;
      
      // Add cheese types
      state.toppings.cheese.cheeseTypes.forEach(cheese => {
        const amount = (cheese.percent / 100) * totalNeeded;
        cheeseHtml += `
          <tr>
            <td>${cheese.name}</td>
            <td>${cheese.percent}</td>
            <td>${Math.round(amount)}</td>
          </tr>
        `;
      });
      
      // Add total row
      const totalPercent = state.toppings.cheese.cheeseTypes.reduce((sum, cheese) => sum + cheese.percent, 0);
      cheeseHtml += `
        <tr class="total-row">
          <td>Total</td>
          <td>${Math.round(totalPercent)}%</td>
          <td>${totalNeeded}</td>
        </tr>
        </tbody>
      `;
      
      domElements.printCheeseTable.innerHTML = cheeseHtml;
    }
    
    // Update Cheese details
    if (domElements.printCheeseDetails && state.toppings.cheese.servings > 0) {
      const servings = state.toppings.cheese.servings;
      const perPiece = state.toppings.cheese.perPiece;
      const totalNeeded = servings * perPiece;
      
      let detailsHtml = `<p>Makes enough for ${servings} manakish, ${perPiece}g each.</p>`;
      detailsHtml += `<p>Total cheese needed: ${totalNeeded}g</p>`;
      
      domElements.printCheeseDetails.innerHTML = detailsHtml;
    }
    
    // Update Meat table for printing
    if (domElements.printMeatTable && state.toppings.meat.servings > 0) {
      let meatHtml = `
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Amount (g)</th>
          </tr>
        </thead>
        <tbody>
      `;
      
      // Add ingredients
      state.toppings.meat.ingredients.forEach(ingredient => {
        meatHtml += `
          <tr>
            <td>${ingredient.name}</td>
            <td>${Math.round(ingredient.amount)}</td>
          </tr>
        `;
      });
      
      // Add total row
      meatHtml += `
        <tr class="total-row">
          <td>Total Mix</td>
          <td>${Math.round(state.toppings.meat.totalWeight)}</td>
        </tr>
        </tbody>
      `;
      
      domElements.printMeatTable.innerHTML = meatHtml;
    }
    
    // Update Meat details
    if (domElements.printMeatDetails && state.toppings.meat.servings > 0) {
      const servings = state.toppings.meat.servings;
      const perPiece = state.toppings.meat.perPiece;
      const totalNeeded = servings * perPiece;
      
      let detailsHtml = `<p>Makes enough for ${servings} manakish, ${perPiece}g each.</p>`;
      detailsHtml += `<p>Total meat mix needed: ${totalNeeded}g</p>`;
      
      if (state.toppings.meat.totalWeight > 0) {
        const batches = totalNeeded / state.toppings.meat.totalWeight;
        detailsHtml += `<p>Recipe should be made ${batches.toFixed(2)}x for the required amount.</p>`;
      }
      
      domElements.printMeatDetails.innerHTML = detailsHtml;
    }
    
    // Update Banana table for printing
    if (domElements.printBananaTable && state.toppings.banana.servings > 0) {
      let bananaHtml = `
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Amount (g)</th>
          </tr>
        </thead>
        <tbody>
      `;
      
      // Add ingredients
      state.toppings.banana.ingredients.forEach(ingredient => {
        bananaHtml += `
          <tr>
            <td>${ingredient.name}</td>
            <td>${Math.round(ingredient.amount)}</td>
          </tr>
        `;
      });
      
      // Add total row
      bananaHtml += `
        <tr class="total-row">
          <td>Total Mix</td>
          <td>${Math.round(state.toppings.banana.totalWeight)}</td>
        </tr>
        </tbody>
      `;
      
      domElements.printBananaTable.innerHTML = bananaHtml;
    }
    
    // Update Banana details
    if (domElements.printBananaDetails && state.toppings.banana.servings > 0) {
      const servings = state.toppings.banana.servings;
      const perPiece = state.toppings.banana.perPiece;
      const totalNeeded = servings * perPiece;
      
      let detailsHtml = `<p>Makes enough for ${servings} manakish, ${perPiece}g each.</p>`;
      detailsHtml += `<p>Total chocolate-banana mix needed: ${totalNeeded}g</p>`;
      
      if (state.toppings.banana.totalWeight > 0) {
        const batches = totalNeeded / state.toppings.banana.totalWeight;
        detailsHtml += `<p>Recipe should be made ${batches.toFixed(2)}x for the required amount.</p>`;
      }
      
      domElements.printBananaDetails.innerHTML = detailsHtml;
    }
    
    // Update BOQ table for printing
    if (domElements.printBoqTable) {
      updateSummary(); // Make sure summary is up to date
      
      let boqHtml = `
        <thead>
          <tr>
            <th>Category</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
      `;
      
      // Add dough section
      boqHtml += `
        <tr class="category-row">
          <td colspan="4">Dough</td>
        </tr>
      `;
      
      // Add dough ingredients
      const totalBatchWeight = state.doughRecipe.batch.numBalls * state.doughRecipe.batch.ballWeight;
      const scalingFactor = state.doughRecipe.totalWeight > 0 ? totalBatchWeight / state.doughRecipe.totalWeight : 1;
      
      state.doughRecipe.ingredients.forEach(ingredient => {
        const scaledWeight = Math.round(ingredient.weight * scalingFactor);
        boqHtml += `
          <tr>
            <td></td>
            <td>${ingredient.name}</td>
            <td>${scaledWeight}</td>
            <td>g</td>
          </tr>
        `;
      });
      
      // Add Za'atar section
      if (state.toppings.zaatar.servings > 0) {
        boqHtml += `
          <tr class="category-row">
            <td colspan="4">Za'atar Topping</td>
          </tr>
        `;
        
        // Calculate scaling factor for za'atar
        const totalNeeded = state.toppings.zaatar.servings * state.toppings.zaatar.perPiece;
        const batches = state.toppings.zaatar.totalWeight > 0 ? totalNeeded / state.toppings.zaatar.totalWeight : 0;
        
        // Add za'atar ingredients
        state.toppings.zaatar.ingredients.forEach(ingredient => {
          const scaledAmount = Math.round(ingredient.amount * batches);
          boqHtml += `
            <tr>
              <td></td>
              <td>${ingredient.name}</td>
              <td>${scaledAmount}</td>
              <td>g</td>
            </tr>
          `;
        });
      }
      
      // Add Cheese section
      if (state.toppings.cheese.servings > 0) {
        boqHtml += `
          <tr class="category-row">
            <td colspan="4">Cheese Topping</td>
          </tr>
        `;
        
        // Calculate total needed
        const totalNeeded = state.toppings.cheese.servings * state.toppings.cheese.perPiece;
        
        // Add cheese types
        state.toppings.cheese.cheeseTypes.forEach(cheese => {
          const amount = Math.round((cheese.percent / 100) * totalNeeded);
          boqHtml += `
            <tr>
              <td></td>
              <td>${cheese.name}</td>
              <td>${amount}</td>
              <td>g</td>
            </tr>
          `;
        });
      }
      
      // Add Meat section
      if (state.toppings.meat.servings > 0) {
        boqHtml += `
          <tr class="category-row">
            <td colspan="4">Meat Topping</td>
          </tr>
        `;
        
        // Calculate scaling factor for meat
        const totalNeeded = state.toppings.meat.servings * state.toppings.meat.perPiece;
        const batches = state.toppings.meat.totalWeight > 0 ? totalNeeded / state.toppings.meat.totalWeight : 0;
        
        // Add meat ingredients
        state.toppings.meat.ingredients.forEach(ingredient => {
          const scaledAmount = Math.round(ingredient.amount * batches);
          boqHtml += `
            <tr>
              <td></td>
              <td>${ingredient.name}</td>
              <td>${scaledAmount}</td>
              <td>g</td>
            </tr>
          `;
        });
      }
      
      // Add Banana section
      if (state.toppings.banana.servings > 0) {
        boqHtml += `
          <tr class="category-row">
            <td colspan="4">Chocolate Banana Topping</td>
          </tr>
        `;
        
        // Calculate scaling factor for banana
        const totalNeeded = state.toppings.banana.servings * state.toppings.banana.perPiece;
        const batches = state.toppings.banana.totalWeight > 0 ? totalNeeded / state.toppings.banana.totalWeight : 0;
        
        // Add banana ingredients
        state.toppings.banana.ingredients.forEach(ingredient => {
          const scaledAmount = Math.round(ingredient.amount * batches);
          boqHtml += `
            <tr>
              <td></td>
              <td>${ingredient.name}</td>
              <td>${scaledAmount}</td>
              <td>g</td>
            </tr>
          `;
        });
      }
      
      // End table
      boqHtml += `</tbody>`;
      
      domElements.printBoqTable.innerHTML = boqHtml;
    }
  }
  
  function copyToClipboard(text) {
    try {
      // Create temporary element
      const element = document.createElement('textarea');
      element.value = text;
      document.body.appendChild(element);
      
      // Select and copy
      element.select();
      document.execCommand('copy');
      
      // Remove temporary element
      document.body.removeChild(element);
      
      return true;
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      return false;
    }
  }
  
  function showToast(message) {
    // Set message
    domElements.copyMessage.textContent = message;
    
    // Show toast
    domElements.copyConfirmation.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
      domElements.copyConfirmation.classList.remove('show');
    }, 3000);
  }
  
  // Initialize all calculators
  function init() {
    initTabs();
    initPriceToggles();
    initDoughCalculator();
    initZaatarCalculator();
    initCheeseCalculator();
    initMeatCalculator();
    initBananaCalculator();
    initShareAndPrint();
  }
  
  
  
  // Start the application
  init();
});
