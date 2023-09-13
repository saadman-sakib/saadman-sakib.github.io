// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello, {}!", name)
}

#[tauri::command]
fn fetch_data() -> String {
  let resp = reqwest::blocking::get("https://raw.githubusercontent.com/saadman-sakib/classroutine/main/routine.json");
  match resp {
    Ok(resp) => {
      match resp.text() {
        Ok(text) => {
          text
        },
        Err(_) => {
          "Error".to_string()
        }
      }
    },
    Err(_) => {
      "Error".to_string()
    }
  }
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, fetch_data])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}