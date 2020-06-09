const { generateNpc } = require('./npcGenerator');

describe('the npc generator', () => {
  it('should generate an npc', () => {
    const npc = generateNpc();
    expect(npc).toBeDefined();
  });

  it('should generate an npc with the right fields', () => {
    const npc = generateNpc();
    expect(npc).toHaveProperty('firstName');
    expect(npc).toHaveProperty('lastName');
    expect(npc).toHaveProperty('class');

    expect(Object.keys(npc).length).toEqual(3);
  });
});
