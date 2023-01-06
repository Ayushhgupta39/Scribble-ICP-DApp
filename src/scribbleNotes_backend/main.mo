import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";

actor scribbleNotes {

  // Datatype of Type Note
  public type Note = {
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote(titleText: Text, contentText: Text) {

    let newNote: Note = {
      title = titleText;
      content = contentText;
    };

    // Assigning the value of newNote to the notes list
    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));

  };

  //Storing the Notes
  public query func readNotes(): async [Note] {
    return List.toArray(notes);
  };

  //Deleting the Notes
  public func removeNote(id: Nat) {

    // Take drop Append
    let listFront = List.take(notes, id);
    let listBack = List.drop(notes,id+1);
    notes := List.append(listFront, listBack);
    Debug.print("Removed");
  }

}