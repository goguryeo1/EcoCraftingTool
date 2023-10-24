import {Recipe} from '../../app/interface/recipe';
import {getCraftingTableByNameID, getItemByNameID, getSkillByNameID} from './util/data-utils';


export let standardRecipes: Recipe[] =
  [
    {
      'name': 'Acorn Powder',
      'nameID': 'AcornPowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 5,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AcornItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AcornPowderItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Adorned Ashlar Stone Bench',
      'nameID': 'AdornedAshlarStoneBench',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 7,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdornedAshlarStoneBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Adorned Ashlar Stone Chair',
      'nameID': 'AdornedAshlarStoneChair',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 5,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdornedAshlarStoneChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Adorned Ashlar Stone Table',
      'nameID': 'AdornedAshlarStoneTable',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 6,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdornedAshlarStoneTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Baking Upgrade',
      'nameID': 'AdvancedBakingUpgrade',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedBakingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Carpentry Table',
      'nameID': 'AdvancedCarpentryTable',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelSawBladeItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedCarpentryTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Circuit',
      'nameID': 'AdvancedCircuit',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 85,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldFlakesItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SubstrateItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Combustion Engine',
      'nameID': 'AdvancedCombustionEngine',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('ServoItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('ValveItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedCombustionEngineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Cooking Upgrade',
      'nameID': 'AdvancedCookingUpgrade',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedCookingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Masonry Table',
      'nameID': 'AdvancedMasonryTable',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelSawBladeItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedMasonryTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Masonry Upgrade',
      'nameID': 'AdvancedMasonryUpgrade',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedMasonryUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Smelting Upgrade',
      'nameID': 'AdvancedSmeltingUpgrade',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedSmeltingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Tailoring Table',
      'nameID': 'AdvancedTailoringTable',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedTailoringTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Upgrade 1',
      'nameID': 'AdvancedUpgradeLvl1',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 2,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Upgrade 2',
      'nameID': 'AdvancedUpgradeLvl2',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 4,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Upgrade 3',
      'nameID': 'AdvancedUpgradeLvl3',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 5,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Upgrade 4',
      'nameID': 'AdvancedUpgradeLvl4',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 6,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Agave Seed',
      'nameID': 'AgaveSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AgaveLeavesItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AgaveSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Agouti Enchiladas',
      'nameID': 'AgoutiEnchiladas',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 4,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AgoutiEnchiladasItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Agriculture Research Paper Advanced',
      'nameID': 'AgricultureResearchPaperAdvanced',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 0,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CropSeed'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawFood'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AgricultureResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Agriculture Research Paper Modern',
      'nameID': 'AgricultureResearchPaperModern',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 0,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BerryExtractFertilizerItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('BloodMealFertilizerItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('HideAshFertilizerItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('PeltFertilizerItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawFood'),
          'quantity': 200,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AgricultureResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Amanita Mushroom Spores',
      'nameID': 'AmanitaMushroomSpores',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AmanitaMushroomsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AmanitaMushroomSporesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Anvil',
      'nameID': 'Anvil',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AnvilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Arrastra',
      'nameID': 'Arrastra',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ArrastraItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Basalt',
      'nameID': 'AshlarBasalt',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasaltItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedBasaltItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Gneiss',
      'nameID': 'AshlarGneiss',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GneissItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGneissItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Granite',
      'nameID': 'AshlarGranite',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GraniteItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Large Stone Fountain',
      'nameID': 'AshlarLargeStoneFountain',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarLargeStoneFountainItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Limestone',
      'nameID': 'AshlarLimestone',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Sandstone',
      'nameID': 'AshlarSandstone',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandstoneItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Shale',
      'nameID': 'AshlarShale',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('ShaleItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedShaleItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Small Stone Fountain',
      'nameID': 'AshlarSmallStoneFountain',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarSmallStoneFountainItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Stone Bench',
      'nameID': 'AshlarStoneBench',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStoneBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Stone Chair',
      'nameID': 'AshlarStoneChair',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStoneChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Stone Door',
      'nameID': 'AshlarStoneDoor',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStoneDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Stone Fireplace',
      'nameID': 'AshlarStoneFireplace',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 6,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStoneFireplaceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Stone Table',
      'nameID': 'AshlarStoneTable',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 2,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStoneTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Asphalt Concrete',
      'nameID': 'AsphaltConcrete',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AsphaltConcreteItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Assembly Line',
      'nameID': 'AssemblyLine',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AssemblyLineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Automatic Loom',
      'nameID': 'AutomaticLoom',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AutomaticLoomItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Autumn Stew',
      'nameID': 'AutumnStew',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AutumnStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Agave',
      'nameID': 'BakedAgave',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AgaveLeavesItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedAgaveItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Beet',
      'nameID': 'BakedBeet',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedBeetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Corn',
      'nameID': 'BakedCorn',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedCornItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Heart Of Palm',
      'nameID': 'BakedHeartOfPalm',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HeartOfPalmItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedHeartOfPalmItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Meat',
      'nameID': 'BakedMeat',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Mortar',
      'nameID': 'BakedMortar',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodPulpItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Roast',
      'nameID': 'BakedRoast',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawRoastItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedRoastItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Taro',
      'nameID': 'BakedTaro',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedTaroItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Tomato',
      'nameID': 'BakedTomato',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedTomatoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bakery Oven',
      'nameID': 'BakeryOven',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakeryOvenItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baking Upgrade',
      'nameID': 'BakingUpgrade',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bandana',
      'nameID': 'Bandana',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BandanaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Banh Xeo',
      'nameID': 'BanhXeo',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 4,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeanSproutItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrabCarcassItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceFlourItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BanhXeoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bank',
      'nameID': 'Bank',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 4,
      'labor': 1500,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BankItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bannock',
      'nameID': 'Bannock',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BannockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Barrel',
      'nameID': 'Barrel',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Circuit',
      'nameID': 'BasicCircuit',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldFlakesItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SubstrateItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Engineering Upgrade',
      'nameID': 'BasicEngineeringUpgrade',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicEngineeringUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Upgrade 1',
      'nameID': 'BasicUpgradeLvl1',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Upgrade 2',
      'nameID': 'BasicUpgradeLvl2',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Upgrade 3',
      'nameID': 'BasicUpgradeLvl3',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 80,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Upgrade 4',
      'nameID': 'BasicUpgradeLvl4',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 120,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenWheelItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bathtub',
      'nameID': 'Bathtub',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 7,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BathtubItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bean Paste',
      'nameID': 'BeanPaste',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BeanPasteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bean Sprout',
      'nameID': 'BeanSprout',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BeanSproutItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bear S U P R E M E',
      'nameID': 'BearSUPREME',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 6,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('InfusedOilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MeatStockItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BearSUPREMEItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bearclaw',
      'nameID': 'Bearclaw',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 2,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BearclawItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bearpack',
      'nameID': 'Bearpack',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 4,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BearpackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Beet Campfire Salad',
      'nameID': 'BeetCampfireSalad',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BeetCampfireSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Beet Seed',
      'nameID': 'BeetSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BeetSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Beet Sugar',
      'nameID': 'BeetSugar',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Berry Extract Fertilizer',
      'nameID': 'BerryExtractFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BerryExtractFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Big Backpack',
      'nameID': 'BigBackpack',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BigBackpackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Biodiesel',
      'nameID': 'Biodiesel',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('EthanolItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BiodieselItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bison Chow Fun',
      'nameID': 'BisonChowFun',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 4,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeanSproutItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('BisonCarcassItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceNoodlesItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BisonChowFunItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bison Mount',
      'nameID': 'BisonMount',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 4,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BisonCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BisonMountItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Blast Furnace',
      'nameID': 'BlastFurnace',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 5,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BlastFurnaceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Blood Meal Fertilizer',
      'nameID': 'BloodMealFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BloodMealFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bloomery',
      'nameID': 'Bloomery',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BloomeryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Board',
      'nameID': 'Board',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Boiled Grains',
      'nameID': 'BoiledGrains',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Grain'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoiledGrainsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Boiled Rice',
      'nameID': 'BoiledRice',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RiceItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Boiled Sausage',
      'nameID': 'BoiledSausage',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MeatStockItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawSausageItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoiledSausageItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Boiler',
      'nameID': 'Boiler',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperPlateItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoilerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bolete Mushroom Spores',
      'nameID': 'BoleteMushroomSpores',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoleteMushroomsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoleteMushroomSporesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bookshelf',
      'nameID': 'Bookshelf',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 50,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BookshelfItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Brazier',
      'nameID': 'Brazier',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BrazierItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bread',
      'nameID': 'Bread',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BreadItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Brick',
      'nameID': 'Brick',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Brick Fireplace',
      'nameID': 'BrickFireplace',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 4,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 50,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BrickFireplaceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Builder Boots',
      'nameID': 'BuilderBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BuilderBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Builder Gloves',
      'nameID': 'BuilderGloves',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BuilderGlovesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Builder Helmet',
      'nameID': 'BuilderHelmet',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BuilderHelmetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Builder Overalls',
      'nameID': 'BuilderOveralls',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BuilderOverallsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Builder Shirt',
      'nameID': 'BuilderShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BuilderShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Butcher Bison',
      'nameID': 'ButcherBison',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 2,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BisonCarcassItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 10,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        },
        {
          'item': getItemByNameID('ShornWoolItem'),
          'quantity': 3,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Hare',
      'nameID': 'ButcherHare',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HareCarcassItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        },
        {
          'item': getItemByNameID('ShornWoolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Medium Animal',
      'nameID': 'ButcherMediumAnimal',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MediumLeatherCarcass'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Medium Wooly Animal',
      'nameID': 'ButcherMediumWoolyAnimal',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MediumWoolyCarcass'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        },
        {
          'item': getItemByNameID('ShornWoolItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Small Animal',
      'nameID': 'ButcherSmallAnimal',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SmallCarcass'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Tiny Fur Animal',
      'nameID': 'ButcherTinyFurAnimal',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TinyFurCarcass'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Tiny Leather Animal',
      'nameID': 'ButcherTinyLeatherAnimal',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TinyLeatherCarcass'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butchery Table',
      'nameID': 'ButcheryTable',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ButcheryTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Butchery Upgrade',
      'nameID': 'ButcheryUpgrade',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ButcheryUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camas Ash Fertilizer',
      'nameID': 'CamasAshFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredCamasBulbItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamasAshFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camas Bread',
      'nameID': 'CamasBread',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasPasteItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamasBreadItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camas Bulb Bake',
      'nameID': 'CamasBulbBake',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamasBulbBakeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camas Paste',
      'nameID': 'CamasPaste',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamasPasteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camo Pants',
      'nameID': 'CamoPants',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamoPantsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camo Shirt',
      'nameID': 'CamoShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamoShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Animal Medium',
      'nameID': 'CampfireAnimalMedium',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MediumCarcass'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Campfire Animal Small',
      'nameID': 'CampfireAnimalSmall',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SmallCarcass'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Animal Tiny',
      'nameID': 'CampfireAnimalTiny',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TinyCarcass'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Bison',
      'nameID': 'CampfireBison',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BisonCarcassItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 8,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Campfire Cooking Upgrade',
      'nameID': 'CampfireCookingUpgrade',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CampfireCookingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Fish Large',
      'nameID': 'CampfireFishLarge',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LargeFish'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Fish Medium',
      'nameID': 'CampfireFishMedium',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MediumFish'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Fish Small',
      'nameID': 'CampfireFishSmall',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SmallFish'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Pacific Sardine',
      'nameID': 'CampfirePacificSardine',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PacificSardineItem'),
          'quantity': 3,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Roast',
      'nameID': 'CampfireRoast',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawRoastItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CampfireRoastItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campsite',
      'nameID': 'Campsite',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CampsiteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Candle Stand',
      'nameID': 'CandleStand',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('TallowCandleItem'),
          'quantity': 3,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CandleStandItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Capris',
      'nameID': 'Capris',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CaprisItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Carpentry Advanced Upgrade',
      'nameID': 'CarpentryAdvancedUpgrade',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CarpentryAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Carpentry Basic Upgrade',
      'nameID': 'CarpentryBasicUpgrade',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CarpentryBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Carved Pumpkin',
      'nameID': 'CarvedPumpkin',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('TallowCandleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CarvedPumpkinItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cast Iron Bed',
      'nameID': 'CastIronBed',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CastIronBedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cast Iron Royal Bed',
      'nameID': 'CastIronRoyalBed',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 7,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 80,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CastIronRoyalBedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cast Iron Stove',
      'nameID': 'CastIronStove',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 2,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CastIronStoveItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ceiling Candle',
      'nameID': 'CeilingCandle',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('TallowCandleItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CeilingCandleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cellulose Fiber',
      'nameID': 'CelluloseFiber',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NaturalFiber'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cement',
      'nameID': 'Cement',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 4,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('CementKilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cement Kiln',
      'nameID': 'CementKiln',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 5,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CementKilnItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Chainsaw',
      'nameID': 'Chainsaw',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ChainsawItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charcoal',
      'nameID': 'Charcoal',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 7,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharcoalItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Agave',
      'nameID': 'CharredAgave',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AgaveLeavesItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredAgaveItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Beans',
      'nameID': 'CharredBeans',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredBeansItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Beet',
      'nameID': 'CharredBeet',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredBeetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Cactus Fruit',
      'nameID': 'CharredCactusFruit',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GiantCactusFruitItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredCactusFruitItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Camas Bulb',
      'nameID': 'CharredCamasBulb',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredCamasBulbItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Corn',
      'nameID': 'CharredCorn',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredCornItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Fireweed Shoots',
      'nameID': 'CharredFireweedShoots',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FireweedShootsItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFireweedShootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Fish',
      'nameID': 'CharredFish',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Heart Of Palm',
      'nameID': 'CharredHeartOfPalm',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HeartOfPalmItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredHeartOfPalmItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Meat',
      'nameID': 'CharredMeat',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Mushrooms',
      'nameID': 'CharredMushrooms',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fungus'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMushroomsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Papaya',
      'nameID': 'CharredPapaya',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredPapayaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Pineapple',
      'nameID': 'CharredPineapple',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredPineappleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Sausage',
      'nameID': 'CharredSausage',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawSausageItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredSausageItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Taro',
      'nameID': 'CharredTaro',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredTaroItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Tomato',
      'nameID': 'CharredTomato',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredTomatoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Chef Hat',
      'nameID': 'ChefHat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ChefHatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Chef Pants',
      'nameID': 'ChefPants',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ChefPantsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Chef Shirt',
      'nameID': 'ChefShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ChefShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Chef Shoes',
      'nameID': 'ChefShoes',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ChefShoesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Clam Chowder',
      'nameID': 'ClamChowder',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClamItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ClamChowderItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cloth',
      'nameID': 'Cloth',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 9,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ClothItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cloth Belt',
      'nameID': 'ClothBelt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ClothBeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cloth Cape',
      'nameID': 'ClothCape',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ClothCapeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'CO2 Canister',
      'nameID': 'CO2Canister',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CO2CanisterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Combustion Engine',
      'nameID': 'CombustionEngine',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 3,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Combustion Generator',
      'nameID': 'CombustionGenerator',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CombustionGeneratorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Bow',
      'nameID': 'CompositeBow',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 4,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonThreadItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeBowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Filler',
      'nameID': 'CompositeFiller',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('NaturalFiber'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeFillerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Lumber',
      'nameID': 'CompositeLumber',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Lumber Bench',
      'nameID': 'CompositeLumberBench',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 3,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeLumberBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Lumber Chair',
      'nameID': 'CompositeLumberChair',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeLumberChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Lumber Door',
      'nameID': 'CompositeLumberDoor',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeLumberDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Lumber Table',
      'nameID': 'CompositeLumberTable',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 3,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeLumberTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composites Upgrade',
      'nameID': 'CompositesUpgrade',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositesUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Compost Fertilizer',
      'nameID': 'CompostFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 5,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompostItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompostFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Computer Lab',
      'nameID': 'ComputerLab',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 6,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': true,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 50,
          'reducible': true
        },
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 100,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 100,
          'reducible': true
        },
        {
          'item': getItemByNameID('ReinforcedConcreteItem'),
          'quantity': 100,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ComputerLabItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Concentrate Copper Lv2',
      'nameID': 'ConcentrateCopperLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('FrothFloatationCellObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 7,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperConcentrateItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Concentrate Dry Iron',
      'nameID': 'ConcentrateDryIron',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('ScreeningMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('TailingsItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Concentrate Dry Iron Lv2',
      'nameID': 'ConcentrateDryIronLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SensorBasedBeltSorterObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('TailingsItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Concentrate Gold Lv2',
      'nameID': 'ConcentrateGoldLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('FrothFloatationCellObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedGoldOreItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldConcentrateItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Concentrate Iron Lv2',
      'nameID': 'ConcentrateIronLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('FrothFloatationCellObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Cookeina Mushroom Spores',
      'nameID': 'CookeinaMushroomSpores',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CookeinaMushroomsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CookeinaMushroomSporesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cooking Upgrade',
      'nameID': 'CookingUpgrade',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CookingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Copper Bar',
      'nameID': 'CopperBar',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperConcentrateItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Copper Concentrate',
      'nameID': 'CopperConcentrate',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('RockerBoxObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 7,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperConcentrateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Copper Pipe',
      'nameID': 'CopperPipe',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperPipeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Copper Wiring',
      'nameID': 'CopperWiring',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corn Ethanol',
      'nameID': 'CornEthanol',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 0,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EthanolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corn Fritters',
      'nameID': 'CornFritters',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CornFrittersItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corn Seed',
      'nameID': 'CornSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CornSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corn Starch',
      'nameID': 'CornStarch',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CornStarchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cornmeal',
      'nameID': 'Cornmeal',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Corrugated Steel',
      'nameID': 'CorrugatedSteel',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CorrugatedSteelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corrugated Steel Door',
      'nameID': 'CorrugatedSteelDoor',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CorrugatedSteelItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CorrugatedSteelDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corrugated Steel Fence Door',
      'nameID': 'CorrugatedSteelFenceDoor',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CorrugatedSteelItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CorrugatedSteelFenceDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Carpet',
      'nameID': 'CottonCarpet',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonCarpetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Curtains',
      'nameID': 'CottonCurtains',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonCurtainsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Fabric',
      'nameID': 'CottonFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Lint',
      'nameID': 'CottonLint',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonBollItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonLintItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CottonSeedItem'),
          'quantity': 0.5,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Cotton Thread',
      'nameID': 'CottonThread',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonLintItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Couch',
      'nameID': 'Couch',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 160,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CouchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crab Pot',
      'nameID': 'CrabPot',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrabPotItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crane',
      'nameID': 'Crane',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 5,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('HeatSinkItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CraneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crimini Mushroom Spores',
      'nameID': 'CriminiMushroomSpores',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CriminiMushroomsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CriminiMushroomSporesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crimson Salad',
      'nameID': 'CrimsonSalad',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredBeetItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('InfusedOilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrimsonSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crispy Bacon',
      'nameID': 'CrispyBacon',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawBaconItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrispyBaconItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Basalt Lv2',
      'nameID': 'CrushedBasaltLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasaltItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedBasaltItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Basalt Lv3',
      'nameID': 'CrushedBasaltLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasaltItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedBasaltItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Copper Lv2',
      'nameID': 'CrushedCopperLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Copper Lv3',
      'nameID': 'CrushedCopperLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Copper Ore',
      'nameID': 'CrushedCopperOre',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperOreItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Gneiss Lv2',
      'nameID': 'CrushedGneissLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GneissItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGneissItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Gneiss Lv3',
      'nameID': 'CrushedGneissLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GneissItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGneissItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Gold Lv2',
      'nameID': 'CrushedGoldLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGoldOreItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Gold Lv3',
      'nameID': 'CrushedGoldLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGoldOreItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Gold Ore',
      'nameID': 'CrushedGoldOre',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldOreItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGoldOreItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Granite',
      'nameID': 'CrushedGranite',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GraniteItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Granite Lv2',
      'nameID': 'CrushedGraniteLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GraniteItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Granite Lv3',
      'nameID': 'CrushedGraniteLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GraniteItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Iron Lv2',
      'nameID': 'CrushedIronLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Iron Lv3',
      'nameID': 'CrushedIronLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Iron Ore',
      'nameID': 'CrushedIronOre',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronOreItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Limestone',
      'nameID': 'CrushedLimestone',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Limestone Lv2',
      'nameID': 'CrushedLimestoneLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Limestone Lv3',
      'nameID': 'CrushedLimestoneLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Mortared Stone',
      'nameID': 'CrushedMortaredStone',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Mortared Stone Lv2',
      'nameID': 'CrushedMortaredStoneLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Sandstone',
      'nameID': 'CrushedSandstone',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SandstoneItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Sandstone Lv2',
      'nameID': 'CrushedSandstoneLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SandstoneItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Sandstone Lv3',
      'nameID': 'CrushedSandstoneLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SandstoneItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Shale',
      'nameID': 'CrushedShale',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ShaleItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedShaleItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Shale Lv2',
      'nameID': 'CrushedShaleLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ShaleItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedShaleItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Shale Lv3',
      'nameID': 'CrushedShaleLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ShaleItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedShaleItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Slag Lv2',
      'nameID': 'CrushedSlagLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSlagItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Slag Lv3',
      'nameID': 'CrushedSlagLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSlagItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Stone Ramp',
      'nameID': 'CrushedStoneRamp',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('StoneRampItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Stone Ramp Lv2',
      'nameID': 'CrushedStoneRampLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('StoneRampItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Stone Road',
      'nameID': 'CrushedStoneRoad',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('StoneRoadItem'),
          'quantity': 5,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Stone Road Lv2',
      'nameID': 'CrushedStoneRoadLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('StoneRoadItem'),
          'quantity': 5,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Advanced',
      'nameID': 'CulinaryResearchPaperAdvanced',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BakedVegetable'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('Salad'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Advanced Meat',
      'nameID': 'CulinaryResearchPaperAdvancedMeat',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BakedMeatItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SimmeredMeatItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Basic',
      'nameID': 'CulinaryResearchPaperBasic',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CampfireSalad'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('FriedVegetable'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Basic Fish',
      'nameID': 'CulinaryResearchPaperBasicFish',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Basic Meat',
      'nameID': 'CulinaryResearchPaperBasicMeat',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Modern',
      'nameID': 'CulinaryResearchPaperModern',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledSausageItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('BreadItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Currency Exchange',
      'nameID': 'CurrencyExchange',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 4,
      'labor': 2500,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CurrencyExchangeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cutting Edge Cooking Upgrade',
      'nameID': 'CuttingEdgeCookingUpgrade',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CuttingEdgeCookingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dendrology Research Paper Advanced',
      'nameID': 'DendrologyResearchPaperAdvanced',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 0,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DendrologyResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dendrology Research Paper Basic',
      'nameID': 'DendrologyResearchPaperBasic',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 0,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DendrologyResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dendrology Research Paper Modern',
      'nameID': 'DendrologyResearchPaperModern',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 0,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DendrologyResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Derpy Hat',
      'nameID': 'DerpyHat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DerpyHatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Distribution Station',
      'nameID': 'DistributionStation',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DistributionStationItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Lathe',
      'nameID': 'ElectricLathe',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricLatheItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Machinist Table',
      'nameID': 'ElectricMachinistTable',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricMachinistTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Motor',
      'nameID': 'ElectricMotor',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Planer',
      'nameID': 'ElectricPlaner',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricPlanerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Stamping Press',
      'nameID': 'ElectricStampingPress',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricStampingPressItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Wall Lamp',
      'nameID': 'ElectricWallLamp',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricWallLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Water Pump',
      'nameID': 'ElectricWaterPump',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricWaterPumpItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electronics Assembly',
      'nameID': 'ElectronicsAssembly',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectronicsAssemblyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electronics Upgrade',
      'nameID': 'ElectronicsUpgrade',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectronicsUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Elevator Call Post',
      'nameID': 'ElevatorCallPost',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElevatorCallPostItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Elk Mount',
      'nameID': 'ElkMount',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 4,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ElkCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElkMountItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Elk Taco',
      'nameID': 'ElkTaco',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('TortillaItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WildMixItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElkTacoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Elk Wellington',
      'nameID': 'ElkWellington',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 6,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElkWellingtonItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Engineering Research Paper Advanced',
      'nameID': 'EngineeringResearchPaperAdvanced',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WaterwheelItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WindmillItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EngineeringResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Engineering Research Paper Modern',
      'nameID': 'EngineeringResearchPaperModern',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EngineeringResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Epoxy',
      'nameID': 'Epoxy',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Excavator',
      'nameID': 'Excavator',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 4,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExcavatorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Exotic Fruit Salad',
      'nameID': 'ExoticFruitSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PricklyPearFruitItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FruitSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Exotic Salad',
      'nameID': 'ExoticSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CriminiMushroomsItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PricklyPearFruitItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Exotic Vegetable Medley',
      'nameID': 'ExoticVegetableMedley',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Explorer Belt',
      'nameID': 'ExplorerBelt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExplorerBeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Explorer Boots',
      'nameID': 'ExplorerBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExplorerBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Explorer Gloves',
      'nameID': 'ExplorerGloves',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExplorerGlovesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Explorer Hat',
      'nameID': 'ExplorerHat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExplorerHatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Explorer Pants',
      'nameID': 'ExplorerPants',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExplorerPantsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Explorer Shirt',
      'nameID': 'ExplorerShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExplorerShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fantastic Forest Pizza',
      'nameID': 'FantasticForestPizza',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FantasticForestPizzaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmer Boots',
      'nameID': 'FarmerBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmerBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmer Gloves',
      'nameID': 'FarmerGloves',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmerGlovesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmer Hat',
      'nameID': 'FarmerHat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 60,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmerHatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmer Overalls',
      'nameID': 'FarmerOveralls',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmerOverallsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmer Shirt',
      'nameID': 'FarmerShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmerShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmers Table',
      'nameID': 'FarmersTable',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmersTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farming Upgrade',
      'nameID': 'FarmingUpgrade',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fern Campfire Salad',
      'nameID': 'FernCampfireSalad',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Vegetable'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FernCampfireSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fern Spore',
      'nameID': 'FernSpore',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FernSporeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fertilizers Upgrade',
      'nameID': 'FertilizersUpgrade',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FertilizersUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fiber Filler',
      'nameID': 'FiberFiller',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FiberFillerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fiberglass',
      'nameID': 'Fiberglass',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Field Campfire Stew',
      'nameID': 'FieldCampfireStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 4,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FieldCampfireStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fireweed Seed',
      'nameID': 'FireweedSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FireweedShootsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FireweedSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish N Chips',
      'nameID': 'FishNChips',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroFriesItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishNChipsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Stew',
      'nameID': 'FishStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MeatyStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Trap',
      'nameID': 'FishTrap',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishTrapItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fishery',
      'nameID': 'Fishery',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FisheryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Flat Steel',
      'nameID': 'FlatSteel',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlatSteelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Flat Steel Door',
      'nameID': 'FlatSteelDoor',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 5,
      'labor': 115,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlatSteelItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlatSteelDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Flatbread',
      'nameID': 'Flatbread',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlatbreadItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Flour',
      'nameID': 'Flour',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Forest Salad',
      'nameID': 'ForestSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Framed Glass',
      'nameID': 'FramedGlass',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FramedGlassItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Framed Glass Door',
      'nameID': 'FramedGlassDoor',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 5,
      'labor': 115,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FramedGlassDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Camas',
      'nameID': 'FriedCamas',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedCamasItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Fiddleheads',
      'nameID': 'FriedFiddleheads',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedFiddleheadsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Hare Haunches',
      'nameID': 'FriedHareHaunches',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedHareHaunchesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Hearts Of Palm',
      'nameID': 'FriedHeartsOfPalm',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HeartOfPalmItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedHeartsOfPalmItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Taro',
      'nameID': 'FriedTaro',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedTaroItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Tomatoes',
      'nameID': 'FriedTomatoes',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedTomatoesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Froth Floatation Cell',
      'nameID': 'FrothFloatationCell',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPipeItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FrothFloatationCellItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fruit Muffin',
      'nameID': 'FruitMuffin',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FruitMuffinItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fruit Tart',
      'nameID': 'FruitTart',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FruitTartItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Garden Boots',
      'nameID': 'GardenBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GardenBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gasoline',
      'nameID': 'Gasoline',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GasolineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gathering Research Paper Basic',
      'nameID': 'GatheringResearchPaperBasic',
      'skill': getSkillByNameID('GatheringSkill'),
      'level': 0,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawFood'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GatheringResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gearbox',
      'nameID': 'Gearbox',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('ShaperObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Geology Research Paper Advanced',
      'nameID': 'GeologyResearchPaperAdvanced',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 0,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GeologyResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Geology Research Paper Basic',
      'nameID': 'GeologyResearchPaperBasic',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 0,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GeologyResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Geology Research Paper Modern',
      'nameID': 'GeologyResearchPaperModern',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 0,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GeologyResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gigot Sleeve Shirt',
      'nameID': 'GigotSleeveShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GigotSleeveShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Glass',
      'nameID': 'Glass',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Glassworking Advanced Upgrade',
      'nameID': 'GlassworkingAdvancedUpgrade',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GlassworkingAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Glassworking Modern Upgrade',
      'nameID': 'GlassworkingModernUpgrade',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GlassworkingModernUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Glassworks',
      'nameID': 'Glassworks',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 1,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GlassworksItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Goat Mount',
      'nameID': 'GoatMount',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 4,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('MountainGoatCarcassItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoatMountItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gold Bar',
      'nameID': 'GoldBar',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldConcentrateItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Gold Concentrate',
      'nameID': 'GoldConcentrate',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('RockerBoxObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedGoldOreItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldConcentrateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 4,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Gold Flakes',
      'nameID': 'GoldFlakes',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldFlakesItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gold Wiring',
      'nameID': 'GoldWiring',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldWiringItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Grassland Salad',
      'nameID': 'GrasslandSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hand Plow',
      'nameID': 'HandPlow',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 2,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 50,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenWheelItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HandPlowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hanging Long Steel Sign',
      'nameID': 'HangingLongSteelSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HangingLongSteelSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hanging Steel Framed Sign',
      'nameID': 'HangingSteelFramedSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HangingSteelFramedSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hanging Steel Mine Sign',
      'nameID': 'HangingSteelMineSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HangingSteelMineSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hanging Steel Plain Sign',
      'nameID': 'HangingSteelPlainSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HangingSteelPlainSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hanging Steel Shop Sign',
      'nameID': 'HangingSteelShopSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HangingSteelShopSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hearty Hometown Pizza',
      'nameID': 'HeartyHometownPizza',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CriminiMushroomsItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawSausageItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HeartyHometownPizzaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Heat Sink',
      'nameID': 'HeatSink',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ShaperObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HeatSinkItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Henley',
      'nameID': 'Henley',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HenleyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Bench',
      'nameID': 'HewnBench',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Chair',
      'nameID': 'HewnChair',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Door',
      'nameID': 'HewnDoor',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Dresser',
      'nameID': 'HewnDresser',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnDresserItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Logs',
      'nameID': 'HewnLogs',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Nightstand',
      'nameID': 'HewnNightstand',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnNightstandItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Table',
      'nameID': 'HewnTable',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hide Ash Fertilizer',
      'nameID': 'HideAshFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HideAshFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hosomaki',
      'nameID': 'Hosomaki',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HosomakiItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huckleberry Extract',
      'nameID': 'HuckleberryExtract',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huckleberry Fritter',
      'nameID': 'HuckleberryFritter',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuckleberryFritterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huckleberry Pie',
      'nameID': 'HuckleberryPie',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuckleberryPieItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huckleberry Seed',
      'nameID': 'HuckleberrySeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuckleberrySeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hydrocolloids',
      'nameID': 'Hydrocolloids',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornStarchItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HydrocolloidsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Icebox',
      'nameID': 'Icebox',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IceboxItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Industrial Elevator',
      'nameID': 'IndustrialElevator',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 2500,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('FlatSteelItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelGearboxItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IndustrialElevatorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Industrial Refrigerator',
      'nameID': 'IndustrialRefrigerator',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 6,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 32,
          'reducible': true
        },
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IndustrialRefrigeratorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Industry Upgrade',
      'nameID': 'IndustryUpgrade',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IndustryUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Infused Oil',
      'nameID': 'InfusedOil',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('InfusedOilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Axe',
      'nameID': 'IronAxe',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronAxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Axle',
      'nameID': 'IronAxle',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('LatheObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Bar',
      'nameID': 'IronBar',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Iron Concentrate',
      'nameID': 'IronConcentrate',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('RockerBoxObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Iron Gear',
      'nameID': 'IronGear',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('ShaperObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Hammer',
      'nameID': 'IronHammer',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronHammerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Hoe',
      'nameID': 'IronHoe',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronHoeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Machete',
      'nameID': 'IronMachete',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronMacheteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Pickaxe',
      'nameID': 'IronPickaxe',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronPickaxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Pipe',
      'nameID': 'IronPipe',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Plate',
      'nameID': 'IronPlate',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ScrewPressObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Rock Drill',
      'nameID': 'IronRockDrill',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronRockDrillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Saw Blade',
      'nameID': 'IronSawBlade',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronSawBladeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Shovel',
      'nameID': 'IronShovel',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronShovelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Sickle',
      'nameID': 'IronSickle',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronSickleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Wheel',
      'nameID': 'IronWheel',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 3,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Jaw Crusher',
      'nameID': 'JawCrusher',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 25,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelGearItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('JawCrusherItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Jungle Campfire Salad',
      'nameID': 'JungleCampfireSalad',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Greens'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('JungleCampfireSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Jungle Campfire Stew',
      'nameID': 'JungleCampfireStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 4,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fungus'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('JungleCampfireStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Kelpy Crab Roll',
      'nameID': 'KelpyCrabRoll',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrabCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('KelpyCrabRollItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Kiln',
      'nameID': 'Kiln',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('KilnItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Kitchen',
      'nameID': 'Kitchen',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('KitchenItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Laboratory',
      'nameID': 'Laboratory',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LaboratoryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Bath Mat',
      'nameID': 'LargeBathMat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClothItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeBathMatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Corrugated Steel Door',
      'nameID': 'LargeCorrugatedSteelDoor',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 5,
      'labor': 480,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CorrugatedSteelItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeCorrugatedSteelDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Hanging Ashlar Stone Sign',
      'nameID': 'LargeHangingAshlarStoneSign',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeHangingAshlarStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Hanging Lumber Sign',
      'nameID': 'LargeHangingLumberSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeHangingLumberSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Hanging Mortared Stone Sign',
      'nameID': 'LargeHangingMortaredStoneSign',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeHangingMortaredStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Hanging Wood Sign',
      'nameID': 'LargeHangingWoodSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeHangingWoodSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Lumber Door',
      'nameID': 'LargeLumberDoor',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 60,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeLumberDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Lumber Stockpile',
      'nameID': 'LargeLumberStockpile',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeLumberStockpileItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Standing Ashlar Stone Sign',
      'nameID': 'LargeStandingAshlarStoneSign',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeStandingAshlarStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Standing Lumber Sign',
      'nameID': 'LargeStandingLumberSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeStandingLumberSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Standing Mortared Stone Sign',
      'nameID': 'LargeStandingMortaredStoneSign',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeStandingMortaredStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Standing Wood Sign',
      'nameID': 'LargeStandingWoodSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeStandingWoodSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Windowed Lumber Door',
      'nameID': 'LargeWindowedLumberDoor',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 60,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeWindowedLumberDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Laser',
      'nameID': 'Laser',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 6,
      'labor': 900,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': true,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('FramedGlassItem'),
          'quantity': 80,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 80,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 10,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 80,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LaserItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lathe',
      'nameID': 'Lathe',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LatheItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Leavened Dough',
      'nameID': 'LeavenedDough',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('YeastItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Light Backpack',
      'nameID': 'LightBackpack',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LightBackpackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Light Bulb',
      'nameID': 'LightBulb',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Limestone Bison Statue',
      'nameID': 'LimestoneBisonStatue',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 200,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LimestoneBisonStatueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Limestone Otter Statue',
      'nameID': 'LimestoneOtterStatue',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LimestoneOtterStatueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Limestone Owl Statue',
      'nameID': 'LimestoneOwlStatue',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LimestoneOwlStatueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Limestone Wolf Statue',
      'nameID': 'LimestoneWolfStatue',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 80,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LimestoneWolfStatueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Liquid Nitrogen',
      'nameID': 'LiquidNitrogen',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LiquidNitrogenItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Loaded Taro Fries',
      'nameID': 'LoadedTaroFries',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroFriesItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LoadedTaroFriesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Logging Advanced Upgrade',
      'nameID': 'LoggingAdvancedUpgrade',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LoggingAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Logging Basic Upgrade',
      'nameID': 'LoggingBasicUpgrade',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LoggingBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Loom',
      'nameID': 'Loom',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LoomItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Low Top Shoes',
      'nameID': 'LowTopShoes',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LowTopShoesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber',
      'nameID': 'Lumber',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Bench',
      'nameID': 'LumberBench',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 7,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Chair',
      'nameID': 'LumberChair',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Door',
      'nameID': 'LumberDoor',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Dresser',
      'nameID': 'LumberDresser',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberDresserItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Stockpile',
      'nameID': 'LumberStockpile',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberStockpileItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Table',
      'nameID': 'LumberTable',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Macarons',
      'nameID': 'Macarons',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 5,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MacaroonsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Machinist Table',
      'nameID': 'MachinistTable',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MachinistTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Maltodextrin',
      'nameID': 'Maltodextrin',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornStarchItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MaltodextrinItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Masonry Advanced Upgrade',
      'nameID': 'MasonryAdvancedUpgrade',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('CementKilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MasonryAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Masonry Basic Upgrade',
      'nameID': 'MasonryBasicUpgrade',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MasonryBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Masonry Mortar',
      'nameID': 'MasonryMortar',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Meat Pie',
      'nameID': 'MeatPie',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MeatPieItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Meat Stock',
      'nameID': 'MeatStock',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MeatStockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Meaty Stew',
      'nameID': 'MeatyStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MeatyStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mechanical Water Pump',
      'nameID': 'MechanicalWaterPump',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MechanicalWaterPumpItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mechanics Advanced Upgrade',
      'nameID': 'MechanicsAdvancedUpgrade',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MechanicsAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mechanics Modern Upgrade',
      'nameID': 'MechanicsModernUpgrade',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MechanicsModernUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Melting Fat',
      'nameID': 'MeltingFat',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Metallurgy Research Paper Advanced',
      'nameID': 'MetallurgyResearchPaperAdvanced',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 0,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MetallurgyResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Metallurgy Research Paper Basic',
      'nameID': 'MetallurgyResearchPaperBasic',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 0,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Ore'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MetallurgyResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Metallurgy Research Paper Modern',
      'nameID': 'MetallurgyResearchPaperModern',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RebarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MetallurgyResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mill',
      'nameID': 'Mill',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Milling Upgrade',
      'nameID': 'MillingUpgrade',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MillingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Millionaires Salad',
      'nameID': 'MillionairesSalad',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 6,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CookeinaMushroomsItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('HeartOfPalmItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MillionairesSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mining Advanced Upgrade',
      'nameID': 'MiningAdvancedUpgrade',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('ScreeningMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MiningAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mining Basic Upgrade',
      'nameID': 'MiningBasicUpgrade',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('RockerBoxObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MiningBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mining Modern Upgrade',
      'nameID': 'MiningModernUpgrade',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('FrothFloatationCellObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MiningModernUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mint',
      'nameID': 'Mint',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 4,
      'labor': 900,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MintItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mixed Fruit Salad',
      'nameID': 'MixedFruitSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FruitSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mixed Salad',
      'nameID': 'MixedSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('FireweedShootsItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mixed Vegetable Medley',
      'nameID': 'MixedVegetableMedley',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mochi',
      'nameID': 'Mochi',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceFlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MochiItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Axe',
      'nameID': 'ModernAxe',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernAxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Double Street Light',
      'nameID': 'ModernDoubleStreetLight',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 5,
      'labor': 140,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernDoubleStreetLightItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Hammer',
      'nameID': 'ModernHammer',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernHammerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Hoe',
      'nameID': 'ModernHoe',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernHoeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Machete',
      'nameID': 'ModernMachete',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernMacheteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Pickaxe',
      'nameID': 'ModernPickaxe',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernPickaxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Rock Drill',
      'nameID': 'ModernRockDrill',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelGearItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernRockDrillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Scythe',
      'nameID': 'ModernScythe',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernScytheItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Shovel',
      'nameID': 'ModernShovel',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernShovelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Street Light',
      'nameID': 'ModernStreetLight',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernStreetLightItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Upgrade 1',
      'nameID': 'ModernUpgradeLvl1',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Upgrade 2',
      'nameID': 'ModernUpgradeLvl2',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 4,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelGearItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Upgrade 3',
      'nameID': 'ModernUpgradeLvl3',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 5,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('ModernUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Upgrade 4',
      'nameID': 'ModernUpgradeLvl4',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 6,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('ModernUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone',
      'nameID': 'MortaredStone',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone Bench',
      'nameID': 'MortaredStoneBench',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 3,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone Chair',
      'nameID': 'MortaredStoneChair',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone Door',
      'nameID': 'MortaredStoneDoor',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone Fireplace',
      'nameID': 'MortaredStoneFireplace',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 5,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneFireplaceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone Table',
      'nameID': 'MortaredStoneTable',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 22,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mushroom Medley',
      'nameID': 'MushroomMedley',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoleteMushroomsItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CookeinaMushroomsItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CriminiMushroomsItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nail',
      'nameID': 'Nail',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 16,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nylon',
      'nameID': 'Nylon',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Nylon Carpet',
      'nameID': 'NylonCarpet',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonCarpetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nylon Futon Bed',
      'nameID': 'NylonFutonBed',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonFutonBedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nylon Futon Couch',
      'nameID': 'NylonFutonCouch',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonFutonCouchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nylon Thread',
      'nameID': 'NylonThread',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SpinMelterObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonThreadItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Oil',
      'nameID': 'Oil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Oil Drilling Upgrade',
      'nameID': 'OilDrillingUpgrade',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilDrillingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Oil Refinery',
      'nameID': 'OilRefinery',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 420,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilRefineryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Padded Chair',
      'nameID': 'PaddedChair',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PaddedChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Papaya Seed',
      'nameID': 'PapayaSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PapayaSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Paper',
      'nameID': 'Paper',
      'skill': getSkillByNameID('PaperMillingSkill'),
      'level': 0,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Paper Milling Upgrade',
      'nameID': 'PaperMillingUpgrade',
      'skill': getSkillByNameID('PaperMillingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PaperMillingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pastry Dough',
      'nameID': 'PastryDough',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('YeastItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pelt Fertilizer',
      'nameID': 'PeltFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PeltFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Petroleum',
      'nameID': 'Petroleum',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('PumpJackObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Phad Thai',
      'nameID': 'PhadThai',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 6,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AcornItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeanSproutItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceNoodlesItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PhadThaiItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Phosphate Fertilizer',
      'nameID': 'PhosphateFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PhosphateFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pineapple Friend Rice',
      'nameID': 'PineappleFriendRice',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 5,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredPineappleItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PineappleFriendRiceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pineapple Seed',
      'nameID': 'PineappleSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PineappleSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pirozhok',
      'nameID': 'Pirozhok',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fungus'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PirozhokItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Piston',
      'nameID': 'Piston',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ScrewPressObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Plastic',
      'nameID': 'Plastic',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Poke Bowl',
      'nameID': 'PokeBowl',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 4,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TunaItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PokeBowlItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Portable Steam Engine',
      'nameID': 'PortableSteamEngine',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoilerItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperPipeItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pottery Upgrade',
      'nameID': 'PotteryUpgrade',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PotteryUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Powered Cart',
      'nameID': 'PoweredCart',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 5,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CastIronStoveItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 3,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PoweredCartItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Powered Storage Silo',
      'nameID': 'PoweredStorageSilo',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 3,
      'labor': 800,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPipeItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PoweredStorageSiloItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Prepared Meat',
      'nameID': 'PreparedMeat',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 4,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 4,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Prickly Pear Seed',
      'nameID': 'PricklyPearSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PricklyPearFruitItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PricklyPearSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Prime Cut',
      'nameID': 'PrimeCut',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 6,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pulp Filler',
      'nameID': 'PulpFiller',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodPulpItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PulpFillerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pump Jack',
      'nameID': 'PumpJack',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 72,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ReinforcedConcreteItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PumpJackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pumpkin Seed',
      'nameID': 'PumpkinSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PumpkinSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pupusas',
      'nameID': 'Pupusas',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PupusasItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Quicklime',
      'nameID': 'Quicklime',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('QuicklimeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Quicklime Glass',
      'nameID': 'QuicklimeGlass',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 6,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('QuicklimeItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Radiator',
      'nameID': 'Radiator',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 35,
      'craftingTable': getCraftingTableByNameID('ElectricStampingPressObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('HeatSinkItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rainforest Fruit Salad',
      'nameID': 'RainforestFruitSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FruitSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rainforest Salad',
      'nameID': 'RainforestSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoleteMushroomsItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Raw Bacon',
      'nameID': 'RawBacon',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawBaconItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 3,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Raw Roast',
      'nameID': 'RawRoast',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawRoastItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Raw Sausage',
      'nameID': 'RawSausage',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawSausageItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Real Estate Desk',
      'nameID': 'RealEstateDesk',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RealEstateDeskItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rebar',
      'nameID': 'Rebar',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RebarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Recurve Bow',
      'nameID': 'RecurveBow',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 2,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RecurveBowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Refine Fish',
      'nameID': 'RefineFish',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HydrocolloidsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Refine Kelp',
      'nameID': 'RefineKelp',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HydrocolloidsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Refine Meat',
      'nameID': 'RefineMeat',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HydrocolloidsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Refine Tallow',
      'nameID': 'RefineTallow',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 18,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Refrigerator',
      'nameID': 'Refrigerator',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RefrigeratorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Registrar',
      'nameID': 'Registrar',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RegistrarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Reinforced Concrete',
      'nameID': 'ReinforcedConcrete',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CementKilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('RebarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ReinforcedConcreteItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Render Fat',
      'nameID': 'RenderFat',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rice Flour',
      'nameID': 'RiceFlour',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RiceItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RiceFlourItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Rice Noodles',
      'nameID': 'RiceNoodles',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RiceFlourItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RiceNoodlesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rivet',
      'nameID': 'Rivet',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 85,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Roast Pumpkin',
      'nameID': 'RoastPumpkin',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RoastPumpkinItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Robotic Assembly Line',
      'nameID': 'RoboticAssemblyLine',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('ServoItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RoboticAssemblyLineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rocker Box',
      'nameID': 'RockerBox',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RockerBoxItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rolling Mill',
      'nameID': 'RollingMill',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RollingMillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Root Campfire Salad',
      'nameID': 'RootCampfireSalad',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RootCampfireSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Root Campfire Stew',
      'nameID': 'RootCampfireStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 4,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RootCampfireStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Round Pot',
      'nameID': 'RoundPot',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlanterPotRoundItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rubber Wheel',
      'nameID': 'RubberWheel',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectricLatheObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rug Large',
      'nameID': 'RugLarge',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClothItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RugLargeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rug Medium',
      'nameID': 'RugMedium',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClothItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RugMediumItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rug Small',
      'nameID': 'RugSmall',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RugSmallItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Running Shoes',
      'nameID': 'RunningShoes',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RunningShoesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salt Basket',
      'nameID': 'SaltBasket',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 3,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SaltBasketItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sand Concentrate',
      'nameID': 'SandConcentrate',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('RockerBoxObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Silica'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sand Concentrate Lv2',
      'nameID': 'SandConcentrateLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('ScreeningMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Silica'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sand Concentrate Lv3',
      'nameID': 'SandConcentrateLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 6,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('SensorBasedBeltSorterObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Silica'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Saw Boards',
      'nameID': 'SawBoards',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sawmill',
      'nameID': 'Sawmill',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 2,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronSawBladeItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SawmillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Scrap Meat',
      'nameID': 'ScrapMeat',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Screening Machine',
      'nameID': 'ScreeningMachine',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 3,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ScreeningMachineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Screw Press',
      'nameID': 'ScrewPress',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ScrewPressItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Screws',
      'nameID': 'Screws',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('LatheObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Seared Meat',
      'nameID': 'SearedMeat',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('InfusedOilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SearedMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Seeded Camas Roll',
      'nameID': 'SeededCamasRoll',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CamasPasteItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SeededCamasRollItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sensor Based Belt Sorter',
      'nameID': 'SensorBasedBeltSorter',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 4,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelGearboxItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SensorBasedBeltSorterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sensuous Sea Pizza',
      'nameID': 'SensuousSeaPizza',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PacificSardineItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SensuousSeaPizzaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Servo',
      'nameID': 'Servo',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ServoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shale Brick',
      'nameID': 'ShaleBrick',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedShaleItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shaper',
      'nameID': 'Shaper',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShaperItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shark Fillet Soup',
      'nameID': 'SharkFilletSoup',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BlueSharkItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('MeatStockItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SharkFilletSoupItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sheep Mount',
      'nameID': 'SheepMount',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 4,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BighornCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SheepMountItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shelf Cabinet',
      'nameID': 'ShelfCabinet',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShelfCabinetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shorts',
      'nameID': 'Shorts',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShortsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Simmered Meat',
      'nameID': 'SimmeredMeat',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MeatStockItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SimmeredMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Simple Syrup',
      'nameID': 'SimpleSyrup',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SimpleSyrupItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sink',
      'nameID': 'Sink',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 110,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SinkItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Skid Steer',
      'nameID': 'SkidSteer',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 2500,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 4,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SkidSteerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Bath Mat',
      'nameID': 'SmallBathMat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallBathMatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Hanging Ashlar Stone Sign',
      'nameID': 'SmallHangingAshlarStoneSign',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallHangingAshlarStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Hanging Lumber Sign',
      'nameID': 'SmallHangingLumberSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallHangingLumberSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Hanging Mortared Stone Sign',
      'nameID': 'SmallHangingMortaredStoneSign',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallHangingMortaredStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Hanging Wood Sign',
      'nameID': 'SmallHangingWoodSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallHangingWoodSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Sink',
      'nameID': 'SmallSink',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallSinkItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Standing Ashlar Stone Sign',
      'nameID': 'SmallStandingAshlarStoneSign',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallStandingAshlarStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Standing Lumber Sign',
      'nameID': 'SmallStandingLumberSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallStandingLumberSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Standing Mortared Stone Sign',
      'nameID': 'SmallStandingMortaredStoneSign',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallStandingMortaredStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Standing Wood Sign',
      'nameID': 'SmallStandingWoodSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallStandingWoodSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Wood Cart',
      'nameID': 'SmallWoodCart',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallWoodCartItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smelt Copper',
      'nameID': 'SmeltCopper',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperConcentrateItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Smelt Gold',
      'nameID': 'SmeltGold',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldConcentrateItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Smelt Iron',
      'nameID': 'SmeltIron',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Smelting Upgrade',
      'nameID': 'SmeltingUpgrade',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmeltingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smith Apron',
      'nameID': 'SmithApron',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmithApronItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smith Bandana',
      'nameID': 'SmithBandana',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmithBandanaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smith Boots',
      'nameID': 'SmithBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmithBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smith Gloves',
      'nameID': 'SmithGloves',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmithGlovesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smith Pants',
      'nameID': 'SmithPants',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmithPantsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smooth Gut Noodle Roll',
      'nameID': 'SmoothGutNoodleRoll',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceNoodlesItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmoothGutNoodleRollItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Soil Sampler',
      'nameID': 'SoilSampler',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 0,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SoilSamplerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Solar Generator',
      'nameID': 'SolarGenerator',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 5,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ServoItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SolarGeneratorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Spiky Roll',
      'nameID': 'SpikyRoll',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('UrchinItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SpikyRollItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Spin Melter',
      'nameID': 'SpinMelter',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SpinMelterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Spin Wool Yarn',
      'nameID': 'SpinWoolYarn',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ShornWoolItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Square Belt',
      'nameID': 'SquareBelt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SquareBeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Square Pot',
      'nameID': 'SquarePot',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlanterPotSquareItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stamp Mill',
      'nameID': 'StampMill',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 14,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StampMillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Standing Glass Sign',
      'nameID': 'StandingGlassSign',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StandingGlassSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Standing Long Steel Sign',
      'nameID': 'StandingLongSteelSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StandingLongSteelSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Standing Steel Brick Sign',
      'nameID': 'StandingSteelBrickSign',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StandingSteelBrickSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Engine',
      'nameID': 'SteamEngine',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 450,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoilerItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamEngineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Tractor',
      'nameID': 'SteamTractor',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 1000,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamTractorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Tractor Harvester',
      'nameID': 'SteamTractorHarvester',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamTractorHarvesterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Tractor Plow',
      'nameID': 'SteamTractorPlow',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 18,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamTractorPlowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Tractor Sower',
      'nameID': 'SteamTractorSower',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 18,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamTractorSowerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Truck',
      'nameID': 'SteamTruck',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 1000,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 4,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamTruckItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Axe',
      'nameID': 'SteelAxe',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelAxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Axle',
      'nameID': 'SteelAxle',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectricLatheObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Bar',
      'nameID': 'SteelBar',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Coal'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('QuicklimeItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Steel Ceiling Light',
      'nameID': 'SteelCeilingLight',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelCeilingLightItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Floor Lamp',
      'nameID': 'SteelFloorLamp',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelFloorLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Gear',
      'nameID': 'SteelGear',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectricPlanerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelGearItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Gearbox',
      'nameID': 'SteelGearbox',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('ElectricPlanerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelGearItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelGearboxItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Hammer',
      'nameID': 'SteelHammer',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelHammerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Hoe',
      'nameID': 'SteelHoe',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelHoeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Machete',
      'nameID': 'SteelMachete',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelMacheteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Pickaxe',
      'nameID': 'SteelPickaxe',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelPickaxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Pipe',
      'nameID': 'SteelPipe',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelPipeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Plate',
      'nameID': 'SteelPlate',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ElectricStampingPressObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Road Tool',
      'nameID': 'SteelRoadTool',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelRoadToolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Saw Blade',
      'nameID': 'SteelSawBlade',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelSawBladeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Shovel',
      'nameID': 'SteelShovel',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelShovelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Sickle',
      'nameID': 'SteelSickle',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelSickleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Table Lamp',
      'nameID': 'SteelTableLamp',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelTableLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Brazier',
      'nameID': 'StoneBrazier',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneBrazierItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Ramp',
      'nameID': 'StoneRamp',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneRampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Road',
      'nameID': 'StoneRoad',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneRoadItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Road Tool',
      'nameID': 'StoneRoadTool',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneRoadToolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stop Sign',
      'nameID': 'StopSign',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StopSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Storage Silo',
      'nameID': 'StorageSilo',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StorageSiloItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stove',
      'nameID': 'Stove',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 900,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoveItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Street Sign',
      'nameID': 'StreetSign',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StreetSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Streetlamp',
      'nameID': 'Streetlamp',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StreetlampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Alligator',
      'nameID': 'StuffedAlligator',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AlligatorCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedAlligatorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Bison',
      'nameID': 'StuffedBison',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BisonCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedBisonItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Elk',
      'nameID': 'StuffedElk',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ElkCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedElkItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Goat',
      'nameID': 'StuffedGoat',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('MountainGoatCarcassItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedGoatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Jaguar',
      'nameID': 'StuffedJaguar',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('JaguarCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedJaguarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Turkey',
      'nameID': 'StuffedTurkey',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 4,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BreadItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedTurkeyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Wolf',
      'nameID': 'StuffedWolf',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WolfCarcassItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedWolfItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Substrate',
      'nameID': 'Substrate',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SubstrateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sugar',
      'nameID': 'Sugar',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sun Cheese',
      'nameID': 'SunCheese',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunflowerSeedItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('YeastItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sunflower Oil',
      'nameID': 'SunflowerOil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 4,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SunflowerSeedItem'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sunflower Seed',
      'nameID': 'SunflowerSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SunflowerItem'),
          'quantity': 0.5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SunflowerSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sweet Salad',
      'nameID': 'SweetSalad',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FruitSaladItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SimpleSyrupItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SweetSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Synthetic Rubber',
      'nameID': 'SyntheticRubber',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Tailor Bowler Hat',
      'nameID': 'TailorBowlerHat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailorBowlerHatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailor Pants',
      'nameID': 'TailorPants',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailorPantsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailor Shirt',
      'nameID': 'TailorShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailorShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailor Shoes',
      'nameID': 'TailorShoes',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailorShoesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailoring Basic Upgrade',
      'nameID': 'TailoringBasicUpgrade',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailoringBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailoring Modern Upgrade',
      'nameID': 'TailoringModernUpgrade',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailoringModernUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailoring Table',
      'nameID': 'TailoringTable',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 50,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailoringTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tall Boots',
      'nameID': 'TallBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tallow Candle',
      'nameID': 'TallowCandle',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 2,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallowCandleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tallow Lamp',
      'nameID': 'TallowLamp',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 2,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallowLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tallow Wall Lamp',
      'nameID': 'TallowWallLamp',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 3,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallowWallLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Taro Fries',
      'nameID': 'TaroFries',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TaroFriesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Taro Seed',
      'nameID': 'TaroSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TaroSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tasty Tropical Pizza',
      'nameID': 'TastyTropicalPizza',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawBaconItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TastyTropicalPizzaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Toilet',
      'nameID': 'Toilet',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ToiletItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tomato Seed',
      'nameID': 'TomatoSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TomatoSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Topped Porridge',
      'nameID': 'ToppedPorridge',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledGrainsItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ToppedPorridgeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tortilla',
      'nameID': 'Tortilla',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TortillaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Towel Rack',
      'nameID': 'TowelRack',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TowelRackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Transglutaminase',
      'nameID': 'Transglutaminase',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TransglutaminaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Transmission Pole',
      'nameID': 'TransmissionPole',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 4,
      'labor': 480,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TransmissionPoleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Treasury',
      'nameID': 'Treasury',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 4,
      'labor': 1500,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 60,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TreasuryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Trousers',
      'nameID': 'Trousers',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TrousersItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Truck',
      'nameID': 'Truck',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 2000,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 6,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 4,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TruckItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Upholstered Chair',
      'nameID': 'UpholsteredChair',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('UpholsteredChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Upholstered Couch',
      'nameID': 'UpholsteredCouch',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('UpholsteredCouchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Valve',
      'nameID': 'Valve',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelGearboxItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPipeItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ValveItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Vegetable Soup',
      'nameID': 'VegetableSoup',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('VegetableStockItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('VegetableSoupItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Vegetable Stock',
      'nameID': 'VegetableStock',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('VegetableStockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wainwright Table',
      'nameID': 'WainwrightTable',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WainwrightTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wall Candle',
      'nameID': 'WallCandle',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 3,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TallowCandleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WallCandleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Washboard',
      'nameID': 'Washboard',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WashboardItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Washing Machine',
      'nameID': 'WashingMachine',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 3,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WashingMachineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Waste Filter',
      'nameID': 'WasteFilter',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 480,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WasteFilterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Waterwheel',
      'nameID': 'Waterwheel',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WaterwheelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Cotton Curtains',
      'nameID': 'WeaveCottonCurtains',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonCurtainsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Cotton Fabric',
      'nameID': 'WeaveCottonFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Large Bath Mat',
      'nameID': 'WeaveLargeBathMat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClothItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 35,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeBathMatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Nylon Curtains',
      'nameID': 'WeaveNylonCurtains',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonThreadItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonCurtainsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Nylon Fabric',
      'nameID': 'WeaveNylonFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonThreadItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Small Bath Mat',
      'nameID': 'WeaveSmallBathMat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallBathMatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Wool Curtains',
      'nameID': 'WeaveWoolCurtains',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolCurtainsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Wool Fabric',
      'nameID': 'WeaveWoolFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wheat Ethanol',
      'nameID': 'WheatEthanol',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 0,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EthanolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wheat Mortar',
      'nameID': 'WheatMortar',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wheat Seed',
      'nameID': 'WheatSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WheatSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wheelbarrow',
      'nameID': 'Wheelbarrow',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenWheelItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WheelbarrowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wild Mix',
      'nameID': 'WildMix',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WildMixItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wild Stew',
      'nameID': 'WildStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 6,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Vegetable'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WildStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wilted Fiddleheads',
      'nameID': 'WiltedFiddleheads',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WiltedFiddleheadsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wind Turbine',
      'nameID': 'WindTurbine',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WindTurbineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Windmill',
      'nameID': 'Windmill',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WindmillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wood Cart',
      'nameID': 'WoodCart',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenWheelItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodCartItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Ceiling Light',
      'nameID': 'WoodenCeilingLight',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenCeilingLightItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wood Shop Cart',
      'nameID': 'WoodShopCart',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 225,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodCartItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('StoreItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodShopCartItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Elevator',
      'nameID': 'WoodenElevator',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 500,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenElevatorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Fabric Bed',
      'nameID': 'WoodenFabricBed',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenFabricBedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Floor Lamp',
      'nameID': 'WoodenFloorLamp',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenFloorLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Kitchen Lamp',
      'nameID': 'WoodenKitchenLamp',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenKitchenLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Latrine',
      'nameID': 'WoodenLatrine',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenLatrineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Straw Bed',
      'nameID': 'WoodenStrawBed',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenStrawBedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Table Lamp',
      'nameID': 'WoodenTableLamp',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenTableLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Wheel',
      'nameID': 'WoodenWheel',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenWheelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wool Carpet',
      'nameID': 'WoolCarpet',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolCarpetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wool Curtains',
      'nameID': 'WoolCurtains',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolCurtainsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wool Fabric',
      'nameID': 'WoolFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wool Yarn',
      'nameID': 'WoolYarn',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ShornWoolItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Work Backpack',
      'nameID': 'WorkBackpack',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WorkBackpackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Work Boots',
      'nameID': 'WorkBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WorkBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Worldly Donut',
      'nameID': 'WorldlyDonut',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WorldlyDonutItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Yeast',
      'nameID': 'Yeast',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 4,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('YeastItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Galaxy Vase',
      'nameID': 'GalaxyVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GalaxyVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Orange Vase',
      'nameID': 'OrangeVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OrangeVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Plant Vase',
      'nameID': 'PlantVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlantVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Purple Vase',
      'nameID': 'PurpleVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PurpleVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Red Vase',
      'nameID': 'RedVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RedVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Swirl Vase',
      'nameID': 'SwirlVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SwirlVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Copper Plate',
      'nameID': 'CopperPlate',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ScrewPressObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperPlateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    //======== Mod Added ========//
    ,
    {
      'name': 'Blender',
      'nameID': 'Blender',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 2,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BlenderItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Almond Milk',
      'nameID': 'AlmondMilkItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AcornItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TreeSapJuiceItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AlmondMilkItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Beet Juice',
      'nameID': 'BeetJuiceItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 1,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BeetJuiceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Coffee Powder',
      'nameID': 'CoffeePowderItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 5,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Seeds'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CoffeePowderItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corn Milk',
      'nameID': 'CornMilkItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CornMilkItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Giant Cactus Fruit Paste',
      'nameID': 'GiantCactusFruitPasteItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GiantCactusFruitItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GiantCactusFruitPasteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Granulated Coffee',
      'nameID': 'GranulatedCoffeeItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AcornItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GranulatedCoffeeItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huckleberry Paste',
      'nameID': 'HuckleberryPasteItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuckleberryPasteItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Papaya Paste',
      'nameID': 'PapayaPasteItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PapayaPasteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pineapple Juice',
      'nameID': 'PineappleJuiceItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PineappleJuiceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pineapple Paste',
      'nameID': 'PineapplePasteItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PineapplePasteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Prickly Pear Paste',
      'nameID': 'PricklyPearPasteItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PricklyPearFruitItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PricklyPearPasteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pumpkin Juice',
      'nameID': 'PumpkinJuiceItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PumpkinJuiceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pumpkin Paste',
      'nameID': 'PumpkinPasteItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PumpkinPasteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Soy Milk',
      'nameID': 'SoyMilkItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('TreeSapJuiceItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SoyMilkItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Teabag',
      'nameID': 'TeabagItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 5,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TeabagItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tomato Juice',
      'nameID': 'TomatoJuiceItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TomatoJuiceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tree Sap Juice',
      'nameID': 'TreeSapJuiceItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodPulpItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TreeSapJuiceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Drinks Machine',
      'nameID': 'DrinksMachineItem',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 2,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DrinksMachineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Berry Burst',
      'nameID': 'BerryBurstItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PineapplePasteItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberryPasteItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornMilkItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BerryBurstItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Breakfast On The Go',
      'nameID': 'BreakfastOnTheGoItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoJuiceItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PumpkinPasteItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BreakfastOnTheGoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bubble Tea',
      'nameID': 'BubbleTeaItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 6,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SoyMilkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornMilkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TeabagItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BubbleTeaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cappuccino',
      'nameID': 'CappuccinoItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 5,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SoyMilkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CoffeePowderItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('GranulatedCoffeeItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CappuccinoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Coffee',
      'nameID': 'CoffeeItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GranulatedCoffeeItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornMilkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TreeSapJuiceItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CoffeeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corn Supreme',
      'nameID': 'CornSupremeItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornMilkItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CornSupremeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Espresso Shot',
      'nameID': 'EspressoShotItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CoffeePowderItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornMilkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TreeSapJuiceItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EspressoShotItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Green Goddess',
      'nameID': 'GreenGoddessItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PricklyPearPasteItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornMilkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TreeSapJuiceItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GreenGoddessItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Herbal Tea',
      'nameID': 'HerbalTeaItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TeabagItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornMilkItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HerbalTeaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huckleberry Crush',
      'nameID': 'HuckleberryCrushItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberryPasteItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornMilkItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuckleberryCrushItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Latte',
      'nameID': 'LatteItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AlmondMilkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CoffeePowderItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('GranulatedCoffeeItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LatteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mixed Fruit',
      'nameID': 'MixedFruitItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PumpkinPasteItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('GiantCactusFruitPasteItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TreeSapJuiceItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MixedFruitItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mixology Advanced Upgrade',
      'nameID': 'MixologyAdvancedUpgradeItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 7,
      'labor': 5000,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MixologyAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mocha',
      'nameID': 'MochaItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 5,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AlmondMilkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TreeSapJuiceItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('GranulatedCoffeeItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MochaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Papaya Paradise',
      'nameID': 'PapayaParadiseItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 3,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PapayaPasteItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CoffeePowderItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornMilkItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PapayaParadiseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Spring Light Tea',
      'nameID': 'SpringLightTeaItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 5,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PumpkinJuiceItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornMilkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TeabagItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PricklyPearPasteItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SpringLightTeaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Taro Milk Tea',
      'nameID': 'TaroMilkTeaItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 6,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SoyMilkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TeabagItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TaroMilkTeaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Thai Milk Tea',
      'nameID': 'ThaiMilkTeaItem',
      'skill': getSkillByNameID('MixologySkill'),
      'level': 6,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('DrinksMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AlmondMilkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TeabagItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetGreensItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ThaiMilkTeaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== Fishing Table ========
    ,
    {
      'name': 'Bass Fillet',
      'nameID': 'BassFilletItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BassItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BassFilletItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Breadcrumbs',
      'nameID': 'BreadcrumbsItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BreadItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BreadcrumbsItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Can Of Tuna',
      'nameID': 'CanOfTunaItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 3,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TunaFilletItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CanOfTunaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crab Meat',
      'nameID': 'CrabMeatItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrabCarcassItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrabMeatItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crab Sticks',
      'nameID': 'CrabSticksItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrabMeatItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrabSticksItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Fillet',
      'nameID': 'FishFilletItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MediumFish'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishFilletItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Scraps',
      'nameID': 'FishScrapsItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fish'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishScrapsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Stick',
      'nameID': 'FishStickItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FishFilletItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishStickItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salmon Fillet',
      'nameID': 'SalmonFilletItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SalmonItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SalmonFilletItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salmon Patty',
      'nameID': 'SalmonPattyItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SalmonItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SalmonPattyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shark Steak',
      'nameID': 'SharkSteakItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 6,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BlueSharkItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SharkSteakItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tinned Saldines',
      'nameID': 'TinnedSaldinesItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 6,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PacificSardineItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TinnedSaldinesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tuna Fillet',
      'nameID': 'TunaFilletItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TunaItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TunaFilletItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== Fish Farm ========
    ,
    {
      'name': 'Caviar',
      'nameID': 'CaviarItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 6,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('FishFarmObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FishEggItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('InfusedFishOilItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CaviarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Egg',
      'nameID': 'FishEggItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('FishFarmObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PacificSardineItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishEggItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fishing Unplugged Upgrade',
      'nameID': 'FishingUnpluggedUpgradeItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('FishFarmObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishingUnpluggedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Infused Fish Oil',
      'nameID': 'InfusedFishOilItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 6,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('FishFarmObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FishFilletItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('InfusedFishOilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Kelp Nori',
      'nameID': 'KelpNoriItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 2,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('FishFarmObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('KelpNoriItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Marine Oil',
      'nameID': 'MarineOilItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('FishFarmObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrabMeatItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Omega-3 Capsule',
      'nameID': 'OmegaCapsuleItem',
      'skill': getSkillByNameID('FishingUnpluggedSkill'),
      'level': 5,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('FishFarmObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FishScrapsItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OmegaCapsuleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== Campfire ========
    ,
    {
      'name': 'Bass Stew',
      'nameID': 'BassStewItem',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BassFilletItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BassStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Crab Sticks',
      'nameID': 'CharredCrabSticksItem',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrabMeatItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrabSticksItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredCrabSticksItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Salmon',
      'nameID': 'FriedSalmonItem',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SalmonFilletItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedSalmonItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Urchin Soup',
      'nameID': 'UrchinSoupItem',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('UrchinItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('UrchinSoupItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== Cast Iron Stove ========
    ,
    {
      'name': 'Beer',
      'nameID': 'BeerItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('YeastItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BeerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sun Cheese (Milk)',
      'nameID': 'SunCheeseMilk',
      'skill': getSkillByNameID('RanchingSkill'),
      'level': 5,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MilkItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClothItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('ClothItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Dango',
      'nameID': 'DangoItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RiceFlourItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeanPasteItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DangoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Fingers',
      'nameID': 'FishFingersItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BreadcrumbsItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FishStickItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishFingersItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Taco 1',
      'nameID': 'FishTaco1Item',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FishFilletItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SalmonFilletItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishTaco1Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Taco 2',
      'nameID': 'FishTaco2Item',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishTaco2Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Oysters',
      'nameID': 'FriedOystersItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClamItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedOystersItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Meaty Spaghetti',
      'nameID': 'MeatySpaghettiItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredTomatoItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawSausageItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MeatySpaghettiItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pancakes',
      'nameID': 'PancakesItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PancakesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Popcorn',
      'nameID': 'PopcornItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PopcornItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pupusas',
      'nameID': 'PupusasItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PupusasItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shrimp Tempura',
      'nameID': 'ShrimpTempuraItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShrimpTempuraItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Spaghetti',
      'nameID': 'SpaghettiItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredTomatoItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SpaghettiItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wine',
      'nameID': 'WineItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== Bakery Oven ========
    ,
    {
      'name': 'BBQ Rib',
      'nameID': 'BBQRibItem',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 4,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredTomatoItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BBQRibItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Salmon 1',
      'nameID': 'BakedSalmon1Item',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SalmonFilletItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetGreensItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedSalmon1Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Salmon 2',
      'nameID': 'BakedSalmon2Item',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 4,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedSalmon2Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cupcake',
      'nameID': 'CupcakeItem',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CupcakeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Cakes',
      'nameID': 'FishCakesItem',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FishFilletItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BreadcrumbsItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishCakesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fruit Pie',
      'nameID': 'FruitPieItem',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 4,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FruitPieItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nachos',
      'nameID': 'NachosItem',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 6,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NachosItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pierogi',
      'nameID': 'PierogiItem',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 3,
      'labor': 35,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredSausageItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PierogiItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pumpkin Pie',
      'nameID': 'PumpkinPieItem',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PumpkinPieItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Roasted Bass',
      'nameID': 'RoastedBassItem',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FishFilletItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetGreensItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RoastedBassItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Waffles',
      'nameID': 'WafflesItem',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WafflesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== Kitchen ========
    ,
    {
      'name': 'Baked Cod',
      'nameID': 'BakedCodItem',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FishFilletItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetGreensItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedCodItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Grilled Shark Steak',
      'nameID': 'GrilledSharkSteakItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 5,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SharkSteakItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetGreensItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GrilledSharkSteakItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pan-Seared Shark Steak',
      'nameID': 'PanSearedSharkSteakItem',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SharkSteakItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('InfusedFishOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PanSearedSharkSteakItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salmon Burger',
      'nameID': 'SalmonBurgerItem',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SalmonPattyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetGreensItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SalmonBurgerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Saldine Ochazuke',
      'nameID': 'SaldineOchazukeItem',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FishFilletItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('KelpNoriItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SaldineOchazukeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shark Curry',
      'nameID': 'SharkCurryItem',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SharkSteakItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('InfusedFishOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SharkCurryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tuna Nigiri',
      'nameID': 'TunaNigiriItem',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TunaFilletItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('KelpNoriItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TunaNigiriItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Urchin Sushi',
      'nameID': 'UrchinSushiItem',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('UrchinItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MarineOilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('KelpNoriItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetGreensItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('UrchinSushiItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== Cooking Table ========
    ,{
      'name': 'Cooking Table',
      'nameID': 'CookingTableItem',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 0,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LumberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CookingTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bacon Sandwitch',
      'nameID': 'BaconSandwitchItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BreadItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawBaconItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BaconSandwitchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mayonnaise',
      'nameID': 'MayonnaiseItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EggItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredTaroItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MayonnaiseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mimosa Salad',
      'nameID': 'MimosaSaladItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 6,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('EggItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MayonnaiseItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MimosaSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Red Sauce',
      'nameID': 'RedSauceItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('AgaveLeavesItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RedSauceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salad Bonaparte',
      'nameID': 'SaladBonaparteItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredCamasBulbItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('BoiledGrainsItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('MayonnaiseItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SaladBonaparteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salad Health',
      'nameID': 'SaladHealthItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredBeetItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('EggItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SaladHealthItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salad Imperial',
      'nameID': 'SaladImperialItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledGrainsItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('MayonnaiseItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SaladImperialItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salad Student',
      'nameID': 'SaladStudentItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FireweedShootsItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredBeansItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredMushroomsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SaladStudentItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salad YIN-YANG',
      'nameID': 'SaladYINYANGItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 2,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledGrainsItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredMushroomsItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SaladYINYANGItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salad with Mussels',
      'nameID': 'SaladwithMusselsItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 5,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClamItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredMushroomsItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BoiledGrainsItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SaladwithMusselsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salad with sea urchin',
      'nameID': 'SaladwithseaurchinItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('UrchinItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredMushroomsItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SaladwithseaurchinItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sandwitch with bean paste and tomato',
      'nameID': 'SandwitchwithbeanpasteandtomatoItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 5,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BreadItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeanPasteItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SandwitchwithbeanpasteandtomatoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sandwitch with bean paste and tomato',
      'nameID': 'SeafoodSandwitchItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 5,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BreadItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClamItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('UrchinItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SeafoodSandwitchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Seafood salad',
      'nameID': 'SeafoodsaladItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 2,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('UrchinItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClamItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('EggItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SeafoodsaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'White Sauce',
      'nameID': 'WhiteSauceItem',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('CookingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MayonnaiseItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredFireweedShootsItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WhiteSauceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== 기계공 작업대 ========
    ,
    {
      'name': '20ft Shipping Container',
      'nameID': '20ftShippingContainerItem',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 100,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 50,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('20ftShippingContainerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': '40ft Shipping Container',
      'nameID': '40ftShippingContainerItem',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 200,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 100,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 60,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('40ftShippingContainerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bicycle',
      'nameID': 'BicycleItem',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 500,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClothItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BicycleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mechanical Steam Generator',
      'nameID': 'MechanicalSteamGeneratorItem',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 750,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('BoilerItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MechanicalSteamGeneratorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mechanical Transmission Pole',
      'nameID': 'MechanicalTransmissionPoleItem',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 400,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MechanicalTransmissionPoleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== 전동식 기계 정비공 작업대 ========
    ,
    {
      'name': 'Graphene',
      'nameID': 'GrapheneItem',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GrapheneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Underground Electric Power',
      'nameID': 'UndergroundElectricPowerItem',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 4,
      'labor': 800,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 14,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('UndergroundElectricPowerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Underground Mechanical Power',
      'nameID': 'UndergroundMechanicalPowerItem',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 4,
      'labor': 800,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 14,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('UndergroundMechanicalPowerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== Mixer ========
    ,
    {
      'name': 'Mixer',
      'nameID': 'MixerItem',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MixerItem'),
          'quantity': 100,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mixed Asphalt Concrete',
      'nameID': 'MixedAsphaltConcreteItem',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 1500,
      'craftingTable': getCraftingTableByNameID('MixerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 50,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 100,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 250,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AsphaltConcreteItem'),
          'quantity': 100,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mixed Stone Road',
      'nameID': 'MixedStoneRoadItem',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 1500,
      'craftingTable': getCraftingTableByNameID('MixerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 300,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 200,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneRoadItem'),
          'quantity': 100,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== 조립 라인 ========
    ,
    {
      'name': 'Elevator Doors',
      'nameID': 'ElevatorDoorsItem',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('ServoItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElevatorDoorsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    // ======== 자동화 조립 라인 ========
    ,
    {
      'name': 'Air Filter',
      'nameID': 'AirFilterItem',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 6,
      'labor': 700,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AirFilterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Big Car',
      'nameID': 'BigCarItem',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 6,
      'labor': 700,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BigCarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Car',
      'nameID': 'CarItem',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 6,
      'labor': 700,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Deco Outdoor Lamp',
      'nameID': 'DecoOutdoorLampItem',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DecoOutdoorLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Food Assembly Line',
      'nameID': 'FoodAssemblyLineItem',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 1000,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FoodAssemblyLineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Graphene Filter',
      'nameID': 'GrapheneFilterItem',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 5,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GrapheneItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GrapheneFilterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Logistics Trailer',
      'nameID': 'LogisticsTrailerItem',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 7,
      'labor': 2000,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 120,
          'reducible': true
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 80,
          'reducible': true
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 8,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 3,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LogisticsTrailerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Outdoor Lamp',
      'nameID': 'OutdoorLampItem',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OutdoorLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Police Car',
      'nameID': 'PoliceCarItem',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 6,
      'labor': 2000,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PoliceCarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Prime Mover',
      'nameID': 'PrimeMoverItem',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 7,
      'labor': 5000,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 80,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 60,
          'reducible': true
        },
        {
          'item': getItemByNameID('AdvancedCombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 10,
          'reducible': false
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PrimeMoverItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Super Car',
      'nameID': 'SuperCarItem',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 4,
      'labor': 2500,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('AdvancedCombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SuperCarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wagon',
      'nameID': 'WagonItem',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 1500,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WagonItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Water Turbine',
      'nameID': 'WaterTurbineItem',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 1500,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelGearItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WaterTurbineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    /* ======== Sample ========
    ,
    {
      'name': '',
      'nameID': 'Item',
      'skill': getSkillByNameID('MixologySkill'),
      'level': ,
      'labor': ,
      'craftingTable': getCraftingTableByNameID('BlenderObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID(''),
          'quantity': ,
          'reducible': true
        },
        {
          'item': getItemByNameID(''),
          'quantity': ,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID(''),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
    */
  ];
