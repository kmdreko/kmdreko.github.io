window.SIDEBAR_ITEMS = {"derive":[["TaskLocal","This takes care of implementing [`TaskLocal`] by setting up storage and using it for the required [`key()`][TaskLocal::key] method."]],"enum":[["StorageError","An error that is returned from the `TaskLocal::try_*` methods if the local value cannot be accessed."]],"struct":[["Storage","An opaque type used to hold and facilitate access to the task-local values."],["StorageIter","An iterator that yields references to all the currently accessible local values."],["StorageIterMut","An iterator that yields mutable references to all the currently accessible local values."],["TaskLocalFuture","A [`Future`] type that wraps another [`Future`] and stores a local value which will be available to the [`TaskLocal`] methods when executing."]],"trait":[["TaskLocal","Implementing this trait allows the type to be used with [`WithLocalExt::with_local`] on asynchronous tasks and be accessible via the other associated methods while executing those tasks."],["WithLocalExt","An extension type for [`Future`]s to annotate them with a [`TaskLocal`] type."]]};