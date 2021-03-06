import * as pkcs11 from "../pkcs11";
import * as core from "../core";
import {Storage} from "./storage";

/**
 * Data objects (object class `CKO_DATA`) hold information defined by an application. 
 * Other than providing access to it, Cryptoki does not attach any special meaning to a data object
 */
export class Data extends Storage {

    /**
     * Description of the application that manages the object (default empty)
     */
    get application(): string {
        return this.get("application");
    }

    set application(v: string) {
        this.set("application", v);
    }

    /**
     * DER-encoding of the object identifier indicating the data object type (default empty)
     */
    get objectId(): Buffer {
        return this.get("objectId");
    }

    set objectId(v: Buffer) {
        this.set("objectId", v);
    }

    /**
     * Value of the object (default empty)
     */
    get value(): Buffer {
        return this.get("value");
    }

    set value(v: Buffer) {
        this.set("value", v);
    }
}