module.exports = function hideLocation(d) {
	
	let enabled = false;
	
	d.command.add('stalkme', () => {
		enabled = !enabled;
		d.command.message(`${enabled? 'hiding' : 'showing'} location.`);
	});
		
	d.hook('C_VISIT_NEW_SECTION', 1, e => {
		if (enabled) { 
		return false;
		}
	});
};
