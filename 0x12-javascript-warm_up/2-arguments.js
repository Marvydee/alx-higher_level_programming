#!/usr/bin/node
const numArgs = arguments.length;

switch(numArgs)
{
	case 0:
		console.log('No argument');
		break;
	case 1:
		console.log('Argument found');
		break;
	default:
		console.log('Arguments found');
		break;
}
