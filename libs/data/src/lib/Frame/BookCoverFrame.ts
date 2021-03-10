import BleededRectangleFrame from "./BleededRectangleFrame";
import Line from "./Line";

export default abstract class BookCoverFrame extends BleededRectangleFrame {
    public abstract foldLines: Array<Line>;
}