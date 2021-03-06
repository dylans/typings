import Dialog, { DialogType } from './Dialog';
import 'dojo/domReady!';

/* Using just "import 'mid'"" above loads the modules for and causes the
 * appropriate side affects, but doesn't create any reference in the module
 *
 * Also we are using the destrcuring syntax to also import a reference to the
 * DialogType type above.  This will not actually emit anything because there
 * is no runtime emit for the type
 */

/* So others can consume our application module better under TypeScript, lets
 * specify an interface for our application and export it
 */
export interface App {
	dialog: DialogType;
}

/* Now we are creating our application object */
const app: App = {
	dialog: new Dialog()
};

/* Following dojo-boilerplate we will perform the same functions, though if you
 * edit this file, you will notice that all the expected code completion will
 * work
 */
app.dialog.placeAt(document.body);

app.dialog.startup();

app.dialog.show();

document.body.className += ' loaded';

/* Again, we are exporting default here, this means we will have to refer to it
 * properly if we were to utilize it elsewhere.
 */
export default app;
